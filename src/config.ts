export const devMode: boolean = process.env.NODE_ENV === "development";

export const webpackDevMode: boolean = process.env.WEBPACK_DEV === "1";

export const port: number = Number(process.env.PORT ?? 80);

export const appRootPath: string = process.cwd();
