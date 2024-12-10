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
import ScheduleVersion from "./ScheduleVersion";
import { VersionModelOptions } from "./options/VersionModelOptions";
import { VersionModelTypeIsSimpleOptions } from "./options/VersionModelTypeIsSimpleOptions";
import { VersionModelTypeIsScheduleOptions } from "./options/VersionModelTypeIsScheduleOptions";
import { VersionModelScopeIsPassiveOptions } from "./options/VersionModelScopeIsPassiveOptions";
import { VersionModelScopeIsActiveOptions } from "./options/VersionModelScopeIsActiveOptions";
import { VersionModelScope } from "./enum/VersionModelScope";
import { VersionModelType } from "./enum/VersionModelType";
import { VersionModelApproveRequirement } from "./enum/VersionModelApproveRequirement";

export default class VersionModel {
    private readonly name: string;
    private readonly scope: VersionModelScope;
    private readonly type: VersionModelType;
    private readonly metadata: string|null = null;
    private readonly currentVersion: Version|null = null;
    private readonly warningVersion: Version|null = null;
    private readonly errorVersion: Version|null = null;
    private readonly scheduleVersions: ScheduleVersion[]|null = null;
    private readonly needSignature: boolean|null = null;
    private readonly signatureKeyId: string|null = null;
    private readonly approveRequirement: VersionModelApproveRequirement|null = null;

    public constructor(
        name: string,
        scope: VersionModelScope,
        type: VersionModelType,
        options: VersionModelOptions|null = null,
    ) {
        this.name = name;
        this.scope = scope;
        this.type = type;
        this.metadata = options?.metadata ?? null;
        this.currentVersion = options?.currentVersion ?? null;
        this.warningVersion = options?.warningVersion ?? null;
        this.errorVersion = options?.errorVersion ?? null;
        this.scheduleVersions = options?.scheduleVersions ?? null;
        this.needSignature = options?.needSignature ?? null;
        this.signatureKeyId = options?.signatureKeyId ?? null;
        this.approveRequirement = options?.approveRequirement ?? null;
    }

    public static typeIsSimple(
        name: string,
        scope: VersionModelScope,
        warningVersion: Version,
        errorVersion: Version,
        options: VersionModelTypeIsSimpleOptions|null = null,
    ): VersionModel {
        return new VersionModel(
            name,
            scope,
            VersionModelType.SIMPLE,
            {
                warningVersion: warningVersion,
                errorVersion: errorVersion,
                metadata: options?.metadata,
                scheduleVersions: options?.scheduleVersions,
            },
        );
    }

    public static typeIsSchedule(
        name: string,
        scope: VersionModelScope,
        options: VersionModelTypeIsScheduleOptions|null = null,
    ): VersionModel {
        return new VersionModel(
            name,
            scope,
            VersionModelType.SCHEDULE,
            {
                metadata: options?.metadata,
                scheduleVersions: options?.scheduleVersions,
            },
        );
    }

    public static scopeIsPassive(
        name: string,
        type: VersionModelType,
        needSignature: boolean,
        options: VersionModelScopeIsPassiveOptions|null = null,
    ): VersionModel {
        return new VersionModel(
            name,
            VersionModelScope.PASSIVE,
            type,
            {
                needSignature: needSignature,
                metadata: options?.metadata,
                scheduleVersions: options?.scheduleVersions,
            },
        );
    }

    public static scopeIsActive(
        name: string,
        type: VersionModelType,
        approveRequirement: VersionModelApproveRequirement,
        options: VersionModelScopeIsActiveOptions|null = null,
    ): VersionModel {
        return new VersionModel(
            name,
            VersionModelScope.ACTIVE,
            type,
            {
                approveRequirement: approveRequirement,
                metadata: options?.metadata,
                scheduleVersions: options?.scheduleVersions,
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
        if (this.scope != null) {
            properties["scope"] = this.scope;
        }
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.currentVersion != null) {
            properties["currentVersion"] = this.currentVersion?.properties(
            );
        }
        if (this.warningVersion != null) {
            properties["warningVersion"] = this.warningVersion?.properties(
            );
        }
        if (this.errorVersion != null) {
            properties["errorVersion"] = this.errorVersion?.properties(
            );
        }
        if (this.scheduleVersions != null) {
            properties["scheduleVersions"] = this.scheduleVersions.map(v => v.properties(
                ));
        }
        if (this.needSignature != null) {
            properties["needSignature"] = this.needSignature;
        }
        if (this.signatureKeyId != null) {
            properties["signatureKeyId"] = this.signatureKeyId;
        }
        if (this.approveRequirement != null) {
            properties["approveRequirement"] = this.approveRequirement;
        }

        return properties;
    }
}
