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
const func_1 = require("../../core/func");
const AddEntriesByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AddEntriesByUserId"));
const DeleteEntriesByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DeleteEntriesByUserId"));
const VerifyEntryByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyEntryByUserId"));
class EntryModelRef {
    constructor(namespaceName, entryName) {
        this.namespaceName = namespaceName;
        this.entryName = entryName;
    }
    addEntries(entryModelNames = null, userId = "#{userId}") {
        return new AddEntriesByUserId_1.default(this.namespaceName, entryModelNames, userId);
    }
    deleteEntries(entryModelNames = null, userId = "#{userId}") {
        return new DeleteEntriesByUserId_1.default(this.namespaceName, entryModelNames, userId);
    }
    verifyEntry(entryModelName, verifyType, userId = "#{userId}") {
        return new VerifyEntryByUserId_1.default(this.namespaceName, entryModelName, verifyType, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "dictionary",
            this.namespaceName,
            "model",
            this.entryName,
        ]).str();
    }
}
exports.default = EntryModelRef;
//# sourceMappingURL=EntryModelRef.js.map