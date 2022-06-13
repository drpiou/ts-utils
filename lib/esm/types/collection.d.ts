export declare type BooleanClosure<I = unknown> = (item: I, index: number) => boolean;
export declare type ChunkClosure<I = unknown, C = I[]> = (item: I, index: number, chunk: C) => boolean;
export declare type MapClosure<I = unknown, R = unknown> = (item: I, index: number) => R;
export declare type ReduceClosure<I = unknown, R = unknown> = (accumulator: R, item: I, index: number) => R;
