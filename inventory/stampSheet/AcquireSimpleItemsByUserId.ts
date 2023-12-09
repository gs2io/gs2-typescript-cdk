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
import AcquireCount from "../model/AcquireCount";

export default class AcquireSimpleItemsByUserId extends AcquireAction {
    private readonly namespaceName: string;
    private readonly inventoryName: string;
    private readonly userId: string;
    private readonly acquireCounts: AcquireCount[];


    public constructor(
        namespaceName: string,
        inventoryName: string,
        acquireCounts: AcquireCount[],
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
        this.acquireCounts = acquireCounts;
        this.userId = userId;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.inventoryName != null) {
            properties["inventoryName"] = this.inventoryName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.acquireCounts != null) {
            properties["acquireCounts"] = this.acquireCounts.map(v => v.properties(
                ));
        }

        return properties;
    }

    public action(): string {
        return "Gs2Inventory:AcquireSimpleItemsByUserId";
    }
}
