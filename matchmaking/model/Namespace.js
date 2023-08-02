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
    constructor(stack, name, createGatheringTriggerType, completeMatchmakingTriggerType, options = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        super("Matchmaking_Namespace_" + name);
        this.description = null;
        this.enableRating = null;
        this.createGatheringTriggerRealtimeNamespaceId = null;
        this.createGatheringTriggerScriptId = null;
        this.completeMatchmakingTriggerRealtimeNamespaceId = null;
        this.completeMatchmakingTriggerScriptId = null;
        this.changeRatingScript = null;
        this.joinNotification = null;
        this.leaveNotification = null;
        this.completeNotification = null;
        this.changeRatingNotification = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.createGatheringTriggerType = createGatheringTriggerType;
        this.completeMatchmakingTriggerType = completeMatchmakingTriggerType;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.enableRating = (_b = options === null || options === void 0 ? void 0 : options.enableRating) !== null && _b !== void 0 ? _b : null;
        this.createGatheringTriggerRealtimeNamespaceId = (_c = options === null || options === void 0 ? void 0 : options.createGatheringTriggerRealtimeNamespaceId) !== null && _c !== void 0 ? _c : null;
        this.createGatheringTriggerScriptId = (_d = options === null || options === void 0 ? void 0 : options.createGatheringTriggerScriptId) !== null && _d !== void 0 ? _d : null;
        this.completeMatchmakingTriggerRealtimeNamespaceId = (_e = options === null || options === void 0 ? void 0 : options.completeMatchmakingTriggerRealtimeNamespaceId) !== null && _e !== void 0 ? _e : null;
        this.completeMatchmakingTriggerScriptId = (_f = options === null || options === void 0 ? void 0 : options.completeMatchmakingTriggerScriptId) !== null && _f !== void 0 ? _f : null;
        this.changeRatingScript = (_g = options === null || options === void 0 ? void 0 : options.changeRatingScript) !== null && _g !== void 0 ? _g : null;
        this.joinNotification = (_h = options === null || options === void 0 ? void 0 : options.joinNotification) !== null && _h !== void 0 ? _h : null;
        this.leaveNotification = (_j = options === null || options === void 0 ? void 0 : options.leaveNotification) !== null && _j !== void 0 ? _j : null;
        this.completeNotification = (_k = options === null || options === void 0 ? void 0 : options.completeNotification) !== null && _k !== void 0 ? _k : null;
        this.changeRatingNotification = (_l = options === null || options === void 0 ? void 0 : options.changeRatingNotification) !== null && _l !== void 0 ? _l : null;
        this.logSetting = (_m = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _m !== void 0 ? _m : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Matchmaking::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e, _f;
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.enableRating != null) {
            properties["EnableRating"] = this.enableRating;
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
        if (this.changeRatingScript != null) {
            properties["ChangeRatingScript"] = (_a = this.changeRatingScript) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.joinNotification != null) {
            properties["JoinNotification"] = (_b = this.joinNotification) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.leaveNotification != null) {
            properties["LeaveNotification"] = (_c = this.leaveNotification) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.completeNotification != null) {
            properties["CompleteNotification"] = (_d = this.completeNotification) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.changeRatingNotification != null) {
            properties["ChangeRatingNotification"] = (_e = this.changeRatingNotification) === null || _e === void 0 ? void 0 : _e.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_f = this.logSetting) === null || _f === void 0 ? void 0 : _f.properties();
        }
        return properties;
    }
    ref() {
        return new NamespaceRef_1.default(this.name);
    }
    getAttrNamespaceId() {
        return new func_1.GetAttr(this, "Item.NamespaceId", null);
    }
    masterData(ratingModels) {
        new CurrentMasterData_1.default(this.stack, this.name, ratingModels).addDependsOn(this);
        return this;
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map