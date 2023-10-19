import RateModelRef from "./RateModelRef";
import CreateProgressByUserId from "../stampSheet/CreateProgressByUserId";
import Material from "../model/Material";
import DeleteProgressByUserId from "../stampSheet/DeleteProgressByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    rateModel(rateName: string): RateModelRef;
    createProgress(rateName: string, targetItemSetId: string, materials?: Material[] | null, force?: boolean | null, userId?: string | null): CreateProgressByUserId;
    deleteProgress(userId?: string | null): DeleteProgressByUserId;
    grn(): string;
}
