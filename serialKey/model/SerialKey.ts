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
import { SerialKeyOptions } from "./options/SerialKeyOptions";
import { SerialKeyStatusIsActiveOptions } from "./options/SerialKeyStatusIsActiveOptions";
import { SerialKeyStatusIsUsedOptions } from "./options/SerialKeyStatusIsUsedOptions";
import { SerialKeyStatusIsInactiveOptions } from "./options/SerialKeyStatusIsInactiveOptions";
import { SerialKeyStatus } from "./enums/SerialKeyStatus";

export default class SerialKey {
    private readonly campaignModelName: string;
    private readonly code: string;
    private readonly status: SerialKeyStatus;
    private readonly createdAt: number;
    private readonly updatedAt: number;
    private readonly metadata: string|null = null;
    private readonly usedUserId: string|null = null;
    private readonly usedAt: number|null = null;

    public constructor(
        campaignModelName: string,
        code: string,
        status: SerialKeyStatus,
        createdAt: number,
        updatedAt: number,
        options: SerialKeyOptions|null = null,
    ) {
        this.campaignModelName = campaignModelName;
        this.code = code;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.metadata = options?.metadata ?? null;
        this.usedUserId = options?.usedUserId ?? null;
        this.usedAt = options?.usedAt ?? null;
    }

    public static statusIsActive(
        campaignModelName: string,
        code: string,
        createdAt: number,
        updatedAt: number,
        options: SerialKeyStatusIsActiveOptions|null = null,
    ): SerialKey {
        return new SerialKey(
            campaignModelName,
            code,
            SerialKeyStatus.ACTIVE,
            createdAt,
            updatedAt,
            {
                metadata: options?.metadata,
                usedAt: options?.usedAt,
            },
        );
    }

    public static statusIsUsed(
        campaignModelName: string,
        code: string,
        createdAt: number,
        updatedAt: number,
        usedUserId: string,
        options: SerialKeyStatusIsUsedOptions|null = null,
    ): SerialKey {
        return new SerialKey(
            campaignModelName,
            code,
            SerialKeyStatus.USED,
            createdAt,
            updatedAt,
            {
                usedUserId: usedUserId,
                metadata: options?.metadata,
                usedAt: options?.usedAt,
            },
        );
    }

    public static statusIsInactive(
        campaignModelName: string,
        code: string,
        createdAt: number,
        updatedAt: number,
        options: SerialKeyStatusIsInactiveOptions|null = null,
    ): SerialKey {
        return new SerialKey(
            campaignModelName,
            code,
            SerialKeyStatus.INACTIVE,
            createdAt,
            updatedAt,
            {
                metadata: options?.metadata,
                usedAt: options?.usedAt,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.campaignModelName != null) {
            properties["campaignModelName"] = this.campaignModelName;
        }
        if (this.code != null) {
            properties["code"] = this.code;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.status != null) {
            properties["status"] = this.status;
        }
        if (this.usedUserId != null) {
            properties["usedUserId"] = this.usedUserId;
        }
        if (this.createdAt != null) {
            properties["createdAt"] = this.createdAt;
        }
        if (this.usedAt != null) {
            properties["usedAt"] = this.usedAt;
        }
        if (this.updatedAt != null) {
            properties["updatedAt"] = this.updatedAt;
        }

        return properties;
    }
}
