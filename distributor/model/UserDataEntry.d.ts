import { UserDataEntryOptions } from "./options/UserDataEntryOptions";
export default class UserDataEntry {
    private readonly service;
    private readonly namespaceName;
    private readonly kind;
    private readonly payload;
    constructor(service: string, namespaceName: string, kind: string, payload: string, options?: UserDataEntryOptions | null);
    properties(): {
        [name: string]: any;
    };
}
