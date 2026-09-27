import { access, cp } from "node:fs/promises";
import path from "node:path";

const publicDirectory = path.resolve("public");
const outputDirectory = path.resolve("out");

await access(outputDirectory);
await cp(publicDirectory, outputDirectory, { recursive: true, force: true });
console.log("Verified static assets in out/");
