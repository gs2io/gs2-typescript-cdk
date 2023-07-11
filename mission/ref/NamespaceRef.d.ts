import MissionGroupModelRef from "./MissionGroupModelRef";
import CounterModelRef from "./CounterModelRef";
import IncreaseCounterByUserId from "../stampSheet/IncreaseCounterByUserId";
import ReceiveByUserId from "../stampSheet/ReceiveByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    missionGroupModel(missionGroupName: string): MissionGroupModelRef;
    counterModel(counterName: string): CounterModelRef;
    increaseCounter(counterName: string, value: number, userId?: string | null): IncreaseCounterByUserId;
    receive(missionGroupName: string, missionTaskName: string, userId?: string | null): ReceiveByUserId;
    grn(): string;
}
