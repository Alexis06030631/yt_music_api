const fs = require('fs')
const path = require('path')
let jsbase = fs.readFileSync(path.join(__dirname, './base.js'), 'utf-8')
const params_buildmapDecompose = []

function searchInFunction(text) {
	return extractDataFromFunction(jsbase.match(new RegExp(`^.*${text}.*$`, 'm'))?.[0])
}

function searchFunction(functionName) {
	return extractDataFromFunction(jsbase.match(new RegExp(`^${functionName}=function\\(.*?\\){.*?};$`, 'm'))?.[0])
}

function extractDataFromFunction(text) {
	let data = text.match(/(?<name>.*?)=function\((?<params>.*?)\){(?<function>.*)};/m)
	data.groups.function = data?.groups?.function.split(';').join(';\n')
	return data
}

buildFunc_mapDecompose()

function buildFunc_mapDecompose(data = searchInFunction('\\w\\.signatureCipher;')) {
	const mapper = fs.readFileSync(path.join(__dirname, './mappers/mapDecompose_mapper.js'), 'utf-8')
	const letterSignature = data.groups.function.match(/var (\w)/m)[1]
	const functContent = data.groups.function.match(/\W\w={(.*|\n)*/mg).join('').replace(new RegExp(`^${letterSignature}=(.*?)\\((.*?)\\);$`, "mg"), `${letterSignature}=urlDecode($2);`)

	functContent.split('\n').forEach(line => {
		const match = line.match(/\w\.(?<key>\w*)=(?<value>.*?);/m)
		if (match && !match[2].includes('!')) {
			params_buildmapDecompose.push('m.' + match.groups.key)
		}

	})

	fs.writeFileSync(path.join(__dirname, './mappers/temp_mapDecompose.js'), mapper.replace(/\/\/ REPLACE_letter_key*/mig, letterSignature).replace(/\/\/ REPLACE_all*/mig, functContent))
}

let letterKeyDecrypt = 'a'
buildFunc_keyDecrypt()

function buildFunc_keyDecrypt(data = searchInFunction('set\\("alr","yes"\\).*decodeURIComponent.*encodeURIComponent')) {
	const mapper = fs.readFileSync(path.join(__dirname, './mappers/keyDecrypt_mapper.js'), 'utf-8')
	const keyDecrypt = jsbase.match(/\b(\w)=\1\b\.split\(""\).*return \1\b.join\(""\)/m)[0]
	letterKeyDecrypt = keyDecrypt.match(/(\w)=/m)[1]
	fs.writeFileSync(path.join(__dirname, './mappers/temp_keyDecrypt.js'), mapper.replace(/\/\/ REPLACE_letter/mig, letterKeyDecrypt).replace(/\/\/ REPLACE_all*/mig, keyDecrypt))

	const mapper_2 = fs.readFileSync(path.join(__dirname, './mappers/decryptMap_mapper.js'), 'utf-8')
	fs.writeFileSync(path.join(__dirname, './mappers/temp_decryptMap.js'), mapper_2.replace(/\/\/ REPLACE_all*/mig, jsbase.match(new RegExp(`var ${keyDecrypt.match(/;(\w+)\./m)[1]}={(.|\\n)*?};`, 'mg'))?.[0], new RegExp(`var ${keyDecrypt.match(/;(\w+)\./m)[1]}={(.|\\n)*?};`, 'mg')))
}

buildFunc_fastDownload()

function buildFunc_fastDownload() {

	let data2 = jsbase.match(/^.*(var \w=.+.split?.+\(.*?\),\w=\[-?\d{3,}(?:|.|\n)*?};)$/m)
	data2 = `function fastDownload(${letterKeyDecrypt}){` + data2[1]
	fs.writeFileSync(path.join(__dirname, './mappers/temp_fastDownload.js'), data2)
}

// Search SignatureTimestamp
const signatureTimestamp = jsbase.match(/signatureTimestamp:(\d*?),/m)[1]

// Build all functions from base.js
fs.writeFileSync(path.join(__dirname, './build/decoder.js'), '')
fs.writeFileSync(path.join(__dirname, './build/decoder.js'),
	fs.readFileSync(path.join(__dirname, './mappers/default.js'), 'utf-8').replace(/\/\/REPLACE_vals/mig, params_buildmapDecompose).replace(/\/\/REPLACE_signatureTimestamp/mig, signatureTimestamp)
	+ '\n\n' +
	fs.readFileSync(path.join(__dirname, './mappers/temp_mapDecompose.js'), 'utf-8')
	+ '\n\n' +
	fs.readFileSync(path.join(__dirname, './mappers/temp_keyDecrypt.js'), 'utf-8')
	+ '\n\n' +
	fs.readFileSync(path.join(__dirname, './mappers/temp_decryptMap.js'), 'utf-8') +
	'\n\n' +
	fs.readFileSync(path.join(__dirname, './mappers/temp_fastDownload.js'), 'utf-8'))
console.log('Decode functions built successfully!')
console.log('---------------Test if it works-----------------')
//require('./build_test.js')
console.log('WARNING: Test Bypassed, please test manually')
