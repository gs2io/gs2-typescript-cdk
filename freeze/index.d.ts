import * as model from "./model";
import * as ref from "./ref";
import * as stampSheet from "./stampSheet";
import { StageRef } from "./ref";
declare function stage(stageName: string): StageRef;
declare const _default: {
    model: typeof model;
    ref: typeof ref;
    stampSheet: typeof stampSheet;
    stage: typeof stage;
};
export default _default;
