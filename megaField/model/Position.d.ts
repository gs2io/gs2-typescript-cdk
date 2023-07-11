import { PositionOptions } from "./options/PositionOptions";
export default class Position {
    private readonly x;
    private readonly y;
    private readonly z;
    constructor(x: number, y: number, z: number, options?: PositionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
