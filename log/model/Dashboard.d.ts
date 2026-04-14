import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import DashboardRef from "../ref/DashboardRef";
import { DashboardOptions } from "./options/DashboardOptions";
export default class Dashboard extends CdkResource {
    private readonly stack;
    private readonly namespaceName;
    private readonly displayName;
    private readonly description;
    constructor(stack: Stack, namespaceName: string, displayName: string, options?: DashboardOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(name: string): DashboardRef;
    getAttrDashboardId(): GetAttr;
}
