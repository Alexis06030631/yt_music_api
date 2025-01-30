// LavaPlayer regexps
export const VARIABLE_PART = "[a-zA-Z_\\$][a-zA-Z_0-9]*";
export const VARIABLE_PART_DEFINE = `\\"?${VARIABLE_PART}\\"?`;
export const BEFORE_ACCESS = '(?:\\[\\"|\\.)';
export const AFTER_ACCESS = '(?:\\"\\]|)';
export const VARIABLE_PART_ACCESS = BEFORE_ACCESS + VARIABLE_PART + AFTER_ACCESS;
export const REVERSE_PART = ":function\\(\\w\\)\\{(?:return )?\\w\\.reverse\\(\\)\\}";
export const SLICE_PART = ":function\\(\\w,\\w\\)\\{return \\w\\.slice\\(\\w\\)\\}";
export const SPLICE_PART = ":function\\(\\w,\\w\\)\\{\\w\\.splice\\(0,\\w\\)\\}";
export const SWAP_PART = ":function\\(\\w,\\w\\)\\{var \\w=\\w\\[0\\];\\w\\[0\\]=\\w\\[\\w%\\w\\.length\\];\\w\\[\\w(?:%\\w.length|)\\]=\\w(?:;return \\w)?\\}";

export const DECIPHER_REGEXP =
	`function(?: ${VARIABLE_PART})?\\(([a-zA-Z])\\)\\{` +
	'\\1=\\1\\.split\\(""\\);\\s*' +
	`((?:(?:\\1=)?${VARIABLE_PART}${VARIABLE_PART_ACCESS}\\(\\1,\\d+\\);)+)` +
	'return \\1\\.join\\(""\\)' +
	`\\}`;

export const HELPER_REGEXP = `var (${VARIABLE_PART})=\\{((?:(?:${VARIABLE_PART_DEFINE}${REVERSE_PART}|${
	VARIABLE_PART_DEFINE
}${SLICE_PART}|${VARIABLE_PART_DEFINE}${SPLICE_PART}|${VARIABLE_PART_DEFINE}${SWAP_PART}),?\\n?)+)\\};`;

export const COMPOSER_REGEXP = `=function\\(${VARIABLE_PART}\\){var ${VARIABLE_PART}=(${VARIABLE_PART}\\.${VARIABLE_PART}\\(${VARIABLE_PART},${VARIABLE_PART}\\)\\|\\|)${VARIABLE_PART}\\.signatureCipher.*?return ${VARIABLE_PART}};`
export const COMPOSER_exTractFun1Name = `(${VARIABLE_PART})\\(${VARIABLE_PART}\\);`
export const COMPOSER_exTractFun1 = `=function\\(${VARIABLE_PART}\\){.*?return.*?};`
export const COMPOSER_exTractFun2Name = `(${VARIABLE_PART})\\(${VARIABLE_PART},.*?\\)`
export const COMPOSER_exTractFun2 = `=function\\(${VARIABLE_PART},${VARIABLE_PART}\\){.*?return.*?};`
export const COMPOSER_exTractFun3 = `:(${VARIABLE_PART}?)===`
export const COMPOSER_exTractFun4 = `(${VARIABLE_PART}?)\\.hasOwnProperty`
export const COMPOSER_exTractFun5 = `try{var ${VARIABLE_PART}=(.*?)\\(`
export const COMPOSER_exTractFun6 = `match\\((${VARIABLE_PART})\\)`
export const COMPOSER_exTractFun7 = `:(${VARIABLE_PART})`
export const COMPOSER_exTractFun8 = `function\\(\\w,\\w,\\w\\){(\\w=\\w===void 0\\?"":\\w;\\w=\\w===void 0\\?"":\\w.*?return.*?)};`
export const COMPOSER_exTractFun8E = `(${VARIABLE_PART}[\\.${VARIABLE_PART}]?)\\(${VARIABLE_PART},.*?\\)`
export const COMPOSER_exTractFun8E2 = `=function\\(${VARIABLE_PART},${VARIABLE_PART}\\){.*?};\n`
export const COMPOSER_exTractFun8E3 = `=(${VARIABLE_PART})\\(${VARIABLE_PART}\\(${VARIABLE_PART}\\)\\)`
export const COMPOSER_exTractFun8E4 = (name) => `var ${name}={.*?}};`
export const COMPOSER_exTractFun9 = `\\.prototype\\.set=function\\(.*?\\){.*?};`

export const SCVR = "[a-zA-Z0-9$_]";
export const MCR = `${SCVR}+`;
export const AAR = "\\[(\\d+)]";
export const N_TRANSFORM_NAME_REGEXPS = [
	// NewPipeExtractor regexps
	`${SCVR}="nn"\\[\\+${MCR}\\.${MCR}],${MCR}\\(${MCR}\\),${MCR}=${MCR}\\.${MCR}\\[${MCR}]\\|\\|null\\).+\\|\\|(${MCR})\\(""\\)`,
	`${SCVR}="nn"\\[\\+${MCR}\\.${MCR}],${MCR}\\(${MCR}\\),${MCR}=${MCR}\\.${MCR}\\[${MCR}]\\|\\|null\\)&&\\(${MCR}=(${MCR})${AAR}`,
	`${SCVR}="nn"\\[\\+${MCR}\\.${MCR}],${MCR}=${MCR}\\.get\\(${MCR}\\)\\).+\\|\\|(${MCR})\\(""\\)`,
	`${SCVR}="nn"\\[\\+${MCR}\\.${MCR}],${MCR}=${MCR}\\.get\\(${MCR}\\)\\)&&\\(${MCR}=(${MCR})\\[(\\d+)]`,
	`\\(${SCVR}=String\\.fromCharCode\\(110\\),${SCVR}=${SCVR}\\.get\\(${SCVR}\\)\\)&&\\(${SCVR}=(${MCR})(?:${AAR})?\\(${SCVR}\\)`,
	`\\.get\\("n"\\)\\)&&\\(${SCVR}=(${MCR})(?:${AAR})?\\(${SCVR}\\)`,
];

export const DECIPHER_NAME_REGEXPS = [
	"\\bm=([a-zA-Z0-9$]{2,})\\(decodeURIComponent\\(h\\.s\\)\\)",
	"\\bc&&\\(c=([a-zA-Z0-9$]{2,})\\(decodeURIComponent\\(c\\)\\)",
	'(?:\\b|[^a-zA-Z0-9$])([a-zA-Z0-9$]{2,})\\s*=\\s*function\\(\\s*a\\s*\\)\\s*\\{\\s*a\\s*=\\s*a\\.split\\(\\s*""\\s*\\)',
	'([\\w$]+)\\s*=\\s*function\\((\\w+)\\)\\{\\s*\\2=\\s*\\2\\.split\\(""\\)\\s*;',
];

export const N_TRANSFORM_REGEXP =
	"function\\(\\s*(\\w+)\\s*\\)\\s*\\{" +
	"var\\s*(\\w+)=(?:\\1\\.split\\(.*?\\)|String\\.prototype\\.split\\.call\\(\\1,.*?\\))," +
	"\\s*(\\w+)=(\\[.*?]);\\s*\\3\\[\\d+]" +
	"(.*?try)(\\{.*?})catch\\(\\s*(\\w+)\\s*\\)\\s*\\{" +
	'\\s*return"[\\w-]+([A-z0-9-]+)"\\s*\\+\\s*\\1\\s*}' +
	'\\s*return\\s*(\\2\\.join\\(""\\)|Array\\.prototype\\.join\\.call\\(\\2,.*?\\))};';
