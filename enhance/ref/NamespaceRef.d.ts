import UnleashRateModelRef from "./UnleashRateModelRef";
import RateModelRef from "./RateModelRef";
import CreateProgressByUserId from "../stampSheet/CreateProgressByUserId";
import Material from "../model/Material";
import DeleteProgressByUserId from "../stampSheet/DeleteProgressByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    unleashRateModel(rateName: string): UnleashRateModelRef;
    rateModel(rateName: string): RateModelRef;
    createProgress(rateName: string, targetItemSetId: string, materials?: Material[] | null, force?: boolean | null, userId?: string): CreateProgressByUserId;
    deleteProgress(userId?: string): DeleteProgressByUserId;
    grn(): string;
}
