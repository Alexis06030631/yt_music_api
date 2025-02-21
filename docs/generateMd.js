const path = require('path');
const ApiDocumenter = require(`./temp/ytmusic_api_unofficial.api.json`);
const fs = require("fs");
const {copySync} = require("fs-extra");
const {parse} = require('comment-parser')
require('./versionning.js')
const version = require('./.vitepress/version.json')
const {MozillaType} = require('./default.json')
const bugs_data = require('./errors.json')
const tsImport = require('import-single-ts');


const pathDocVersion = path.join(__dirname, './documentation/')
const defaultDir = path.join(__dirname, 'default')
const themeConfig = path.join(__dirname, ".vitepress/themeConfig.json");
const types = {
	Function: {
		pos: 1,
		path: `${pathDocVersion}/method/`,
		data: [],
		url: `/documentation/method/`,
		name: 'Methods'
	},
	Class: {
		pos: 2,
		path: `${pathDocVersion}/class/`,
		data: [],
		url: `/documentation/class/`,
		name: 'Classes'
	},
	TypeAlias: {
		pos: 3,
		path: `${pathDocVersion}/type/`,
		data: [],
		url: `/documentation/type/`,
		name: 'Types'
	}
}

// Create folder
if (!fs.existsSync(pathDocVersion)) fs.mkdirSync(pathDocVersion);
ApiDocumenter.members[0].members.forEach(member => {
	createFile(member)
});
fs.readFile(path.join(__dirname, 'index.md'), 'utf8', (err, data) => {
	if (err) throw err;
	fs.writeFileSync(path.join(pathDocVersion, 'index.md'), data.replace(/{version__}/gi, version.latestVersion), 'utf8')
})

async function createFile(member) {
	const {name, docComment, members} = member;
	// If @hideconstructor is present, hide the constructor
	if (docComment.includes('@hideconstructor')) return;

	const linkToType = types[attributeType(member)];
	if (!linkToType?.path) return //console.log(`No path for ${attributeType(kind, name)}, ${name}`);

	linkToType.data.push(member);
	if (!fs.existsSync(linkToType.path)) fs.mkdirSync(linkToType.path);
	const fileName = `${name}.md`;
	let filePath = path.join(linkToType.path, fileName);

	//if(!name.includes('downloadManager')) return 'Method'
	const bugs = bugs_data?.[linkToType.name].filter(e => e.name === name)
	let fileContent = '<!-- This file is generated by a script. Do not edit directly -->\n' +
		`# ${name}${linkToType.name === "Types" ? "" : "()"} - ${types[attributeType(member)]?.name}${bugs.length ? `<Badge type="warning" text="${bugs.length}" />` : ''}\n`
	if (bugs?.length) {
		for (const bug of bugs) {
			fileContent += `:::${bug.type} ${bug.title}\n${bug.description}\n:::\n\n`
		}
	}

	if (attributeType(member) === 'Function') {
		const Tdocs = extractDataFormDocComment(member)
		const params = Object.keys(Tdocs.params).map(e => Tdocs.params[e])
		fileContent += `${Tdocs.description}\n\n---\n` +
			`**Builder**:\n` +
			`\`\`\`\`javascript\n` +
			`${name}(${params.map(e => e.name).join(', ')})\n` +
			`\`\`\`\`\n\n`
		if (params.length) {
			fileContent += `### Parameters\n` +
				`${createTab(['Parameter', 'Type', 'Description', 'Optional'], params.map(e => {
					return {
						parameter: e.name,
						type: e.type,
						description: e.description,
						optional: e.optional ? '<h1 style="color: darkgreen">✓</h1>' : '<h1 style="color: darkred">𐄂</h1>'
					}
				}), [0, 1, 2, 3])}`
		}
		fileContent += `\n\n<span class="flex_return">**Return:**&nbsp;\n` +
			`${member.excerptTokens.slice(member.returnTypeTokenRange.startIndex, member.returnTypeTokenRange.endIndex).map(e => {
				return typeUrlGenerator(e)
			}).join('').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`
	} else if (attributeType(member) === 'Class') {
		fileContent += `${docComment}\n\n---\n`
		const subMembersContent = subMembers(members)

		if (subMembersContent.functions.length && subMembersContent.properties.length) {
			const proprs = []
			subMembersContent.properties.forEach((prop) => {
				proprs.push(`[${prop.name}](#${prop.name.toLowerCase()})`)
			})
			const funcs = []
			subMembersContent.functions.forEach((func) => {
				funcs.push(`[${func.name}](#function-${func.name.toLowerCase()})`)
			})
			fileContent += createTab([generateDetailDisclosure('Properties', proprs.join('\n')), generateDetailDisclosure('Functions', funcs.join('\n'))])
		} else if (subMembersContent.functions.length) {
			fileContent += createTab([generateDetailDisclosure('Functions', subMembersContent.functions.map(e => `[${e.name}](#function-${e.name.toLowerCase()})`).join('\n'))])
		} else if (subMembersContent.properties.length) {
			fileContent += createTab([generateDetailDisclosure('Properties', subMembersContent.properties.map(e => `[${e.name}](#${e.name.toLowerCase()})`).join('\n'))])
		}


		if (subMembersContent.functions.length) {
			fileContent += `\n\n\n # Functions\n\n`
			subMembersContent.functions.forEach(func => {
				const Tdocs = extractDataFormDocComment(func)
				fileContent += `\n## Function ${func.name}() ${Tdocs.tags.find(e => e.tag === 'deprecated') ? '<Badge type="warning" text="Deprecated"/>' : ''}\n`
				if (Tdocs.tags.find(e => e.tag === 'deprecated')) {
					fileContent += `:::warning Deprecated\n${Tdocs.tags.find(e => e.tag === 'deprecated').description}\n:::\n\n`
				}

				fileContent += `${Tdocs?.description || ''}\n\n` +
					`**Builder**:\n` +
					`\`\`\`\`javascript\n` +
					`${name}.${func.name}(${func.parameters.map(e => e.parameterName).join(', ')})\n` +
					`\`\`\`\`\n\n`
				if (func.parameters.length) {
					fileContent += `### Parameters\n` +
						`${createTab(['Parameter', 'Type', 'Description', 'Optional'], func.parameters.map(e => {
							return {
								parameter: Tdocs.params[e.parameterName]?.name,
								type: Tdocs.params[e.parameterName]?.type,
								description: Tdocs.params[e.parameterName]?.description,
								optional: Tdocs.params[e.parameterName]?.optional ? '✓' : '𐄂'
							}
						}), [0, 1, 2, 3])}`
				}
				fileContent += `\n\n<span class="flex_return">**Return:**&nbsp;\n` +
					`${func.excerptTokens.slice(func.returnTypeTokenRange.startIndex, func.returnTypeTokenRange.endIndex).map(e => {
						return typeUrlGenerator(e)
					}).join('').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`

			})
		}
		if (subMembersContent.properties.length) {

			fileContent += `\n\n\n # Properties\n\n`
			subMembersContent.properties.forEach(prop => {
				prop = extractDataFormDocCommentProp(prop)
				fileContent += `\n## ${prop.name}\n`
				fileContent += `${prop?.description || ''}\n\n` +
					`**Builder**:\n` +
					`\`\`\`\`javascript\n` +
					`${name}.${prop.name}\n` +
					`\`\`\`\`\n\n`

				fileContent += `\n\n**Return:**\n` +
					`<span class="flex_return">${prop.excerptTokens.slice(prop.propertyTypeTokenRange.startIndex, prop.propertyTypeTokenRange.endIndex).map(e => {
						return typeUrlGenerator(e)
					}).join('').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`
			})
		}
	} else {
		const data = await tsImport.importSingleTs(path.join('../', member.fileUrlPath), {tsconfig: path.join(__dirname, '../', 'tsconfig.json')})
		let vars
		if (member.name === 'optionsType') vars = data?.["options"]
		else vars = member.excerptTokens.filter(e => e.kind === 'Reference').map(e => data?.[e.text])[0]

		if (!vars) return
		fileContent += `${member.docComment}\n\n---\n` +
			`**Content**:\n` +
			`\`\`\`json\n` +
			`${member.name} = ${JSON.stringify(vars, null, 2)}\n` +
			`\`\`\`\`\n\n`

	}

	// Save file
	fs.writeFileSync(filePath, fileContent);
}

function subMembers(members) {
	const returnVal = {
		properties: [],
		functions: [],
	}

	members && members.forEach(member => {
		const {kind} = member;
		switch (kind) {
			case 'Property':
				returnVal.properties.push(member)
				break;
			case 'Function':
				returnVal.functions.push(member)
				break;
			case 'Method':
				returnVal.functions.push(member)
				break;
			default:
				break;
		}
	});
	return returnVal;

}

function createTab(header = [], properties = [], center = []) {
	let tab = '';
	header.forEach((head, i) => {
		tab += `| ${head} `
		if (i === header.length - 1) {
			tab += '|\n'
			header.forEach((head, i) => {
				tab += `| ${center.includes(i) ? ':' : ''}---${center.includes(i) ? ':' : ''} `
				if (i === header.length - 1) {
					tab += `|\n`
				}
			})
		}
	})
	properties.forEach((prop) => {
		header.forEach((head) => {
			tab += `| ${prop[head.toLowerCase()] || ''} `
		})
		tab += '|\n'
	})
	return tab;

}

function attributeType(method, v2 = false) {
	switch (method?.kind) {
		case 'Class':
			if (method.fileUrlPath.includes('src/types')) return 'Interface'
			else return method.kind
		case 'Namespace':
			if (method.name.includes('Manager')) return 'Method'
			return method.kind
		case 'TypeAlias':
			if (method.name.includes('_param')) return 'Param'
			if (v2 && method.fileUrlPath.includes('src/types')) return 'Interface'
			else return method.kind
		default:
			return method?.kind
	}
}

function extractDataFormDocComment(doc) {
	const parsed = parse(doc.docComment)[0] || {name: doc.name, description: doc.docComment, tags: []}
	parsed.params = {}
	const tmp = [...doc.parameters, ...parsed.tags.filter((e) => e.tag === 'param')].reduce((a, item) => {
		const b = a.findIndex(e => (e.name || e.parameterName) === (item.name || item.parameterName))
		if (b === -1) a.push(item)
		else a[b] = {...a[b], ...item}
		return a
	}, [])
	tmp.forEach(e => {
		parsed.params[e?.name || e?.parameterName] = {
			name: e?.name || e?.parameterName,
			description: e?.description?.replace(/^\W+/g, '') || '',
			type: typeUrlGenerator(doc.excerptTokens[doc.parameters.find(p => (p.name || p.parameterName) === (e?.name || e?.parameterName))?.parameterTypeTokenRange.endIndex - 1] || {text: 'any'}),
			optional: doc.parameters.find(p => p.parameterName === (e?.name || e?.parameterName))?.isOptional
		}
	})
	return parsed
}

function extractDataFormDocCommentProp(prop) {
	const parsed = parse(prop.docComment)[0] || {name: prop.name, description: prop.docComment, tags: []}
	return Object.assign(parsed, prop)
}

function typeUrlGenerator(type) {
	const TypeLower = type.text.toLowerCase();
	if (MozillaType[TypeLower]) {
		return `[${TypeLower}![Link](/assets/img/external_link.svg)](${MozillaType[TypeLower]})`
	} else if (type.kind !== 'Reference') return type.text
	else {
		const dt = ApiDocumenter.members[0].members.find(e => e.canonicalReference.includes(`~${type.text}:`) || e.canonicalReference.includes(`!${type.text}:`))
		if (attributeType(dt, true) && !types[attributeType(dt, true)]) return null
		if (dt && attributeType(dt, true)) {
			return `[${type.text}](${path.join(types[attributeType(dt, true)].url, type.text)})`
		} else {
			return `[${type.text}![Link](/assets/img/external_link.svg)](https://www.google.com/search?q=${type.text})`
		}
	}
}

function generateDetailDisclosure(title, content) {
	title = title.replace(/\n/g, '<br>')
	content = content.replace(/\n/g, '<br>')
	return `<details open><summary>${title}</summary><p>${content}</p></details>`
}

copySync(defaultDir, path.join(pathDocVersion), {overwrite: true});
generateSidebar()

function generateSidebar() {
	// Open vitepressConfig file
	let config = require(themeConfig)

	// Replace sidebar
	config.sidebar = [{
		text: 'Introduction',
		collapsed: false,
		items: [
			{text: 'What is YouTubeMusic?', link: '/documentation/what-is-ytmusic'},
			{text: 'Getting Started', link: '/documentation/getting-started'}
		]
	},]
	Object.keys(types).forEach(key => {
		config.sidebar.push({
			text: types[key].name,
			items: types[key].data.map(e => {
				return {
					text: e.name,
					link: `${types[key].url}${e.name}`
				}
			})
		})
	})

	// Save file
	fs.writeFileSync(themeConfig, JSON.stringify(config, null, 2), 'utf8')
}
