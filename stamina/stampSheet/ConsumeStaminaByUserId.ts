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

export default class ConsumeStaminaByUserId extends ConsumeAction {

    public constructor(
            namespaceName: string,
            staminaName: string,
            consumeValue: number,
            userId: string = '#{userId}',
    ) {
        let properties: {[name: string]: any} = {};
        if (namespaceName != null) {
            properties["namespaceName"] = namespaceName;
        }
        if (staminaName != null) {
            properties["staminaName"] = staminaName;
        }
        if (userId != null) {
            properties["userId"] = userId;
        }
        if (consumeValue != null) {
            properties["consumeValue"] = consumeValue;
        }
        super(
            "Gs2Stamina:ConsumeStaminaByUserId",
            properties,
        );
    }
}
