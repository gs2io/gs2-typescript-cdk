/*
 * Copyright 2016- Game Server Services, Inc. or its affiliates. All Rights
 * Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import {GetAttr, Join} from "../../core/func";
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
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public gradeModel(
        gradeName: string,
    ): GradeModelRef {
        return new GradeModelRef(
            this.namespaceName,
            gradeName,
        );
    }

    public addGrade(
        gradeName: string,
        propertyId: string,
        gradeValue: number|null = null,
        userId: string = "#{userId}",
    ): AddGradeByUserId {
        return new AddGradeByUserId(
            this.namespaceName,
            gradeName,
            propertyId,
            gradeValue,
            userId,
        );
    }

    public applyRankCap(
        gradeName: string,
        propertyId: string,
        userId: string = "#{userId}",
    ): ApplyRankCapByUserId {
        return new ApplyRankCapByUserId(
            this.namespaceName,
            gradeName,
            propertyId,
            userId,
        );
    }

    public multiplyAcquireActions(
        gradeName: string,
        propertyId: string,
        rateName: string,
        acquireActions: AcquireAction[]|null = null,
        userId: string = "#{userId}",
    ): MultiplyAcquireActionsByUserId {
        return new MultiplyAcquireActionsByUserId(
            this.namespaceName,
            gradeName,
            propertyId,
            rateName,
            acquireActions,
            userId,
        );
    }

    public subGrade(
        gradeName: string,
        propertyId: string,
        gradeValue: number|null = null,
        userId: string = "#{userId}",
    ): SubGradeByUserId {
        return new SubGradeByUserId(
            this.namespaceName,
            gradeName,
            propertyId,
            gradeValue,
            userId,
        );
    }

    public verifyGrade(
        gradeName: string,
        verifyType: StatusVerifyType,
        propertyId: string,
        gradeValue: number|null = null,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifyGradeByUserId {
        return new VerifyGradeByUserId(
            this.namespaceName,
            gradeName,
            verifyType,
            propertyId,
            gradeValue,
            multiplyValueSpecifyingQuantity,
            userId,
        );
    }

    public verifyGradeUpMaterial(
        gradeName: string,
        verifyType: StatusVerifyType,
        propertyId: string,
        materialPropertyId: string,
        userId: string = "#{userId}",
    ): VerifyGradeUpMaterialByUserId {
        return new VerifyGradeUpMaterialByUserId(
            this.namespaceName,
            gradeName,
            verifyType,
            propertyId,
            materialPropertyId,
            userId,
        );
    }

    public grn(
    ): string {
        return new Join(
            ":",
            [
                "grn",
                "gs2",
                GetAttr.region(
                ).str(
                ),
                GetAttr.ownerId(
                ).str(
                ),
                "grade",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
