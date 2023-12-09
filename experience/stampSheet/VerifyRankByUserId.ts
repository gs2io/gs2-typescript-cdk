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
import { StatusVerifyType } from "./enum/StatusVerifyType";

export default class VerifyRankByUserId extends ConsumeAction {
    private readonly namespaceName: string;
    private readonly userId: string;
    private readonly experienceName: string;
    private readonly verifyType: StatusVerifyType;
    private readonly propertyId: string;
    private readonly rankValue: number|null = null;


    public constructor(
        namespaceName: string,
        experienceName: string,
        verifyType: StatusVerifyType,
        propertyId: string,
        rankValue: number|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.experienceName = experienceName;
        this.verifyType = verifyType;
        this.propertyId = propertyId;
        this.rankValue = rankValue ?? null;
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
        if (this.experienceName != null) {
            properties["experienceName"] = this.experienceName;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.propertyId != null) {
            properties["propertyId"] = this.propertyId;
        }
        if (this.rankValue != null) {
            properties["rankValue"] = this.rankValue;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Experience:VerifyRankByUserId";
    }
}
