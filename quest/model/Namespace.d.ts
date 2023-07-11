import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import TransactionSetting from "../../core/model/TransactionSetting";
import NamespaceRef from "../ref/NamespaceRef";
import QuestGroupModel from "./QuestGroupModel";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly transactionSetting;
    private readonly description;
    private readonly startQuestScript;
    private readonly completeQuestScript;
    private readonly failedQuestScript;
    private readonly logSetting;
    constructor(stack: Stack, name: string, transactionSetting: TransactionSetting, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(questGroupModels: QuestGroupModel[]): Namespace;
}
