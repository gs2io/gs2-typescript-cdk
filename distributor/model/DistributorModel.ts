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

import DistributorModelRef from "../ref/DistributorModelRef";

export interface DistributorModelOptions {
    metadata?: string|null|undefined;
    inboxNamespaceId?: string|null|undefined;
    whiteListTargetIds?: string[]|null|undefined;
}


export default class DistributorModel {
	private readonly name: string;
    private readonly metadata: string|null = null;
    private readonly inboxNamespaceId: string|null = null;
    private readonly whiteListTargetIds: string[]|null = null;

    public constructor(
            name: string,
            options?: DistributorModelOptions,
    ) {
        this.name = name;
        this.metadata = options?.metadata ?? null;
        this.inboxNamespaceId = options?.inboxNamespaceId ?? null;
        this.whiteListTargetIds = options?.whiteListTargetIds ?? null;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.inboxNamespaceId != null) {
            properties["InboxNamespaceId"] = this.inboxNamespaceId;
        }
        if (this.whiteListTargetIds != null) {
            properties["WhiteListTargetIds"] = this.whiteListTargetIds;
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): DistributorModelRef {
        return new DistributorModelRef(
            namespaceName,
            this.name,
        );
    }
}
