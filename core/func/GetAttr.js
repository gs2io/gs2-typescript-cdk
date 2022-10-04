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
class GetAttr {
    constructor(resource = null, path = null, key = null) {
        if (key == null) {
            this.key = resource.resourceName + "." + path;
        }
        else {
            this.key = key;
        }
    }
    str() {
        return "!GetAttr " + this.key;
    }
    static region() {
        return new GetAttr(null, null, "Gs2::Region");
    }
    static ownerId() {
        return new GetAttr(null, null, "Gs2::OwnerId");
    }
}
exports.default = GetAttr;
//# sourceMappingURL=GetAttr.js.map