import BalanceParameterModelRef from "./BalanceParameterModelRef";
import RarityParameterModelRef from "./RarityParameterModelRef";
import ReDrawBalanceParameterStatusByUserId from "../stampSheet/ReDrawBalanceParameterStatusByUserId";
import SetBalanceParameterStatusByUserId from "../stampSheet/SetBalanceParameterStatusByUserId";
import BalanceParameterValue from "../model/BalanceParameterValue";
import ReDrawRarityParameterStatusByUserId from "../stampSheet/ReDrawRarityParameterStatusByUserId";
import AddRarityParameterStatusByUserId from "../stampSheet/AddRarityParameterStatusByUserId";
import SetRarityParameterStatusByUserId from "../stampSheet/SetRarityParameterStatusByUserId";
import RarityParameterValue from "../model/RarityParameterValue";
import VerifyRarityParameterStatusByUserId from "../stampSheet/VerifyRarityParameterStatusByUserId";
import { RarityParameterStatusVerifyType } from "../stampSheet/enum/RarityParameterStatusVerifyType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    balanceParameterModel(parameterName: string): BalanceParameterModelRef;
    rarityParameterModel(parameterName: string): RarityParameterModelRef;
    reDrawBalanceParameterStatus(parameterName: string, propertyId: string, fixedParameterNames?: string[] | null, userId?: string): ReDrawBalanceParameterStatusByUserId;
    setBalanceParameterStatus(parameterName: string, propertyId: string, parameterValues: BalanceParameterValue[], userId?: string): SetBalanceParameterStatusByUserId;
    reDrawRarityParameterStatus(parameterName: string, propertyId: string, fixedParameterNames?: string[] | null, userId?: string): ReDrawRarityParameterStatusByUserId;
    addRarityParameterStatus(parameterName: string, propertyId: string, count?: number | null, userId?: string): AddRarityParameterStatusByUserId;
    setRarityParameterStatus(parameterName: string, propertyId: string, parameterValues?: RarityParameterValue[] | null, userId?: string): SetRarityParameterStatusByUserId;
    verifyRarityParameterStatus(parameterName: string, propertyId: string, verifyType: RarityParameterStatusVerifyType, parameterValueName?: string | null, parameterCount?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyRarityParameterStatusByUserId;
    grn(): string;
}
