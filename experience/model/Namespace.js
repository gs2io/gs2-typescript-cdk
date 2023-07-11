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
        var _a, _b, _c, _d, _e, _f, _g;
        super("Experience_Namespace_" + name);
        this.description = null;
        this.experienceCapScriptId = null;
        this.changeExperienceScript = null;
        this.changeRankScript = null;
        this.changeRankCapScript = null;
        this.overflowExperienceScript = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.experienceCapScriptId = (_b = options === null || options === void 0 ? void 0 : options.experienceCapScriptId) !== null && _b !== void 0 ? _b : null;
        this.changeExperienceScript = (_c = options === null || options === void 0 ? void 0 : options.changeExperienceScript) !== null && _c !== void 0 ? _c : null;
        this.changeRankScript = (_d = options === null || options === void 0 ? void 0 : options.changeRankScript) !== null && _d !== void 0 ? _d : null;
        this.changeRankCapScript = (_e = options === null || options === void 0 ? void 0 : options.changeRankCapScript) !== null && _e !== void 0 ? _e : null;
        this.overflowExperienceScript = (_f = options === null || options === void 0 ? void 0 : options.overflowExperienceScript) !== null && _f !== void 0 ? _f : null;
        this.logSetting = (_g = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _g !== void 0 ? _g : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Experience::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e;
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.experienceCapScriptId != null) {
            properties["ExperienceCapScriptId"] = this.experienceCapScriptId;
        }
        if (this.changeExperienceScript != null) {
            properties["ChangeExperienceScript"] = (_a = this.changeExperienceScript) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.changeRankScript != null) {
            properties["ChangeRankScript"] = (_b = this.changeRankScript) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.changeRankCapScript != null) {
            properties["ChangeRankCapScript"] = (_c = this.changeRankCapScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.overflowExperienceScript != null) {
            properties["OverflowExperienceScript"] = (_d = this.overflowExperienceScript) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_e = this.logSetting) === null || _e === void 0 ? void 0 : _e.properties();
        }
        return properties;
    }
    ref() {
        return new NamespaceRef_1.default(this.name);
    }
    getAttrNamespaceId() {
        return new func_1.GetAttr(null, null, "Item.NamespaceId");
    }
    masterData(experienceModels) {
        new CurrentMasterData_1.default(this.stack, this.name, experienceModels).addDependsOn(this);
        return this;
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map