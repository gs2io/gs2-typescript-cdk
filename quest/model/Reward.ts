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
import { RewardOptions } from "./options/RewardOptions";

export default class Reward {
    private readonly action: string;
    private readonly request: string;
    private readonly itemId: string;
    private readonly value: number;

    public constructor(
        action: string,
        request: string,
        itemId: string,
        value: number,
        options: RewardOptions|null = null,
    ) {
        this.action = action;
        this.request = request;
        this.itemId = itemId;
        this.value = value;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.action != null) {
            properties["action"] = this.action;
        }
        if (this.request != null) {
            properties["request"] = this.request;
        }
        if (this.itemId != null) {
            properties["itemId"] = this.itemId;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }

        return properties;
    }
}
