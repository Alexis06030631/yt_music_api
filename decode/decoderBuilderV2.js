const {
	DECIPHER_REGEXP,
	HELPER_REGEXP,
	DECIPHER_NAME_REGEXPS,
	N_TRANSFORM_NAME_REGEXPS,
	N_TRANSFORM_REGEXP, COMPOSER_REGEXP, COMPOSER_exTractFun, COMPOSER_exTractFun1Name, COMPOSER_exTractFun1,
	COMPOSER_exTractFun2Name, COMPOSER_exTractFun2, COMPOSER_exTractFun3, COMPOSER_exTractFun4, COMPOSER_exTractFun5,
	COMPOSER_exTractFun6, COMPOSER_exTractFun7, COMPOSER_exTractFun8, COMPOSER_exTractFun8E, COMPOSER_exTractFun8E2,
	COMPOSER_exTractFun8E3, COMPOSER_exTractFun8E4, COMPOSER_exTractFun9
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
const COMPOSE_FUN_NAME = "composeFunc";
const DECIPHER_ARGUMENT = "sig";
const N_ARGUMENT = "ncode";
const COMPOSE_ARGUMENT = "compArg";

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

const extractMacComposeFun = (exports.m1 = body => {
	try {
		const COMPOSER_decode = COMPOSE_FUN_NAME + matchFirst(COMPOSER_REGEXP, body).replace(matchGroup1(COMPOSER_REGEXP, body) + ``, '');
		const composerExtraFun1 = matchFirst(matchGroup1(COMPOSER_exTractFun1Name, COMPOSER_decode) + COMPOSER_exTractFun1, body)
		const composerExtraFun2 = matchFirst(matchGroup1(COMPOSER_exTractFun2Name, composerExtraFun1).replace(/\$/g, "\\$") + COMPOSER_exTractFun2, body)

		const composerExtraFun3 = 'const ' + matchFirst(matchGroup1(COMPOSER_exTractFun3, composerExtraFun2).replace(/\$/g, "\\$") + '=\\w.*?;', body)
		const composerExtraFun4 = 'const ' + matchFirst(matchGroup1(COMPOSER_exTractFun4, composerExtraFun2).replace(/\$/g, "\\$") + '=.*?}', body) + ';'

		const composerExtraFun5 = 'const ' + matchFirst(matchGroup1(COMPOSER_exTractFun5, composerExtraFun2).replace(/\$/g, "\\$") + '=.*?}', body) + ';'
		const composerExtraFun6 = 'const ' + matchGroup1('(' + matchGroup1(COMPOSER_exTractFun6, composerExtraFun5).replace(/\$/g, "\\$") + '=.*?)[,|;]', body) + ';'
		const composerExtraFun7 = 'const ' + matchFirst(matchGroup1(COMPOSER_exTractFun7, composerExtraFun5).replace(/\$/g, "\\$") + '=.*?}', body) + ';'

		console.log(COMPOSER_exTractFun8)
		let composerExtraFunCompose1 = matchGroup1(COMPOSER_exTractFun8, body)
		const composerExtraFunCompose1E = matchGroup1(COMPOSER_exTractFun8E, composerExtraFunCompose1)
		const composerExtraFunCompose2 = matchFirst(composerExtraFunCompose1E.replace(/\./g, '\\.').replace(/\$/g, "\\$") + COMPOSER_exTractFun8E2, body)
		const composerExtraFunCompose3E = matchGroup1(COMPOSER_exTractFun8E3, composerExtraFunCompose1)
		const composerExtraFunCompose3 = matchFirst(composerExtraFunCompose3E + COMPOSER_exTractFun1, body)
		const composerExtraFunCompose4E = matchGroup1(COMPOSER_exTractFun8E, composerExtraFunCompose3).split('.')[0]
		const composerExtraFunCompose4 = matchFirst(COMPOSER_exTractFun8E4(composerExtraFunCompose4E), body)
		const composerExtraFunCompose5 = matchFirst(composerExtraFunCompose1E.replace(/\./g, '\\.').replace(/\$/g, "\\$") + COMPOSER_exTractFun9, body)

		composerExtraFunCompose1 = 'var ' + composerExtraFunCompose1E.split('.')[0] + '={};const orgaCompose=' + matchFirst(COMPOSER_exTractFun8, body)

		const composeFuncs = composerExtraFunCompose1 + '\n' + composerExtraFunCompose2 + '\n' + composerExtraFunCompose5 + '\n' + composerExtraFunCompose3 + '\n' + composerExtraFunCompose4

		let callerFunc = `const COMPOSE_FUN_NAME_val = ${COMPOSE_FUN_NAME}(${COMPOSE_ARGUMENT});const COMPOSE_FUN_NAME_obj = Object.keys(COMPOSE_FUN_NAME_val).filter((key) => {return COMPOSE_FUN_NAME_val[key] !== true;});
		orgaCompose(COMPOSE_FUN_NAME_val[COMPOSE_FUN_NAME_obj[0]], COMPOSE_FUN_NAME_val[COMPOSE_FUN_NAME_obj[1]], COMPOSE_FUN_NAME_val[COMPOSE_FUN_NAME_obj[2]]);`

		return COMPOSER_decode + '\n' + composerExtraFun1 + '\n' + composerExtraFun2 + '\n' + composerExtraFun3 + '\n' + composerExtraFun4 + '\n' + composerExtraFun5 + '\n' + composerExtraFun6 + '\n' + composerExtraFun7 + '\n' + composeFuncs + '\n' + callerFunc;
	} catch (e) {
		return null;
	}
})

const body = require("fs").readFileSync("./base.js", "utf-8");


fs.writeFileSync(path.join(__dirname, './build/decoder.js'), `${getExtractFunctions([extractDecipherFunc, extractDecipherWithName], body)}\n\n//NTransform\n${getExtractFunctions([extractNTransformFunc, extractNTransformWithName], body, code => code.replace(/if\(typeof \S+==="undefined"\)return \S+;/, ""),)}\n\n//Composer\n${getExtractFunctions([extractMacComposeFun], body)}`)
