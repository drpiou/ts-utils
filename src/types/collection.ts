export type BooleanClosure<I = unknown> = (item: I, index: number) => boolean;

export type ChunkClosure<I = unknown, C = I[]> = (item: I, index: number, chunk: C) => boolean;

export type MapClosure<I = unknown, R = unknown> = (item: I, index: number) => R;

export type ReduceClosure<I = unknown, R = unknown> = (accumulator: R, item: I, index: number) => R;
