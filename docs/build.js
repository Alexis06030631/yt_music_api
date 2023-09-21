const { readdir, createReadStream, writeFile } = require("fs-extra");
const { createInterface } = require("readline");
const { join, parse } = require("path");
const { exec} = require("child_process");

// This script is not part of faast.js, but rather a tool to rewrite some parts
// of the generated docs from api-generator and api-documenter so they work with
// the website generated by docusaurus.

async function main() {
	await new Promise((resolve, reject) =>
		exec(
			"api-extractor run --local && api-documenter markdown -i dist -o docs/src",
			(err, stdout, stderr) => {
				console.log(stdout);
				console.error(stderr);
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			}
		)
	);

	const types = []
	const models = []
	const managers = []
	const dir = "./docs/src";
	const docFiles = await readdir(dir);
	for (const docFile of docFiles) {
		try {
			const { name: id, ext } = parse(docFile);
			if (ext !== ".md") {
				continue;
			}

			const docPath = join(dir, docFile);
			const input = createReadStream(docPath);
			const output = [];
			const lines = createInterface({
				input,
				crlfDelay: Infinity
			});

			lines.on("line", line => {
				line = line.replace(/^\[.+\]\(.+\)$/m, "");
				output.push(line);
			});

			await new Promise(resolve => lines.once("close", resolve));
			input.close();


			await writeFile(docPath, [].concat(output).join('\n'));
		} catch (err) {
			console.error(`Could not process ${docFile}: ${err}`);
		}
	}
}

main();