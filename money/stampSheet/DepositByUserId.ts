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

export default class DepositByUserId extends AcquireAction {
    private readonly namespaceName: string;
    private readonly userId: string;
    private readonly slot: number;
    private readonly price: number;
    private readonly count: number;


    public constructor(
        namespaceName: string,
        slot: number,
        price: number,
        count: number,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.slot = slot;
        this.price = price;
        this.count = count;
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
        if (this.slot != null) {
            properties["slot"] = this.slot;
        }
        if (this.price != null) {
            properties["price"] = this.price;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Money:DepositByUserId";
    }
}
