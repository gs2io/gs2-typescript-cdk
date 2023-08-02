import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import TransactionSetting from "../../core/model/TransactionSetting";
import NamespaceRef from "../ref/NamespaceRef";
import MissionGroupModel from "./MissionGroupModel";
import CounterModel from "./CounterModel";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly transactionSetting;
    private readonly description;
    private readonly missionCompleteScript;
    private readonly counterIncrementScript;
    private readonly receiveRewardsScript;
    private readonly completeNotification;
    private readonly logSetting;
    constructor(stack: Stack, name: string, transactionSetting: TransactionSetting, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(groups: MissionGroupModel[], counters: CounterModel[]): Namespace;
}
