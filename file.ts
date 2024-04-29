const file = Bun.file(".env");
const content = await file.text();
console.info(content);

await Bun.write(".env.test", content)