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

export default class IncrementalExchangeByUserId extends AcquireAction {

    public constructor(
        namespaceName: string,
        rateName: string,
        count: number,
        config: Config[]|null = null,
        userId: string|null = "#{userId}",
    ) {
        let properties: {[name: string]: any} = {};

        properties["namespaceName"] = namespaceName
        properties["rateName"] = rateName
        properties["count"] = count
        properties["config"] = config
        properties["userId"] = userId

        super(
            "Gs2Exchange:IncrementalExchangeByUserId",
            properties,
        );
    }
}
