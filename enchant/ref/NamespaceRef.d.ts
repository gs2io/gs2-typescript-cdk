import BalanceParameterModelRef from "./BalanceParameterModelRef";
import RarityParameterModelRef from "./RarityParameterModelRef";
import ReDrawBalanceParameterStatusByUserId from "../stampSheet/ReDrawBalanceParameterStatusByUserId";
import SetBalanceParameterStatusByUserId from "../stampSheet/SetBalanceParameterStatusByUserId";
import ReDrawRarityParameterStatusByUserId from "../stampSheet/ReDrawRarityParameterStatusByUserId";
import AddRarityParameterStatusByUserId from "../stampSheet/AddRarityParameterStatusByUserId";
import SetRarityParameterStatusByUserId from "../stampSheet/SetRarityParameterStatusByUserId";
import VerifyRarityParameterStatusByUserId from "../stampSheet/VerifyRarityParameterStatusByUserId";
import { BalanceParameterValue, RarityParameterValue } from "../model";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    balanceParameterModel(parameterName: string): BalanceParameterModelRef;
    rarityParameterModel(parameterName: string): RarityParameterModelRef;
    reDrawBalanceParameterStatus(parameterName: string, propertyId: string, fixedParameterNames?: string[] | null, userId?: string | null): ReDrawBalanceParameterStatusByUserId;
    setBalanceParameterStatus(parameterName: string, propertyId: string, parameterValues: BalanceParameterValue[], userId?: string | null): SetBalanceParameterStatusByUserId;
    reDrawRarityParameterStatus(parameterName: string, propertyId: string, fixedParameterNames?: string[] | null, userId?: string | null): ReDrawRarityParameterStatusByUserId;
    addRarityParameterStatus(parameterName: string, propertyId: string, count: number, userId?: string | null): AddRarityParameterStatusByUserId;
    setRarityParameterStatus(parameterName: string, propertyId: string, parameterValues?: RarityParameterValue[] | null, userId?: string | null): SetRarityParameterStatusByUserId;
    verifyRarityParameterStatus(parameterName: string, propertyId: string, verifyType: string, parameterValueName: string, parameterCount: number, userId?: string | null): VerifyRarityParameterStatusByUserId;
    grn(): string;
}
