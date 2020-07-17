import nodeFetch from 'node-fetch';
import { Options, transform } from './transform';
export interface ITestOptions {
    _fetch: typeof nodeFetch;
    _cache: any;
}
export declare const getAttacher: (testOptions?: ITestOptions | undefined) => (options: Options) => (tree: any) => Promise<{}>;
declare const plugin: (options: Options) => (tree: any) => Promise<{}>;
export { plugin, transform };
