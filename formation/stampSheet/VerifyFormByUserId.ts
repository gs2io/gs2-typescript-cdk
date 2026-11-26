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
import { FormCountType } from "./enums/FormCountType";
import { FormVerifyType } from "./enums/FormVerifyType";

export default class VerifyFormByUserId extends VerifyAction {
    private readonly namespaceName: string;
    private readonly userId: string;
    private readonly moldModelName: string;
    private readonly index: number;
    private readonly propertyIdRegex: string;
    private readonly verifyType: FormVerifyType;
    private readonly count: number;
    private readonly slotName: string|null = null;
    private readonly countType: FormCountType|null = null;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        namespaceName: string,
        moldModelName: string,
        index: number,
        propertyIdRegex: string,
        verifyType: FormVerifyType,
        count: number,
        slotName: string|null = null,
        countType: FormCountType|null = null,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.moldModelName = moldModelName;
        this.index = index;
        this.propertyIdRegex = propertyIdRegex;
        this.verifyType = verifyType;
        this.count = count;
        this.slotName = slotName ?? null;
        this.countType = countType ?? null;
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
        if (this.moldModelName != null) {
            properties["moldModelName"] = this.moldModelName;
        }
        if (this.index != null) {
            properties["index"] = this.index;
        }
        if (this.slotName != null) {
            properties["slotName"] = this.slotName;
        }
        if (this.propertyIdRegex != null) {
            properties["propertyIdRegex"] = this.propertyIdRegex;
        }
        if (this.countType != null) {
            properties["countType"] = this.countType;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Formation:VerifyFormByUserId";
    }
}
