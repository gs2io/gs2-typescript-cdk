import BalanceParameterModelRef from "./BalanceParameterModelRef";
import RarityParameterModelRef from "./RarityParameterModelRef";
import ReDrawBalanceParameterStatusByUserId from "../stampSheet/ReDrawBalanceParameterStatusByUserId";
import ReDrawRarityParameterStatusByUserId from "../stampSheet/ReDrawRarityParameterStatusByUserId";
import AddRarityParameterStatusByUserId from "../stampSheet/AddRarityParameterStatusByUserId";
import VerifyRarityParameterStatusByUserId from "../stampSheet/VerifyRarityParameterStatusByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    balanceParameterModel(parameterName: string): BalanceParameterModelRef;
    rarityParameterModel(parameterName: string): RarityParameterModelRef;
    reDrawBalanceParameterStatus(parameterName: string, propertyId: string, fixedParameterNames?: string[] | null, userId?: string | null): ReDrawBalanceParameterStatusByUserId;
    reDrawRarityParameterStatus(parameterName: string, propertyId: string, fixedParameterNames?: string[] | null, userId?: string | null): ReDrawRarityParameterStatusByUserId;
    addRarityParameterStatus(parameterName: string, propertyId: string, count: number, userId?: string | null): AddRarityParameterStatusByUserId;
    verifyRarityParameterStatus(parameterName: string, propertyId: string, verifyType: string, parameterValueName: string, parameterCount: number, userId?: string | null): VerifyRarityParameterStatusByUserId;
    grn(): string;
}
