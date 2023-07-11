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
import Version from "./Version";
import { VersionModelOptions } from "./options/VersionModelOptions";
import { VersionModelScopeIsPassiveOptions } from "./options/VersionModelScopeIsPassiveOptions";
import { VersionModelScopeIsActiveOptions } from "./options/VersionModelScopeIsActiveOptions";
import { VersionModelScope } from "./enum/VersionModelScope";

export default class VersionModel {
    private readonly name: string;
    private readonly warningVersion: Version;
    private readonly errorVersion: Version;
    private readonly scope: VersionModelScope;
    private readonly metadata: string|null = null;
    private readonly currentVersion: Version|null = null;
    private readonly needSignature: boolean|null = null;
    private readonly signatureKeyId: string|null = null;

    public constructor(
        name: string,
        warningVersion: Version,
        errorVersion: Version,
        scope: VersionModelScope,
        options: VersionModelOptions|null = null,
    ) {
        this.name = name;
        this.warningVersion = warningVersion;
        this.errorVersion = errorVersion;
        this.scope = scope;
        this.metadata = options?.metadata ?? null;
        this.currentVersion = options?.currentVersion ?? null;
        this.needSignature = options?.needSignature ?? null;
        this.signatureKeyId = options?.signatureKeyId ?? null;
    }

    public static scopeIsPassive(
        name: string,
        warningVersion: Version,
        errorVersion: Version,
        needSignature: boolean,
        options: VersionModelScopeIsPassiveOptions|null = null,
    ): VersionModel {
        return new VersionModel(
            name,
            warningVersion,
            errorVersion,
            VersionModelScope.PASSIVE,
            {
                needSignature: needSignature,
                metadata: options?.metadata,
            },
        );
    }

    public static scopeIsActive(
        name: string,
        warningVersion: Version,
        errorVersion: Version,
        currentVersion: Version,
        options: VersionModelScopeIsActiveOptions|null = null,
    ): VersionModel {
        return new VersionModel(
            name,
            warningVersion,
            errorVersion,
            VersionModelScope.ACTIVE,
            {
                currentVersion: currentVersion,
                metadata: options?.metadata,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.warningVersion != null) {
            properties["warningVersion"] = this.warningVersion?.properties(
            );
        }
        if (this.errorVersion != null) {
            properties["errorVersion"] = this.errorVersion?.properties(
            );
        }
        if (this.scope != null) {
            properties["scope"] = this.scope;
        }
        if (this.currentVersion != null) {
            properties["currentVersion"] = this.currentVersion?.properties(
            );
        }
        if (this.needSignature != null) {
            properties["needSignature"] = this.needSignature;
        }
        if (this.signatureKeyId != null) {
            properties["signatureKeyId"] = this.signatureKeyId;
        }

        return properties;
    }
}
