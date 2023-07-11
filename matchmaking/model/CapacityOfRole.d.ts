import { CapacityOfRoleOptions } from "./options/CapacityOfRoleOptions";
export default class CapacityOfRole {
    private readonly roleName;
    private readonly capacity;
    private readonly roleAliases;
    private readonly participants;
    constructor(roleName: string, capacity: number, options?: CapacityOfRoleOptions | null);
    properties(): {
        [name: string]: any;
    };
}
