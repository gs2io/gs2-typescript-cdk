import MissionGroupModelRef from "./MissionGroupModelRef";
import CounterModelRef from "./CounterModelRef";
import RevertReceiveByUserId from "../stampSheet/RevertReceiveByUserId";
import IncreaseCounterByUserId from "../stampSheet/IncreaseCounterByUserId";
import ReceiveByUserId from "../stampSheet/ReceiveByUserId";
import DecreaseCounterByUserId from "../stampSheet/DecreaseCounterByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    missionGroupModel(missionGroupName: string): MissionGroupModelRef;
    counterModel(counterName: string): CounterModelRef;
    revertReceive(missionGroupName: string, missionTaskName: string, userId?: string): RevertReceiveByUserId;
    increaseCounter(counterName: string, value: number, userId?: string): IncreaseCounterByUserId;
    receive(missionGroupName: string, missionTaskName: string, userId?: string): ReceiveByUserId;
    decreaseCounter(counterName: string, value: number, userId?: string): DecreaseCounterByUserId;
    grn(): string;
}
