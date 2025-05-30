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

import {AcquireAction, ConsumeAction, VerifyAction} from "../../core/model";
import { StatusVerifyType } from "./enums/StatusVerifyType";

export default class VerifyGradeUpMaterialByUserId extends VerifyAction {
    private readonly namespaceName: string;
    private readonly userId: string;
    private readonly gradeName: string;
    private readonly verifyType: StatusVerifyType;
    private readonly propertyId: string;
    private readonly materialPropertyId: string;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        namespaceName: string,
        gradeName: string,
        verifyType: StatusVerifyType,
        propertyId: string,
        materialPropertyId: string,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.gradeName = gradeName;
        this.verifyType = verifyType;
        this.propertyId = propertyId;
        this.materialPropertyId = materialPropertyId;
        this.timeOffsetToken = timeOffsetToken ?? null;
        this.userId = userId;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.gradeName != null) {
            properties["gradeName"] = this.gradeName;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.propertyId != null) {
            properties["propertyId"] = this.propertyId;
        }
        if (this.materialPropertyId != null) {
            properties["materialPropertyId"] = this.materialPropertyId;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Grade:VerifyGradeUpMaterialByUserId";
    }
}
