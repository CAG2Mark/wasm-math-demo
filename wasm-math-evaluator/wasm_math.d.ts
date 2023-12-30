/* tslint:disable */
/* eslint-disable */
/**
*/
export function greet(): void;
/**
* @param {string} inp
*/
export function lex_eqn(inp: string): void;
/**
* @param {string} inp
*/
export function parse_eqn(inp: string): void;
/**
* @param {string} inp
* @returns {any}
*/
export function eval_expr(inp: string): any;
/**
* @param {string} inp
* @returns {any}
*/
export function to_tex(inp: string): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly lex_eqn: (a: number, b: number) => void;
  readonly parse_eqn: (a: number, b: number) => void;
  readonly eval_expr: (a: number, b: number) => number;
  readonly to_tex: (a: number, b: number) => number;
  readonly greet: () => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
