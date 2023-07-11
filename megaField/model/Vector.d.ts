import { VectorOptions } from "./options/VectorOptions";
export default class Vector {
    private readonly x;
    private readonly y;
    private readonly z;
    constructor(x: number, y: number, z: number, options?: VectorOptions | null);
    properties(): {
        [name: string]: any;
    };
}
