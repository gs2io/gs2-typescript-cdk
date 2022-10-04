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

import core from "../../core";
import {GetAttr} from "../../core/func";
import {Stack} from "../../core/model";

import DistributorModelMasterRef from "../ref/DistributorModelMasterRef";

export interface DistributorModelMasterOptions {
    description?: string|null|undefined;
    metadata?: string|null|undefined;
    inboxNamespaceId?: string|null|undefined;
    whiteListTargetIds?: string[]|null|undefined;
}

export default class DistributorModelMaster extends core.CdkResource {

    private stack: Stack;
	private readonly namespaceName: string;
	private readonly name: string;
	private readonly description: string|null = null;
	private readonly metadata: string|null = null;
	private readonly inboxNamespaceId: string|null = null;
	private readonly whiteListTargetIds: string[]|null = null;

    public constructor(
            stack: Stack,
            namespaceName: string,
            name: string,
            options?: DistributorModelMasterOptions,
    ) {
        super("Distributor_DistributorModelMaster_" + name);

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.description = options?.description ?? null;
        this.metadata = options?.metadata ?? null;
        this.inboxNamespaceId = options?.inboxNamespaceId ?? null;
        this.whiteListTargetIds = options?.whiteListTargetIds ?? null;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Distributor::DistributorModelMaster";
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
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
    ): DistributorModelMasterRef {
        return new DistributorModelMasterRef(
            namespaceName,
            this.name,
        );
    }

    public getAttrDistributorModelId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.DistributorModelId"
        );
    }
}
