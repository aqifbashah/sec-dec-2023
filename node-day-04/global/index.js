import { URL } from "url";

export const __filename = new URL("", import.meta.url).pathname;
export const __dirname = new URL("..", import.meta.url).pathname;
