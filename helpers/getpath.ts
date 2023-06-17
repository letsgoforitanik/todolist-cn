import path from "path";

export function getPath(...pathArgs: string[]) {
    const rootPath = process.cwd();
    return path.join(rootPath, ...pathArgs);
}
