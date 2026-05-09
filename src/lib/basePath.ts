const isProd = process.env.NODE_ENV === "production";

export const basePath = isProd ? "/niimech" : "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
