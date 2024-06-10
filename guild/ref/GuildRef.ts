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
 *
 * deny overwrite
 */

import {GetAttr, Join} from "../../core/func";
import InboxRef from "./InboxRef";
import IncreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/IncreaseMaximumCurrentMaximumMemberCountByGuildName";
import SetMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/SetMaximumCurrentMaximumMemberCountByGuildName";
import DecreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/DecreaseMaximumCurrentMaximumMemberCountByGuildName";
import VerifyCurrentMaximumMemberCountByGuildName from "../stampSheet/VerifyCurrentMaximumMemberCountByGuildName";
import { GuildVerifyType } from "../stampSheet/enum/GuildVerifyType";
import VerifyIncludeMemberByUserId from "../stampSheet/VerifyIncludeMemberByUserId";

export default class GuildRef {
    private readonly namespaceName: string;
    private readonly guildModelName: string;
    private readonly guildName: string;

    public constructor(
        namespaceName: string,
        guildModelName: string,
        guildName: string,
    ) {
        this.namespaceName = namespaceName;
        this.guildModelName = guildModelName;
        this.guildName = guildName;
    }

    public increaseMaximumCurrentMaximumMemberCountByGuildName(
        value: number|null = null,
    ): IncreaseMaximumCurrentMaximumMemberCountByGuildName {
        return new IncreaseMaximumCurrentMaximumMemberCountByGuildName(
            this.namespaceName,
            this.guildModelName,
            this.guildName,
            value,
        );
    }

    public setMaximumCurrentMaximumMemberCountByGuildName(
        value: number|null = null,
    ): SetMaximumCurrentMaximumMemberCountByGuildName {
        return new SetMaximumCurrentMaximumMemberCountByGuildName(
            this.namespaceName,
            this.guildName,
            this.guildModelName,
            value,
        );
    }

    public decreaseMaximumCurrentMaximumMemberCountByGuildName(
        value: number|null = null,
    ): DecreaseMaximumCurrentMaximumMemberCountByGuildName {
        return new DecreaseMaximumCurrentMaximumMemberCountByGuildName(
            this.namespaceName,
            this.guildModelName,
            this.guildName,
            value,
        );
    }

    public verifyCurrentMaximumMemberCountByGuildName(
        verifyType: GuildVerifyType,
        value: number|null = null,
        multiplyValueSpecifyingQuantity: boolean|null = null,
    ): VerifyCurrentMaximumMemberCountByGuildName {
        return new VerifyCurrentMaximumMemberCountByGuildName(
            this.namespaceName,
            this.guildModelName,
            this.guildName,
            verifyType,
            value,
            multiplyValueSpecifyingQuantity,
        );
    }

    public verifyIncludeMember(
        verifyType: GuildVerifyType,
        guildName: string,
        userId: string = "#{userId}",
    ): VerifyIncludeMemberByUserId {
        return new VerifyIncludeMemberByUserId(
            this.namespaceName,
            this.guildModelName,
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
                "guild",
                this.guildModelName,
                this.guildName,
            ],
        ).str(
        );
    }
}
