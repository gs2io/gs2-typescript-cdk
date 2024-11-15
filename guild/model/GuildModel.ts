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
import RoleModel from "./RoleModel";
import { GuildModelOptions } from "./options/GuildModelOptions";

export default class GuildModel {
    private readonly name: string;
    private readonly defaultMaximumMemberCount: number;
    private readonly maximumMemberCount: number;
    private readonly inactivityPeriodDays: number;
    private readonly roles: RoleModel[];
    private readonly guildMasterRole: string;
    private readonly guildMemberDefaultRole: string;
    private readonly rejoinCoolTimeMinutes: number;
    private readonly metadata: string|null = null;
    private readonly maxConcurrentJoinGuilds: number|null = null;
    private readonly maxConcurrentGuildMasterCount: number|null = null;

    public constructor(
        name: string,
        defaultMaximumMemberCount: number,
        maximumMemberCount: number,
        inactivityPeriodDays: number,
        roles: RoleModel[],
        guildMasterRole: string,
        guildMemberDefaultRole: string,
        rejoinCoolTimeMinutes: number,
        options: GuildModelOptions|null = null,
    ) {
        this.name = name;
        this.defaultMaximumMemberCount = defaultMaximumMemberCount;
        this.maximumMemberCount = maximumMemberCount;
        this.inactivityPeriodDays = inactivityPeriodDays;
        this.roles = roles;
        this.guildMasterRole = guildMasterRole;
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        this.rejoinCoolTimeMinutes = rejoinCoolTimeMinutes;
        this.metadata = options?.metadata ?? null;
        this.maxConcurrentJoinGuilds = options?.maxConcurrentJoinGuilds ?? null;
        this.maxConcurrentGuildMasterCount = options?.maxConcurrentGuildMasterCount ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.defaultMaximumMemberCount != null) {
            properties["defaultMaximumMemberCount"] = this.defaultMaximumMemberCount;
        }
        if (this.maximumMemberCount != null) {
            properties["maximumMemberCount"] = this.maximumMemberCount;
        }
        if (this.inactivityPeriodDays != null) {
            properties["inactivityPeriodDays"] = this.inactivityPeriodDays;
        }
        if (this.roles != null) {
            properties["roles"] = this.roles.map(v => v.properties(
                ));
        }
        if (this.guildMasterRole != null) {
            properties["guildMasterRole"] = this.guildMasterRole;
        }
        if (this.guildMemberDefaultRole != null) {
            properties["guildMemberDefaultRole"] = this.guildMemberDefaultRole;
        }
        if (this.rejoinCoolTimeMinutes != null) {
            properties["rejoinCoolTimeMinutes"] = this.rejoinCoolTimeMinutes;
        }
        if (this.maxConcurrentJoinGuilds != null) {
            properties["maxConcurrentJoinGuilds"] = this.maxConcurrentJoinGuilds;
        }
        if (this.maxConcurrentGuildMasterCount != null) {
            properties["maxConcurrentGuildMasterCount"] = this.maxConcurrentGuildMasterCount;
        }

        return properties;
    }
}
