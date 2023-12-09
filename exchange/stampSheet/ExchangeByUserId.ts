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
import { Config } from "../../core/model";

export default class ExchangeByUserId extends AcquireAction {
    private readonly namespaceName: string;
    private readonly rateName: string;
    private readonly userId: string;
    private readonly count: number;
    private readonly config: Config[]|null = null;


    public constructor(
        namespaceName: string,
        rateName: string,
        count: number,
        config: Config[]|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.rateName = rateName;
        this.count = count;
        this.config = config ?? null;
        this.userId = userId;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.rateName != null) {
            properties["rateName"] = this.rateName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        if (this.config != null) {
            properties["config"] = this.config.map(v => v.properties(
                ));
        }

        return properties;
    }

    public action(): string {
        return "Gs2Exchange:ExchangeByUserId";
    }
}
