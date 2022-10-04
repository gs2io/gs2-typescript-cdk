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

import {AcquireAction, ConsumeAction} from "../../core/model";
import { Config } from "../../core/model";

export default class DrawByUserId extends AcquireAction {

    public constructor(
            namespaceName: string,
            lotteryName: string,
            count: number,
            config: Config[]|null = null,
            userId: string = '#{userId}',
    ) {
        let properties: {[name: string]: any} = {};
        if (namespaceName != null) {
            properties["namespaceName"] = namespaceName;
        }
        if (lotteryName != null) {
            properties["lotteryName"] = lotteryName;
        }
        if (userId != null) {
            properties["userId"] = userId;
        }
        if (count != null) {
            properties["count"] = count;
        }
        if (config != null) {
            properties["config"] = config;
        }
        super(
            "Gs2Lottery:DrawByUserId",
            properties,
        );
    }
}
