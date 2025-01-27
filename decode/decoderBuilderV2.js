const {
	DECIPHER_REGEXP,
	HELPER_REGEXP,
	DECIPHER_NAME_REGEXPS,
	N_TRANSFORM_NAME_REGEXPS,
	N_TRANSFORM_REGEXP
} = require("./regexDec");
const vm = require("vm");
const querystring = require("querystring");
const fs = require("fs");
const path = require("path");
const matchRegex = (regex, str) => {
	const match = str.match(new RegExp(regex, "s"));
	if (!match) throw new Error(`Could not match ${regex}`);
	return match;
};
const matchFirst = (regex, str) => matchRegex(regex, str)[0];
const matchGroup1 = (regex, str) => matchRegex(regex, str)[1];


const getFuncName = (body, regexps) => {
	let fn;
	for (const regex of regexps) {
		try {
			fn = matchGroup1(regex, body);
			try {
				fn = matchGroup1(`${fn.replace(/\$/g, "\\$")}=\\[([a-zA-Z0-9$\\[\\]]{2,})\\]`, body);
			} catch (err) {
				// Function name is not inside an array
			}
			break;
		} catch (err) {
			continue;
		}
	}
	if (!fn || fn.includes("[")) throw Error();
	return fn;
};


const DECIPHER_FUNC_NAME = "decipher";
const N_TRANSFORM_FUNC_NAME = "nTransformFunc";
const DECIPHER_ARGUMENT = "sig";
const N_ARGUMENT = "ncode";

const extractDecipherFunc = (exports.d1 = body => {
	try {
		const helperObject = matchFirst(HELPER_REGEXP, body);
		const decipherFunc = matchFirst(DECIPHER_REGEXP, body);
		const resultFunc = `var ${DECIPHER_FUNC_NAME}=${decipherFunc};`;
		const callerFunc = `${DECIPHER_FUNC_NAME}(${DECIPHER_ARGUMENT});`;
		return helperObject + resultFunc + callerFunc;
	} catch (e) {
		return null;
	}
});

const extractDecipherWithName = (exports.d2 = body => {
	try {
		const decipherFuncName = getFuncName(body, DECIPHER_NAME_REGEXPS);
		const funcPattern = `(${decipherFuncName.replace(/\$/g, "\\$")}=function\\([a-zA-Z0-9_]+\\)\\{.+?\\})`;
		const decipherFunc = `var ${matchGroup1(funcPattern, body)};`;
		const helperObjectName = matchGroup1(";([A-Za-z0-9_\\$]{2,})\\.\\w+\\(", decipherFunc);
		const helperPattern = `(var ${helperObjectName.replace(/\$/g, "\\$")}=\\{[\\s\\S]+?\\}\\};)`;
		const helperObject = matchGroup1(helperPattern, body);
		const callerFunc = `${decipherFuncName}(${DECIPHER_ARGUMENT});`;
		return helperObject + decipherFunc + callerFunc;
	} catch (e) {
		return null;
	}
});


const extractNTransformFunc = (exports.n1 = body => {
	try {
		const nFunc = matchFirst(N_TRANSFORM_REGEXP, body);
		const resultFunc = `var ${N_TRANSFORM_FUNC_NAME}=${nFunc}`;
		const callerFunc = `${N_TRANSFORM_FUNC_NAME}(${N_ARGUMENT});`;
		return resultFunc + callerFunc;
	} catch (e) {
		return null;
	}
});
const extractNTransformWithName = (exports.n2 = body => {
	try {
		const nFuncName = getFuncName(body, N_TRANSFORM_NAME_REGEXPS);
		const funcPattern = `(${nFuncName.replace(/\$/g, "\\$")}=function\\([a-zA-Z0-9_]+\\)\\{.+?\\})`;
		const nTransformFunc = `var ${matchGroup1(funcPattern, body)};`;
		const callerFunc = `${nFuncName}(${N_ARGUMENT});`;
		return nTransformFunc + callerFunc;
	} catch (e) {
		return null;
	}
});


const getExtractFunctions = (extractFunctions, body, postProcess = null) => {
	for (const extractFunction of extractFunctions) {
		try {
			const func = extractFunction(body);
			if (!func) continue;
			return postProcess ? postProcess(func) : func;
			//console.log("ehzodkezhjoifjzo", postProcess ? postProcess(func) : func)
			//return new vm.Script(postProcess ? postProcess(func) : func);
		} catch (err) {
		}
	}
	return null;
};

const body = require("fs").readFileSync("./base.js", "utf-8");

fs.writeFileSync(path.join(__dirname, './build/decoder.js'), `${getExtractFunctions([extractDecipherFunc, extractDecipherWithName], body)}\n\n//NTransform\n${getExtractFunctions([extractNTransformFunc, extractNTransformWithName], body)}`);
