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
exports.NamespaceType = void 0;
const tslib_1 = require("tslib");
const core_1 = tslib_1.__importDefault(require("../../core"));
const func_1 = require("../../core/func");
exports.NamespaceType = {
    GS2: "gs2",
    BIGQUERY: "bigquery",
    FIREHOSE: "firehose",
};
const NamespaceRef_1 = tslib_1.__importDefault(require("../ref/NamespaceRef"));
class Namespace extends core_1.default.CdkResource {
    constructor(stack, name, type, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        super("Log_Namespace_" + name);
        this.description = null;
        this.gcpCredentialJson = null;
        this.bigQueryDatasetName = null;
        this.logExpireDays = null;
        this.awsRegion = null;
        this.awsAccessKeyId = null;
        this.awsSecretAccessKey = null;
        this.firehoseStreamName = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.type = type;
        this.gcpCredentialJson = (_b = options === null || options === void 0 ? void 0 : options.gcpCredentialJson) !== null && _b !== void 0 ? _b : null;
        this.bigQueryDatasetName = (_c = options === null || options === void 0 ? void 0 : options.bigQueryDatasetName) !== null && _c !== void 0 ? _c : null;
        this.logExpireDays = (_d = options === null || options === void 0 ? void 0 : options.logExpireDays) !== null && _d !== void 0 ? _d : null;
        this.awsRegion = (_e = options === null || options === void 0 ? void 0 : options.awsRegion) !== null && _e !== void 0 ? _e : null;
        this.awsAccessKeyId = (_f = options === null || options === void 0 ? void 0 : options.awsAccessKeyId) !== null && _f !== void 0 ? _f : null;
        this.awsSecretAccessKey = (_g = options === null || options === void 0 ? void 0 : options.awsSecretAccessKey) !== null && _g !== void 0 ? _g : null;
        this.firehoseStreamName = (_h = options === null || options === void 0 ? void 0 : options.firehoseStreamName) !== null && _h !== void 0 ? _h : null;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Log::Namespace";
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.type != null) {
            properties["Type"] = this.type;
        }
        if (this.gcpCredentialJson != null) {
            properties["GcpCredentialJson"] = this.gcpCredentialJson;
        }
        if (this.bigQueryDatasetName != null) {
            properties["BigQueryDatasetName"] = this.bigQueryDatasetName;
        }
        if (this.logExpireDays != null) {
            properties["LogExpireDays"] = this.logExpireDays;
        }
        if (this.awsRegion != null) {
            properties["AwsRegion"] = this.awsRegion;
        }
        if (this.awsAccessKeyId != null) {
            properties["AwsAccessKeyId"] = this.awsAccessKeyId;
        }
        if (this.awsSecretAccessKey != null) {
            properties["AwsSecretAccessKey"] = this.awsSecretAccessKey;
        }
        if (this.firehoseStreamName != null) {
            properties["FirehoseStreamName"] = this.firehoseStreamName;
        }
        return properties;
    }
    ref() {
        return new NamespaceRef_1.default(this.name);
    }
    getAttrNamespaceId() {
        return new func_1.GetAttr(null, null, "Item.NamespaceId");
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map