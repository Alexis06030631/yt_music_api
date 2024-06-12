const version = require('./.vitepress/version.json')

const c_version = require('../package.json')
const {writeFileSync} = require("node:fs");

version.latestVersion = c_version.version
// Search for the version in version.json
if (version.versions.find(v => v.version === c_version.version)) {
	const v = version.versions.find(v => v.version === c_version.version)
	v.lastUpdated = new Date().toISOString()
} else {
	version.versions.push({
		version: c_version.version,
		lastUpdated: new Date().toISOString(),
		url: c_version.version.replace(/\./g, '_')
	})
}

// Write the new version.json
writeFileSync('./docs/.vitepress/version.json', JSON.stringify(version, null, 2))

