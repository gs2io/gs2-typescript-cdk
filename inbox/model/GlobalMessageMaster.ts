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
import AcquireAction from "../../core/model/AcquireAction";
import TimeSpan from "./TimeSpan";

import GlobalMessageMasterRef from "../ref/GlobalMessageMasterRef";

export interface GlobalMessageMasterOptions {
    readAcquireActions?: AcquireAction[]|null|undefined;
    expiresTimeSpan?: TimeSpan|null|undefined;
    expiresAt?: number|null|undefined;
}

export default class GlobalMessageMaster extends core.CdkResource {

    private stack: Stack;
	private readonly namespaceName: string;
	private readonly name: string;
	private readonly metadata: string;
	private readonly readAcquireActions: AcquireAction[]|null = null;
	private readonly expiresTimeSpan: TimeSpan|null = null;
	private readonly expiresAt: number|null = null;

    public constructor(
            stack: Stack,
            namespaceName: string,
            name: string,
            metadata: string,
            options?: GlobalMessageMasterOptions,
    ) {
        super("Inbox_GlobalMessageMaster_" + name);

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.metadata = metadata;
        this.readAcquireActions = options?.readAcquireActions ?? null;
        this.expiresTimeSpan = options?.expiresTimeSpan ?? null;
        this.expiresAt = options?.expiresAt ?? null;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Inbox::GlobalMessageMaster";
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.readAcquireActions != null) {
            properties["ReadAcquireActions"] = this.readAcquireActions.map(v => v.properties());
        }
        if (this.expiresTimeSpan != null) {
            properties["ExpiresTimeSpan"] = this.expiresTimeSpan.properties();
        }
        if (this.expiresAt != null) {
            properties["ExpiresAt"] = this.expiresAt;
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): GlobalMessageMasterRef {
        return new GlobalMessageMasterRef(
            namespaceName,
            this.name,
        );
    }

    public getAttrGlobalMessageId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.GlobalMessageId"
        );
    }
}
