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

import {AcquireAction, ConsumeAction, VerifyAction} from "../../core/model";

export default class IssueOnce extends AcquireAction {
    private readonly namespaceName: string;
    private readonly campaignModelName: string;
    private readonly metadata: string|null = null;


    public constructor(
        namespaceName: string,
        campaignModelName: string,
        metadata: string|null = null,
    ) {
        super();

        this.namespaceName = namespaceName;
        this.campaignModelName = campaignModelName;
        this.metadata = metadata ?? null;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.campaignModelName != null) {
            properties["campaignModelName"] = this.campaignModelName;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }

        return properties;
    }

    public action(): string {
        return "Gs2SerialKey:IssueOnce";
    }
}
