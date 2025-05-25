import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import StageRef from "../ref/StageRef";
import { StageOptions } from "./options/StageOptions";
export default class Stage extends CdkResource {
    private readonly stack;
    private readonly ownerId;
    private readonly name;
    private readonly sortNumber;
    private readonly sourceStageName;
    constructor(stack: Stack, ownerId: string, name: string, sortNumber: number, options?: StageOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): StageRef;
    getAttrStageId(): GetAttr;
}
