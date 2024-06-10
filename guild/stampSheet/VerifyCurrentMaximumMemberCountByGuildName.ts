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
import { GuildVerifyType } from "./enum/GuildVerifyType";

export default class VerifyCurrentMaximumMemberCountByGuildName extends ConsumeAction {
    private readonly namespaceName: string;
    private readonly guildModelName: string;
    private readonly guildName: string;
    private readonly verifyType: GuildVerifyType;
    private readonly value: number|null = null;
    private readonly multiplyValueSpecifyingQuantity: boolean|null = null;


    public constructor(
        namespaceName: string,
        guildModelName: string,
        guildName: string,
        verifyType: GuildVerifyType,
        value: number|null = null,
        multiplyValueSpecifyingQuantity: boolean|null = null,
    ) {
        super();

        this.namespaceName = namespaceName;
        this.guildModelName = guildModelName;
        this.guildName = guildName;
        this.verifyType = verifyType;
        this.value = value ?? null;
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity ?? null;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.guildModelName != null) {
            properties["guildModelName"] = this.guildModelName;
        }
        if (this.guildName != null) {
            properties["guildName"] = this.guildName;
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

        return properties;
    }

    public action(): string {
        return "Gs2Guild:VerifyCurrentMaximumMemberCountByGuildName";
    }
}
