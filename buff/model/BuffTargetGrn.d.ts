import { BuffTargetGrnOptions } from "./options/BuffTargetGrnOptions";
export default class BuffTargetGrn {
    private readonly targetModelName;
    private readonly targetGrn;
    constructor(targetModelName: string, targetGrn: string, options?: BuffTargetGrnOptions | null);
    properties(): {
        [name: string]: any;
    };
}
