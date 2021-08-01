import { Request, Response, NextFunction } from "express";
import fs from "fs";
import os from "os";
import path from "path";

export const basicLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  console.log(`Method: ${req.method}, URL: ${req.url}, Time: ${Date.now()}`);
  next();
};

export function isFile(path: string) {
  return fs.existsSync(path) && fs.statSync(path).isFile();
}

export function lookupFile(
  filename = "package.json",
  dir = process.cwd()
): string | undefined {
  const file = path.join(dir, filename);
  if (isFile(file)) {
    return file;
  } else {
    const parent = path.dirname(dir);
    if (parent !== dir) {
      return lookupFile(filename, parent);
    }
  }
}

export const currentPackage = lookupFile("package.json");

export function lookupExternal(pkgPath = currentPackage, includeDev = true) {
  if (pkgPath) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
    return Object.keys({
      ...pkg.dependencies,
      ...pkg.peerDependencies,
      ...(includeDev && pkg.devDependencies),
    });
  }
  return [];
}

export function tmpdir() {
  return os.tmpdir();
}
