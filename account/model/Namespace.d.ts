import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NamespaceRef from "../ref/NamespaceRef";
import TakeOverTypeModel from "./TakeOverTypeModel";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly description;
    private readonly transactionSetting;
    private readonly changePasswordIfTakeOver;
    private readonly differentUserIdForLoginAndDataRetention;
    private readonly createAccountScript;
    private readonly authenticationScript;
    private readonly createTakeOverScript;
    private readonly doTakeOverScript;
    private readonly banScript;
    private readonly unBanScript;
    private readonly logSetting;
    constructor(stack: Stack, name: string, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(takeOverTypeModels: TakeOverTypeModel[]): Namespace;
}
