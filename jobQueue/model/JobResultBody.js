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
class JobResultBody {
    constructor(tryNumber, statusCode, result, tryAt, options) {
        this.tryNumber = tryNumber;
        this.statusCode = statusCode;
        this.result = result;
        this.tryAt = tryAt;
    }
    properties() {
        let properties = {};
        if (this.tryNumber != null) {
            properties["TryNumber"] = this.tryNumber;
        }
        if (this.statusCode != null) {
            properties["StatusCode"] = this.statusCode;
        }
        if (this.result != null) {
            properties["Result"] = this.result;
        }
        if (this.tryAt != null) {
            properties["TryAt"] = this.tryAt;
        }
        return properties;
    }
}
exports.default = JobResultBody;
//# sourceMappingURL=JobResultBody.js.map