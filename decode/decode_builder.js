const fs = require('fs')
const path = require('path')
let jsbase = fs.readFileSync(path.join(__dirname, './base.js'), 'utf-8')
const params_buildmapDecompose = []

function searchInFunction(text){
	return extractDataFromFunction(jsbase.match(new RegExp(`^.*${text}.*$`, 'm'))?.[0])
}

function searchFunction(functionName){
	return extractDataFromFunction(jsbase.match(new RegExp(`^${functionName}=function\\(.*?\\){.*?};$`, 'm'))?.[0])
}

function extractDataFromFunction(text){
	let data = text.match(/(?<name>.*?)=function\((?<params>.*?)\){(?<function>.*)};/m)
	data.groups.function = data?.groups?.function.split(';').join(';\n')
	return data
}
buildFunc_mapDecompose()
function buildFunc_mapDecompose(data=searchInFunction('a\\.signatureCipher')){
	const mapper = fs.readFileSync(path.join(__dirname, './mappers/mapDecompose_mapper.js'), 'utf-8')
	const functContent = data.groups.function.match(/a={(.*|\n)*/mg).join('').replace(/^b=(.*?)\((.*?)\);/mg, 'b=urlDecode($2);')

	functContent.split('\n').forEach(line => {
		const match = line.match(/a\.(?<key>\w*)=(?<value>.*?);/m)
		if(match && !match[2].includes('!')){
			params_buildmapDecompose.push('m.'+match.groups.key)
		}

	})

	fs.writeFileSync(path.join(__dirname, './mappers/temp_mapDecompose.js'), mapper.replace(/\/\/ REPLACE_all*/mig, functContent))
}
buildFunc_keyDecrypt()
function buildFunc_keyDecrypt(data=searchInFunction('b=void 0===b\\?"":b;c=void 0===c\\?"":c;a=')){
	const mapper = fs.readFileSync(path.join(__dirname, './mappers/keyDecrypt_mapper.js'), 'utf-8')
	const keyDecrypt = searchFunction(data.groups.function.match(/c=(.*?)\(/m)[1])
	fs.writeFileSync(path.join(__dirname, './mappers/temp_keyDecrypt.js'), mapper.replace(/\/\/ REPLACE_all*/mig, keyDecrypt.groups.function))


	const mapper_2 = fs.readFileSync(path.join(__dirname, './mappers/decryptMap_mapper.js'), 'utf-8')
	fs.writeFileSync(path.join(__dirname, './mappers/temp_decryptMap.js'), mapper_2.replace(/\/\/ REPLACE_all*/mig, jsbase.match(new RegExp(`var ${keyDecrypt.groups.function.match(/^(\w*)\..*(.*);/m)[1]}={(.|\\n)*?};`, 'mg'))?.[0]))
}
buildFunc_fastDownload()
function buildFunc_fastDownload(){
	let data = jsbase.match(/(var b=a\.split\(""\),c=(.|\n)*?};$)/m)
	data = `function fastDownload(a){`+data[0]
	fs.writeFileSync(path.join(__dirname, './mappers/temp_fastDownload.js'), data)
}
// Search SignatureTimestamp
const signatureTimestamp = jsbase.match(/signatureTimestamp:(\d*?),/m)[1]

// Build all functions from base.js
fs.writeFileSync(path.join(__dirname, './build/decoder.js'), '')
fs.writeFileSync(path.join(__dirname, './build/decoder.js'), fs.readFileSync(path.join(__dirname, './mappers/default.js'), 'utf-8').replace(/\/\/REPLACE_vals/mig, params_buildmapDecompose).replace(/\/\/REPLACE_signatureTimestamp/mig, signatureTimestamp) + '\n\n' + fs.readFileSync(path.join(__dirname, './mappers/temp_mapDecompose.js'), 'utf-8') + '\n\n' + fs.readFileSync(path.join(__dirname, './mappers/temp_keyDecrypt.js'), 'utf-8') + '\n\n' + fs.readFileSync(path.join(__dirname, './mappers/temp_decryptMap.js'), 'utf-8')+ '\n\n' + fs.readFileSync(path.join(__dirname, './mappers/temp_fastDownload.js'), 'utf-8'))
console.log('Decode functions built successfully!')
console.log('---------------Test if it works-----------------')
require('./build_test.js')
