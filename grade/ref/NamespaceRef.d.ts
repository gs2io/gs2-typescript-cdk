import GradeModelRef from "./GradeModelRef";
import AddGradeByUserId from "../stampSheet/AddGradeByUserId";
import ApplyRankCapByUserId from "../stampSheet/ApplyRankCapByUserId";
import MultiplyAcquireActionsByUserId from "../stampSheet/MultiplyAcquireActionsByUserId";
import { AcquireAction } from "../../core/model";
import SubGradeByUserId from "../stampSheet/SubGradeByUserId";
import VerifyGradeByUserId from "../stampSheet/VerifyGradeByUserId";
import { StatusVerifyType } from "../stampSheet/enum/StatusVerifyType";
import VerifyGradeUpMaterialByUserId from "../stampSheet/VerifyGradeUpMaterialByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    gradeModel(gradeName: string): GradeModelRef;
    addGrade(gradeName: string, propertyId: string, gradeValue?: number | null, userId?: string): AddGradeByUserId;
    applyRankCap(gradeName: string, propertyId: string, userId?: string): ApplyRankCapByUserId;
    multiplyAcquireActions(gradeName: string, propertyId: string, rateName: string, acquireActions?: AcquireAction[] | null, userId?: string): MultiplyAcquireActionsByUserId;
    subGrade(gradeName: string, propertyId: string, gradeValue?: number | null, userId?: string): SubGradeByUserId;
    verifyGrade(gradeName: string, verifyType: StatusVerifyType, propertyId: string, gradeValue?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyGradeByUserId;
    verifyGradeUpMaterial(gradeName: string, verifyType: StatusVerifyType, propertyId: string, materialPropertyId: string, userId?: string): VerifyGradeUpMaterialByUserId;
    grn(): string;
}
