"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const model_1 = require("../../core/model");
const func_1 = require("../../core/func");
const NamespaceRef_1 = tslib_1.__importDefault(require("../ref/NamespaceRef"));
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
class Namespace extends model_1.CdkResource {
    constructor(stack, name, options = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        super("Matchmaking_Namespace_" + name);
        this.description = null;
        /** @deprecated */
        this.transactionSetting = null;
        this.transactionSettingV2 = null;
        this.enableRating = null;
        this.enableDisconnectDetection = null;
        this.disconnectDetectionTimeoutSeconds = null;
        this.createGatheringTriggerType = null;
        this.createGatheringTriggerRealtimeNamespaceId = null;
        this.createGatheringTriggerScriptId = null;
        this.completeMatchmakingTriggerType = null;
        this.completeMatchmakingTriggerRealtimeNamespaceId = null;
        this.completeMatchmakingTriggerScriptId = null;
        this.enableCollaborateSeasonRating = null;
        this.collaborateSeasonRatingNamespaceId = null;
        this.collaborateSeasonRatingTtl = null;
        this.changeRatingScript = null;
        this.joinNotification = null;
        this.leaveNotification = null;
        this.completeNotification = null;
        this.changeRatingNotification = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.transactionSetting = (_b = options === null || options === void 0 ? void 0 : options.transactionSetting) !== null && _b !== void 0 ? _b : null;
        this.transactionSettingV2 = (_c = options === null || options === void 0 ? void 0 : options.transactionSettingV2) !== null && _c !== void 0 ? _c : null;
        this.enableRating = (_d = options === null || options === void 0 ? void 0 : options.enableRating) !== null && _d !== void 0 ? _d : null;
        this.enableDisconnectDetection = (_e = options === null || options === void 0 ? void 0 : options.enableDisconnectDetection) !== null && _e !== void 0 ? _e : null;
        this.disconnectDetectionTimeoutSeconds = (_f = options === null || options === void 0 ? void 0 : options.disconnectDetectionTimeoutSeconds) !== null && _f !== void 0 ? _f : null;
        this.createGatheringTriggerType = (_g = options === null || options === void 0 ? void 0 : options.createGatheringTriggerType) !== null && _g !== void 0 ? _g : null;
        this.createGatheringTriggerRealtimeNamespaceId = (_h = options === null || options === void 0 ? void 0 : options.createGatheringTriggerRealtimeNamespaceId) !== null && _h !== void 0 ? _h : null;
        this.createGatheringTriggerScriptId = (_j = options === null || options === void 0 ? void 0 : options.createGatheringTriggerScriptId) !== null && _j !== void 0 ? _j : null;
        this.completeMatchmakingTriggerType = (_k = options === null || options === void 0 ? void 0 : options.completeMatchmakingTriggerType) !== null && _k !== void 0 ? _k : null;
        this.completeMatchmakingTriggerRealtimeNamespaceId = (_l = options === null || options === void 0 ? void 0 : options.completeMatchmakingTriggerRealtimeNamespaceId) !== null && _l !== void 0 ? _l : null;
        this.completeMatchmakingTriggerScriptId = (_m = options === null || options === void 0 ? void 0 : options.completeMatchmakingTriggerScriptId) !== null && _m !== void 0 ? _m : null;
        this.enableCollaborateSeasonRating = (_o = options === null || options === void 0 ? void 0 : options.enableCollaborateSeasonRating) !== null && _o !== void 0 ? _o : null;
        this.collaborateSeasonRatingNamespaceId = (_p = options === null || options === void 0 ? void 0 : options.collaborateSeasonRatingNamespaceId) !== null && _p !== void 0 ? _p : null;
        this.collaborateSeasonRatingTtl = (_q = options === null || options === void 0 ? void 0 : options.collaborateSeasonRatingTtl) !== null && _q !== void 0 ? _q : null;
        this.changeRatingScript = (_r = options === null || options === void 0 ? void 0 : options.changeRatingScript) !== null && _r !== void 0 ? _r : null;
        this.joinNotification = (_s = options === null || options === void 0 ? void 0 : options.joinNotification) !== null && _s !== void 0 ? _s : null;
        this.leaveNotification = (_t = options === null || options === void 0 ? void 0 : options.leaveNotification) !== null && _t !== void 0 ? _t : null;
        this.completeNotification = (_u = options === null || options === void 0 ? void 0 : options.completeNotification) !== null && _u !== void 0 ? _u : null;
        this.changeRatingNotification = (_v = options === null || options === void 0 ? void 0 : options.changeRatingNotification) !== null && _v !== void 0 ? _v : null;
        this.logSetting = (_w = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _w !== void 0 ? _w : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Matchmaking::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.transactionSetting != null) {
            properties["TransactionSetting"] = (_a = this.transactionSetting) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.transactionSettingV2 != null) {
            properties["TransactionSettingV2"] = (_b = this.transactionSettingV2) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.enableRating != null) {
            properties["EnableRating"] = this.enableRating;
        }
        if (this.enableDisconnectDetection != null) {
            properties["EnableDisconnectDetection"] = this.enableDisconnectDetection;
        }
        if (this.disconnectDetectionTimeoutSeconds != null) {
            properties["DisconnectDetectionTimeoutSeconds"] = this.disconnectDetectionTimeoutSeconds;
        }
        if (this.createGatheringTriggerType != null) {
            properties["CreateGatheringTriggerType"] = this.createGatheringTriggerType;
        }
        if (this.createGatheringTriggerRealtimeNamespaceId != null) {
            properties["CreateGatheringTriggerRealtimeNamespaceId"] = this.createGatheringTriggerRealtimeNamespaceId;
        }
        if (this.createGatheringTriggerScriptId != null) {
            properties["CreateGatheringTriggerScriptId"] = this.createGatheringTriggerScriptId;
        }
        if (this.completeMatchmakingTriggerType != null) {
            properties["CompleteMatchmakingTriggerType"] = this.completeMatchmakingTriggerType;
        }
        if (this.completeMatchmakingTriggerRealtimeNamespaceId != null) {
            properties["CompleteMatchmakingTriggerRealtimeNamespaceId"] = this.completeMatchmakingTriggerRealtimeNamespaceId;
        }
        if (this.completeMatchmakingTriggerScriptId != null) {
            properties["CompleteMatchmakingTriggerScriptId"] = this.completeMatchmakingTriggerScriptId;
        }
        if (this.enableCollaborateSeasonRating != null) {
            properties["EnableCollaborateSeasonRating"] = this.enableCollaborateSeasonRating;
        }
        if (this.collaborateSeasonRatingNamespaceId != null) {
            properties["CollaborateSeasonRatingNamespaceId"] = this.collaborateSeasonRatingNamespaceId;
        }
        if (this.collaborateSeasonRatingTtl != null) {
            properties["CollaborateSeasonRatingTtl"] = this.collaborateSeasonRatingTtl;
        }
        if (this.changeRatingScript != null) {
            properties["ChangeRatingScript"] = (_c = this.changeRatingScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.joinNotification != null) {
            properties["JoinNotification"] = (_d = this.joinNotification) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.leaveNotification != null) {
            properties["LeaveNotification"] = (_e = this.leaveNotification) === null || _e === void 0 ? void 0 : _e.properties();
        }
        if (this.completeNotification != null) {
            properties["CompleteNotification"] = (_f = this.completeNotification) === null || _f === void 0 ? void 0 : _f.properties();
        }
        if (this.changeRatingNotification != null) {
            properties["ChangeRatingNotification"] = (_g = this.changeRatingNotification) === null || _g === void 0 ? void 0 : _g.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_h = this.logSetting) === null || _h === void 0 ? void 0 : _h.properties();
        }
        return properties;
    }
    ref() {
        return new NamespaceRef_1.default(this.name);
    }
    getAttrNamespaceId() {
        return new func_1.GetAttr(this, "Item.NamespaceId", null);
    }
    masterData(ratingModels, seasonModels) {
        new CurrentMasterData_1.default(this.stack, this.name, ratingModels, seasonModels).addDependsOn(this);
        return this;
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map