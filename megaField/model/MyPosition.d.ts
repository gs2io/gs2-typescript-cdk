import Position from "./Position";
import Vector from "./Vector";
import { MyPositionOptions } from "./options/MyPositionOptions";
export default class MyPosition {
    private readonly position;
    private readonly vector;
    private readonly r;
    constructor(position: Position, vector: Vector, r: number, options?: MyPositionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
