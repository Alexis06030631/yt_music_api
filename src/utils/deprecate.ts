export function deprecated(functionName, replacement): void {
    console.warn(`[DEPRECATION] The function ${functionName} is deprecated and will be removed in future versions. Please use ${replacement} instead.`)
}