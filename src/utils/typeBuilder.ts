import {YTjsErrorError} from "../errors";
import ErrorCode from "../errors/errorCodes";

const aliases = {};

export function addUnitAliasFromArray(category:string, unit:string, arrayShorthand:any[]) {
    const lowerCase = unit.toLowerCase();
    // Push to aliases or ad aliases to existing array of aliases
    const array = [lowerCase, ...arrayShorthand]
    if(!aliases[category]) aliases[category] = {}
    if(aliases[category][unit] === undefined) {
        aliases[category][unit] = array
    }else if (aliases[category][unit]) {
        aliases[category][unit] = [...aliases[category][unit], ...array].filter((item, index, self) => self.indexOf(item) === index)
    }
}

export function normalizeObjectUnits(category:string, inputObject:string) {
    inputObject = inputObject.toLowerCase();
    if(!aliases[category]) throw new YTjsErrorError(ErrorCode.INVALID_TYPE_BUILDER, category);

    let normalizedProp = Object.keys(aliases[category]).find(key => aliases[category][key].includes(inputObject));
    if (normalizedProp) return normalizedProp;
    else return false
}

export function getAllObjects(category:string) {
    if(!aliases[category]) throw new YTjsErrorError(ErrorCode.INVALID_TYPE_BUILDER, category);
    return Object.keys(aliases[category]).map(key => aliases[category][key]).flat();
}