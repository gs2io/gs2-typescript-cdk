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
import { StaminaVerifyType } from "./enums/StaminaVerifyType";

export default class VerifyStaminaRecoverIntervalMinutesByUserId extends VerifyAction {
    private readonly namespaceName: string;
    private readonly userId: string;
    private readonly staminaName: string;
    private readonly verifyType: StaminaVerifyType;
    private readonly value: number;
    private readonly multiplyValueSpecifyingQuantity: boolean|null = null;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        namespaceName: string,
        staminaName: string,
        verifyType: StaminaVerifyType,
        value: number,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.staminaName = staminaName;
        this.verifyType = verifyType;
        this.value = value;
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity ?? null;
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
        if (this.staminaName != null) {
            properties["staminaName"] = this.staminaName;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }
        if (this.multiplyValueSpecifyingQuantity != null) {
            properties["multiplyValueSpecifyingQuantity"] = this.multiplyValueSpecifyingQuantity;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Stamina:VerifyStaminaRecoverIntervalMinutesByUserId";
    }
}
