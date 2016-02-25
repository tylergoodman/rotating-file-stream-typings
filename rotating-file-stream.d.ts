import { EventEmitter } from 'events';

declare function rfs(filename: string | ((time: Date, index: number) => string), options?: rfs.RotatingFileStreamOptions): rfs.RotatingFileStream;

declare module rfs {
  interface RotatingFileStreamOptions {
    compress?: string | boolean | ((source: string, dest: string) => string);
    interval?: string;
    path?: string;
    size?: string;
    highWaterMark?: number;
    mode?: number;
  }
  export interface RotatingFileStream extends EventEmitter {
    new(filename: string | ((time: Date, index: number) => string), options?: RotatingFileStreamOptions): RotatingFileStream;
  }
}

export = rfs;
