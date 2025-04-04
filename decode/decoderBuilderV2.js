const {
	DECIPHER_REGEXP,
	HELPER_REGEXP,
	DECIPHER_NAME_REGEXPS,
	N_TRANSFORM_NAME_REGEXPS,
	N_TRANSFORM_REGEXP, COMPOSER_REGEXP, COMPOSER_exTractFun, COMPOSER_exTractFun1Name, COMPOSER_exTractFun1,
	COMPOSER_exTractFun2Name, COMPOSER_exTractFun2, COMPOSER_exTractFun3, COMPOSER_exTractFun4, COMPOSER_exTractFun5,
	COMPOSER_exTractFun6, COMPOSER_exTractFun7, COMPOSER_exTractFun8, COMPOSER_exTractFun8E, COMPOSER_exTractFun8E2,
	COMPOSER_exTractFun8E3, COMPOSER_exTractFun8E4, COMPOSER_exTractFun9, POT_exTractFun1, POT_exTractFun2,
	POT_exTractFun3, POT_exTractFun3E, POT_exTractFun4, POT_exTractFun5, POT_exTractFun5E2, POT_exTractFun5E3,
	POT_exTractFun4bis, POT_exTractFun5E5, POT_exTractFun6, POT_exTractFun10, POT_exTractFun11, POT_exTractFun12
} = require("./regexDec");
const vm = require("vm");
const querystring = require("querystring");
const fs = require("fs");
const path = require("path");
const matchRegex = (regex, str, flag = 's') => {
	const match = str.match(new RegExp(regex, flag));
	if (!match) throw new Error(`Could not match ${regex}`);
	return match;
};
const matchFirst = (regex, str, flag = 's') => matchRegex(regex, str, flag)[0];
const matchGroup1 = (regex, str, flag = 's') => matchRegex(regex, str, flag)[1];


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
		let helperObject = matchFirst(HELPER_REGEXP, body);
		const decipherFunc = matchFirst(DECIPHER_REGEXP, body, 'gm');
		const split = matchGroup1(`split\\((.*?)\\[`, decipherFunc)
		if (split) {
			const splitVarObject = matchGroup1(`(${split}=".*?),\\n`, body);
			helperObject = splitVarObject + '\n' + helperObject;
		}
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
		const nFunc = matchGroup1("^.*(function.*?var \\w=.+.split?.+\\(.*?\\),\\w=\\[-?\\d{3,}(?:|.|\\n)*?};)$", body, 'm');
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
			throw err;
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

const extractPotKey = (exports.pot = body => {
	try {
		//Lj = function(V, t) {
		// t = (x-goog-eom-visitor-id)
		let extractPotKeyFun1E = matchRegex(POT_exTractFun1, body, 'sg').filter((value) => value.includes('html5_web_po_token_disable_caching'))[0]
		let extractPotKeyFun1E1 = matchGroup1(POT_exTractFun1, extractPotKeyFun1E)
		let extractPotKeyFun1E2 = matchGroup1(POT_exTractFun2, extractPotKeyFun1E)

		let extractPotKeyFun1 = `const potGenerator=function${extractPotKeyFun1E1}{return ` + extractPotKeyFun1E2 + '};'

		let extractPotKeyFun2E = matchGroup1(POT_exTractFun3E, extractPotKeyFun1)
		let extractPotKeyFun2E2 = matchFirst(POT_exTractFun3E, extractPotKeyFun1)
		let extractPotKeyFun2 = extractPotKeyFun2E2.split('.' + extractPotKeyFun2E)[0] + matchGroup1(POT_exTractFun3(extractPotKeyFun2E), body)
		extractPotKeyFun2 = extractPotKeyFun2.replace(matchFirst('{.*?;return', extractPotKeyFun2), '{return')
		const defaultEmpty = 'const ' + extractPotKeyFun2E2.split('.')[0] + `={${extractPotKeyFun2E2.split('.')[1]}:{}};`

		let extractPotKeyFun3E = matchGroup1(POT_exTractFun4, extractPotKeyFun2)
		let extractPotKeyFun3 = matchFirst(extractPotKeyFun3E.replace(/\$/g, "\\$") + COMPOSER_exTractFun1, body)

		let extractPotKeyFun4E = matchGroup1(POT_exTractFun5, extractPotKeyFun2)
		let extractPotKeyFun4 = matchFirst(extractPotKeyFun4E.replace(/\$/g, "\\$") + POT_exTractFun5E2, body)
		let extractPotKeyFun4bis = matchGroup1(POT_exTractFun4bis, extractPotKeyFun4)
		let extractPotKeyFun4E2 = matchGroup1(POT_exTractFun5E3, extractPotKeyFun4)
		extractPotKeyFun4 = extractPotKeyFun4.split('){')[0] + '){return ' + extractPotKeyFun4bis + '}'

		let extractPotKeyFun5 = matchFirst(extractPotKeyFun4E2.replace(/\$/g, "\\$") + POT_exTractFun5E2, body)
		extractPotKeyFun5 = extractPotKeyFun5.replace(matchFirst('if.*?;return', extractPotKeyFun5), 'return')
		let extractPotKeyFun5bis = matchFirst(matchGroup1('function\\(\\){return (.*?)\\(', extractPotKeyFun5).replace(/\$/g, "\\$") + '=function\\(.*?};', body)
		let extractPotKeyFun5bis2 = matchGroup1('\\n(' + matchGroup1('return.*?=(.*?)\\(', extractPotKeyFun5bis).replace(/\$/g, "\\$") + '=function\\(.*?};)', body)
		let extractPotKeyFun5bis22 = matchFirst(matchGroup1(':(.*?)\\(', extractPotKeyFun5bis2) + POT_exTractFun11, body)
		let extractPotKeyFun6 = matchFirst(matchGroup1('new (.*?)\\(', extractPotKeyFun5).replace(/\./g, '\\.').replace(/\$/g, "\\$") + POT_exTractFun5E5, body)
		let extractPotKeyFun6bis1_1 = matchGroup1('(.*?)=', extractPotKeyFun6) + matchGroup1('\\w\\.\\w(\\.prototype\\.dispose=function\\(\\){.*?};)', body)
		extractPotKeyFun6bis1_1 = extractPotKeyFun6bis1_1.replace(matchGroup1('\\(.*?(,.*?\\))\\)', extractPotKeyFun6bis1_1), '')
		let extractPotKeyFun6bis1_2
		let extractPotKeyFun6bis1 = matchFirst(matchGroup1('{(.*?)\\.call\\(', extractPotKeyFun6).replace(/\./g, '\\.').replace(/\$/g, "\\$") + POT_exTractFun11, body)
		let extractPotKeyFun6bis2 = matchFirst(matchGroup1('{(.*?)\\.call\\(', extractPotKeyFun6bis1).replace(/\./g, '\\.').replace(/\$/g, "\\$") + POT_exTractFun12, body)
		let efef = 'this' + matchFirst('\\.addOnDisposeCallback=function\\(.*?};', body)
		extractPotKeyFun6bis1 = extractPotKeyFun6bis1.replace(matchFirst('{', extractPotKeyFun6bis1), '{' + efef)
		extractPotKeyFun6bis2 = "const " + extractPotKeyFun6bis2.split('.')[0] + '={};' + extractPotKeyFun6bis2
		let extractPotKeyFun6bis3 = matchFirst(matchGroup1('=new (.*?);', extractPotKeyFun6bis1).replace(/\./g, '\\.').replace(/\$/g, "\\$") + POT_exTractFun12, body)
		let extractPotKeyFun6bis4 = matchFirst(matchGroup1('this\\[(.*?)\\]=', extractPotKeyFun6bis1).replace(/\./g, '\\.').replace(/\$/g, "\\$") + '=.*?;', body)

		let extractPotKeyFun7 = matchFirst(matchGroup1('return.*?\\((.*?)\\(', extractPotKeyFun5).replace(/\./g, '\\.').replace(/\$/g, "\\$") + COMPOSER_exTractFun2, body)
		let extractPotKeyFun8 = matchFirst(matchGroup1('return (.*?)\\(', extractPotKeyFun5).replace(/\./g, '\\.').replace(/\$/g, "\\$") + POT_exTractFun6, body)
		extractPotKeyFun6bis1_2 = matchFirst(matchGroup1('(.*?)=', extractPotKeyFun6bis1) + `\\.prototype\\.${matchGroup1('return.*?\\?.*?\\.(.*?)\\(', extractPotKeyFun8).replace(/\./g, '\\.').replace(/\$/g, "\\$")}=function\\(.*?};`, body).replace(matchGroup1('(.*?)=', extractPotKeyFun6bis1), matchGroup1('(.*?)=', extractPotKeyFun6))
		let extractPotKeyFun6bis1_3 = matchFirst(matchGroup1('(.*?)=', extractPotKeyFun6).replace(/\./g, '\\.').replace(/\$/g, "\\$") + `\\.prototype\\.${matchGroup1('return.*?\\:.*?\\.(.*?)\\(', extractPotKeyFun8).replace(/\./g, '\\.').replace(/\$/g, "\\$")}=function\\(.*?};`, body).replace(/this\.logger.*?;return/s, 'return')
		let extractPotKeyFun6bis1_4 = matchFirst(matchGroup1('{return (.*?\\..*?)\\(', extractPotKeyFun6bis1_2) + COMPOSER_exTractFun8E2, body)
		let extractPotKeyFun6bis1_5 = matchFirst(matchGroup1(';(.*?)\\(\\)', extractPotKeyFun6bis1_4) + '=function\\(\\).*?}};', body)
		extractPotKeyFun6bis1_5 = 'var ' + matchGroup1(';.*?=(.*?)\\[', extractPotKeyFun6bis1_4) + '={},' + matchGroup1('if\\(!(.*?)\\)', extractPotKeyFun6bis1_5) + '=null;' + extractPotKeyFun6bis1_5

		let extractPotKeyFun9 = matchFirst(matchGroup1('return (.*?)\\(', extractPotKeyFun8).replace(/\./g, '\\.').replace(/\$/g, "\\$") + POT_exTractFun5E5, body)
		extractPotKeyFun9 = extractPotKeyFun9.replace(new RegExp(`(;${matchGroup1('\\((.*?),', extractPotKeyFun9)}.*?);return`, 's'), ';return')
		let extractPotKeyFun10 = matchGroup1('var.*?=(.*?)\\(\\)', extractPotKeyFun9) + "=function(){return Date.now()};"
		let extractPotKeyFun11 = matchFirst(matchGroup1('finally{(.*?)\\(', extractPotKeyFun5).replace(/\./g, '\\.').replace(/\$/g, "\\$") + POT_exTractFun11, body)

		return extractPotKeyFun1 + '\n' + defaultEmpty + '\n' + extractPotKeyFun2 + '\n' + extractPotKeyFun3 + '\n' + extractPotKeyFun4 + '\n' + extractPotKeyFun5 + '\n' + extractPotKeyFun5bis + '\n' + extractPotKeyFun5bis2 + '\n' + extractPotKeyFun6 + '\n' + extractPotKeyFun6bis1_1 + '\n' + extractPotKeyFun6bis1_3 + '\n' + extractPotKeyFun6bis1 + '\n' + extractPotKeyFun6bis1_2 + '\n' + extractPotKeyFun6bis2 + '\n' + extractPotKeyFun5bis22 + '\n' + extractPotKeyFun6bis1_4 + '\n' + extractPotKeyFun6bis1_5 + '\n' + extractPotKeyFun6bis3 + '\n' + extractPotKeyFun6bis4 + '\n' + extractPotKeyFun7 + '\n' + extractPotKeyFun8 + '\n' + extractPotKeyFun9 + '\n' +
			extractPotKeyFun10 + '\n' + extractPotKeyFun11 + '\n' +
			`potGenerator(${extractPotKeyFun2E2.split('.')[0]},id);`
	} catch (e) {
		return null;
	}
})

const body = require("fs").readFileSync("./base.js", "utf-8");

const getSignatureTimestamp = (body) => {
	return matchGroup1(/signatureTimestamp:\s?(\d+)/, body);
}

console.log(getSignatureTimestamp(body));

fs.writeFileSync(path.join(__dirname, './build/decoder.js'), `//ExtractDecipher\n${getExtractFunctions([extractDecipherFunc, extractDecipherWithName], body)}
\n\n//NTransform\n${getExtractFunctions([extractNTransformFunc, extractNTransformWithName], body, code => code.replace(/if\(typeof \S+==="undefined"\)return \S+;/, ""),)}
\n\n//Composer\n${getExtractFunctions([extractMacComposeFun], body)}
\n\n//potKey\n${getExtractFunctions([extractPotKey], body)}
\n\n//SignatureTimestamp\nconst signatureTimestamp=()=>{return ${getSignatureTimestamp(body)}};signatureTimestamp()`);
