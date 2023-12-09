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

import {AcquireAction, ConsumeAction} from "../../core/model";
import { RarityParameterStatusVerifyType } from "./enum/RarityParameterStatusVerifyType";

export default class VerifyRarityParameterStatusByUserId extends ConsumeAction {
    private readonly namespaceName: string;
    private readonly parameterName: string;
    private readonly userId: string;
    private readonly propertyId: string;
    private readonly verifyType: RarityParameterStatusVerifyType;
    private readonly parameterValueName: string|null = null;
    private readonly parameterCount: number|null = null;


    public constructor(
        namespaceName: string,
        parameterName: string,
        propertyId: string,
        verifyType: RarityParameterStatusVerifyType,
        parameterValueName: string|null = null,
        parameterCount: number|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.parameterName = parameterName;
        this.propertyId = propertyId;
        this.verifyType = verifyType;
        this.parameterValueName = parameterValueName ?? null;
        this.parameterCount = parameterCount ?? null;
        this.userId = userId;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.parameterName != null) {
            properties["parameterName"] = this.parameterName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.propertyId != null) {
            properties["propertyId"] = this.propertyId;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.parameterValueName != null) {
            properties["parameterValueName"] = this.parameterValueName;
        }
        if (this.parameterCount != null) {
            properties["parameterCount"] = this.parameterCount;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Enchant:VerifyRarityParameterStatusByUserId";
    }
}
