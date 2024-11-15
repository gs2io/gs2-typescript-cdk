"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GuildModel {
    constructor(name, defaultMaximumMemberCount, maximumMemberCount, inactivityPeriodDays, roles, guildMasterRole, guildMemberDefaultRole, rejoinCoolTimeMinutes, options = null) {
        var _a, _b, _c;
        this.metadata = null;
        this.maxConcurrentJoinGuilds = null;
        this.maxConcurrentGuildMasterCount = null;
        this.name = name;
        this.defaultMaximumMemberCount = defaultMaximumMemberCount;
        this.maximumMemberCount = maximumMemberCount;
        this.inactivityPeriodDays = inactivityPeriodDays;
        this.roles = roles;
        this.guildMasterRole = guildMasterRole;
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        this.rejoinCoolTimeMinutes = rejoinCoolTimeMinutes;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.maxConcurrentJoinGuilds = (_b = options === null || options === void 0 ? void 0 : options.maxConcurrentJoinGuilds) !== null && _b !== void 0 ? _b : null;
        this.maxConcurrentGuildMasterCount = (_c = options === null || options === void 0 ? void 0 : options.maxConcurrentGuildMasterCount) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
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
            properties["roles"] = this.roles.map(v => v.properties());
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
exports.default = GuildModel;
//# sourceMappingURL=GuildModel.js.map