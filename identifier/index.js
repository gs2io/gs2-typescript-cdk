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
const model = tslib_1.__importStar(require("./model"));
const ref = tslib_1.__importStar(require("./ref"));
const stampSheet = tslib_1.__importStar(require("./stampSheet"));
const ref_1 = require("./ref");
const ref_2 = require("./ref");
function user(userName) {
    return new ref_1.UserRef(userName);
}
function securityPolicy(securityPolicyName) {
    return new ref_2.SecurityPolicyRef(securityPolicyName);
}
exports.default = {
    model,
    ref,
    stampSheet,
    user,
    securityPolicy,
};
//# sourceMappingURL=index.js.map