"use strict";
/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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
const model_1 = require("../../core/model");
class CurrentMasterData extends model_1.CdkResource {
    constructor(stack, namespaceName, showcases) {
        super("Showcase_CurrentShowcaseMaster_" + namespaceName);
        this.version = "2019-04-04";
        this.namespaceName = namespaceName;
        this.showcases = showcases;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Showcase::CurrentShowcaseMaster";
    }
    properties() {
        return {
            "NamespaceName": this.namespaceName,
            "Settings": {
                "version": this.version,
                "showcases": this.showcases.map(v => v.properties()),
            },
        };
    }
}
exports.default = CurrentMasterData;
//# sourceMappingURL=CurrentMasterData.js.map