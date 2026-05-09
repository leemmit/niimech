const fs = require("fs");
const path = require("path");

const projectsDir = path.join(process.cwd(), "public/projects");
const outputFile = path.join(process.cwd(), "src/lib/generated-galleries.ts");

const allowedExtensions = [".png", ".jpg", ".jpeg", ".webp"];

function getDirectories(source) {
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

function getImages(dirPath, publicPath) {
  return fs
    .readdirSync(dirPath)
    .filter((file) =>
      allowedExtensions.includes(path.extname(file).toLowerCase()),
    )
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `${publicPath}/${file}`);
}

const galleries = {};

const folders = getDirectories(projectsDir);

folders.forEach((folder) => {
  const fullPath = path.join(projectsDir, folder);

  galleries[folder] = getImages(fullPath, `/projects/${folder}`);
});

const fileContent = `export const galleries = ${JSON.stringify(
  galleries,
  null,
  2,
)} as const;
`;

fs.writeFileSync(outputFile, fileContent);

console.log("✅ galleries generated");
