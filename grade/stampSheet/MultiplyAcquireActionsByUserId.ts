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

import {AcquireAction, ConsumeAction} from "../../core/model";

export default class MultiplyAcquireActionsByUserId extends AcquireAction {
    private readonly namespaceName: string;
    private readonly userId: string;
    private readonly gradeName: string;
    private readonly propertyId: string;
    private readonly rateName: string;
    private readonly acquireActions: AcquireAction[]|null = null;


    public constructor(
        namespaceName: string,
        gradeName: string,
        propertyId: string,
        rateName: string,
        acquireActions: AcquireAction[]|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.gradeName = gradeName;
        this.propertyId = propertyId;
        this.rateName = rateName;
        this.acquireActions = acquireActions ?? null;
        this.userId = userId;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.gradeName != null) {
            properties["gradeName"] = this.gradeName;
        }
        if (this.propertyId != null) {
            properties["propertyId"] = this.propertyId;
        }
        if (this.rateName != null) {
            properties["rateName"] = this.rateName;
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties(
                ));
        }

        return properties;
    }

    public action(): string {
        return "Gs2Grade:MultiplyAcquireActionsByUserId";
    }
}
