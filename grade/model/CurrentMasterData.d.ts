import { CdkResource, Stack } from "../../core/model";
import GradeModel from "./GradeModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly gradeModels;
    constructor(stack: Stack, namespaceName: string, gradeModels: GradeModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
