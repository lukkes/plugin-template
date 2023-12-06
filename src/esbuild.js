import * as esbuild from 'esbuild';
import { promises as fs } from "fs";

const repositoryPath = process.argv[2];

async function processRepository(repositoryPath) {
  // Check and create the dist directory if it doesn't exist
  const distDir = `${repositoryPath}/../dist`;
  try {
    await fs.access(distDir);
  } catch {
    await fs.mkdir(distDir, { recursive: true });
  }

  // TODO: add multiple possible entry points
  esbuild.build({
    entryPoints: [`${repositoryPath}/plugin.js`],
    bundle: true,
    write: false, // Don't write to disk, return in outputFiles instead
    outdir: 'out',
  }).then((result) => {
    for (let out of result.outputFiles) {
      const result = out.text.replace(/^}\)\(\);$/gm, "  return plugin;\n})()");
      const outputFile = `${distDir}/out.plugin.js`;
      return fs.writeFile(outputFile, result);
    }
  }).then(() => {
    console.log('File has been written successfully');
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
}

if (!repositoryPath) {
  console.error('Please provide the path of the repository as a command-line argument.');
  process.exit(1);
}

processRepository(repositoryPath);