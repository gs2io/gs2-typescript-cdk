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
import RoleModelRef from "./RoleModelRef";
import IncreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/IncreaseMaximumCurrentMaximumMemberCountByGuildName";
import SetMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/SetMaximumCurrentMaximumMemberCountByGuildName";
import DecreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/DecreaseMaximumCurrentMaximumMemberCountByGuildName";

export default class GuildModelRef {
    private readonly namespaceName: string;
    private readonly guildModelName: string;

    public constructor(
        namespaceName: string,
        guildModelName: string,
    ) {
        this.namespaceName = namespaceName;
        this.guildModelName = guildModelName;
    }

    public roleModel(
    ): RoleModelRef {
        return new RoleModelRef(
            this.namespaceName,
            this.guildModelName,
        );
    }

    public increaseMaximumCurrentMaximumMemberCountByGuildName(
        guildName: string,
        value: number|null = null,
    ): IncreaseMaximumCurrentMaximumMemberCountByGuildName {
        return new IncreaseMaximumCurrentMaximumMemberCountByGuildName(
            this.namespaceName,
            this.guildModelName,
            guildName,
            value,
        );
    }

    public setMaximumCurrentMaximumMemberCountByGuildName(
        guildName: string,
        value: number|null = null,
    ): SetMaximumCurrentMaximumMemberCountByGuildName {
        return new SetMaximumCurrentMaximumMemberCountByGuildName(
            this.namespaceName,
            guildName,
            this.guildModelName,
            value,
        );
    }

    public decreaseMaximumCurrentMaximumMemberCountByGuildName(
        guildName: string,
        value: number|null = null,
    ): DecreaseMaximumCurrentMaximumMemberCountByGuildName {
        return new DecreaseMaximumCurrentMaximumMemberCountByGuildName(
            this.namespaceName,
            this.guildModelName,
            guildName,
            value,
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
                "model",
                this.guildModelName,
            ],
        ).str(
        );
    }
}
