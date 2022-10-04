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
class ProjectToken {
    constructor(options) {
        var _a;
        this.token = null;
        this.token = (_a = options === null || options === void 0 ? void 0 : options.token) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.token != null) {
            properties["Token"] = this.token;
        }
        return properties;
    }
}
exports.default = ProjectToken;
//# sourceMappingURL=ProjectToken.js.map