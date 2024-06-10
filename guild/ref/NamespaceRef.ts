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
import GuildModelRef from "./GuildModelRef";
import GuildRef from "./GuildRef";
import IncreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/IncreaseMaximumCurrentMaximumMemberCountByGuildName";
import SetMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/SetMaximumCurrentMaximumMemberCountByGuildName";
import DecreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/DecreaseMaximumCurrentMaximumMemberCountByGuildName";
import VerifyCurrentMaximumMemberCountByGuildName from "../stampSheet/VerifyCurrentMaximumMemberCountByGuildName";
import { GuildVerifyType } from "../stampSheet/enum/GuildVerifyType";
import VerifyIncludeMemberByUserId from "../stampSheet/VerifyIncludeMemberByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public guildModel(
        guildModelName: string,
    ): GuildModelRef {
        return new GuildModelRef(
            this.namespaceName,
            guildModelName,
        );
    }

    public increaseMaximumCurrentMaximumMemberCountByGuildName(
        guildModelName: string,
        guildName: string,
        value: number|null = null,
    ): IncreaseMaximumCurrentMaximumMemberCountByGuildName {
        return new IncreaseMaximumCurrentMaximumMemberCountByGuildName(
            this.namespaceName,
            guildModelName,
            guildName,
            value,
        );
    }

    public setMaximumCurrentMaximumMemberCountByGuildName(
        guildName: string,
        guildModelName: string,
        value: number|null = null,
    ): SetMaximumCurrentMaximumMemberCountByGuildName {
        return new SetMaximumCurrentMaximumMemberCountByGuildName(
            this.namespaceName,
            guildName,
            guildModelName,
            value,
        );
    }

    public decreaseMaximumCurrentMaximumMemberCountByGuildName(
        guildModelName: string,
        guildName: string,
        value: number|null = null,
    ): DecreaseMaximumCurrentMaximumMemberCountByGuildName {
        return new DecreaseMaximumCurrentMaximumMemberCountByGuildName(
            this.namespaceName,
            guildModelName,
            guildName,
            value,
        );
    }

    public verifyCurrentMaximumMemberCountByGuildName(
        guildModelName: string,
        guildName: string,
        verifyType: GuildVerifyType,
        value: number|null = null,
        multiplyValueSpecifyingQuantity: boolean|null = null,
    ): VerifyCurrentMaximumMemberCountByGuildName {
        return new VerifyCurrentMaximumMemberCountByGuildName(
            this.namespaceName,
            guildModelName,
            guildName,
            verifyType,
            value,
            multiplyValueSpecifyingQuantity,
        );
    }

    public verifyIncludeMember(
        guildModelName: string,
        verifyType: GuildVerifyType,
        guildName: string|null = null,
        userId: string = "#{userId}",
    ): VerifyIncludeMemberByUserId {
        return new VerifyIncludeMemberByUserId(
            this.namespaceName,
            guildModelName,
            verifyType,
            guildName,
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
                "guild",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
