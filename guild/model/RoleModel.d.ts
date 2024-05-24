import { RoleModelOptions } from "./options/RoleModelOptions";
export default class RoleModel {
    private readonly name;
    private readonly policyDocument;
    private readonly metadata;
    constructor(name: string, policyDocument: string, options?: RoleModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
