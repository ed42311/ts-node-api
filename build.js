const { build } = require("esbuild");

build({
  platform: "node",
  entryPoints: ["./src/index.ts"],
  outfile: "./dist/index.js",
  minify: true,
  bundle: true,
  external: ["pg-native"],
}).catch(() => process.exit(1));
