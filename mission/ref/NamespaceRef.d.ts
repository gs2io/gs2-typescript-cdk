import MissionGroupModelRef from "./MissionGroupModelRef";
import CounterModelRef from "./CounterModelRef";
import RevertReceiveByUserId from "../stampSheet/RevertReceiveByUserId";
import IncreaseCounterByUserId from "../stampSheet/IncreaseCounterByUserId";
import SetCounterByUserId from "../stampSheet/SetCounterByUserId";
import ScopedValue from "../model/ScopedValue";
import ReceiveByUserId from "../stampSheet/ReceiveByUserId";
import BatchReceiveByUserId from "../stampSheet/BatchReceiveByUserId";
import DecreaseCounterByUserId from "../stampSheet/DecreaseCounterByUserId";
import VerifyCompleteByUserId from "../stampSheet/VerifyCompleteByUserId";
import { CompleteVerifyType } from "../stampSheet/enum/CompleteVerifyType";
import VerifyCounterValueByUserId from "../stampSheet/VerifyCounterValueByUserId";
import { CounterVerifyType } from "../stampSheet/enum/CounterVerifyType";
import { CounterScopeType } from "../stampSheet/enum/CounterScopeType";
import { CounterResetType } from "../stampSheet/enum/CounterResetType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    missionGroupModel(missionGroupName: string): MissionGroupModelRef;
    counterModel(counterName: string): CounterModelRef;
    revertReceive(missionGroupName: string, missionTaskName: string, userId?: string): RevertReceiveByUserId;
    increaseCounter(counterName: string, value: number, userId?: string): IncreaseCounterByUserId;
    setCounter(counterName: string, values?: ScopedValue[] | null, userId?: string): SetCounterByUserId;
    receive(missionGroupName: string, missionTaskName: string, userId?: string): ReceiveByUserId;
    batchReceive(missionGroupName: string, missionTaskNames: string[], userId?: string): BatchReceiveByUserId;
    decreaseCounter(counterName: string, value: number, userId?: string): DecreaseCounterByUserId;
    verifyComplete(missionGroupName: string, verifyType: CompleteVerifyType, missionTaskName: string, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyCompleteByUserId;
    verifyCounterValue(counterName: string, verifyType: CounterVerifyType, scopeType?: CounterScopeType | null, resetType?: CounterResetType | null, conditionName?: string | null, value?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyCounterValueByUserId;
    grn(): string;
}
