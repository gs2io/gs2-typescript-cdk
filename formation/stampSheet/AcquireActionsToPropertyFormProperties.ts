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
import AcquireActionConfig from "../model/AcquireActionConfig";

export default class AcquireActionsToPropertyFormProperties extends AcquireAction {

    public constructor(
        namespaceName: string,
        propertyFormModelName: string,
        propertyId: string,
        acquireAction: AcquireAction,
        config: AcquireActionConfig[]|null = null,
        userId: string|null = "#{userId}",
    ) {
        let properties: {[name: string]: any} = {};

        properties["namespaceName"] = namespaceName
        properties["propertyFormModelName"] = propertyFormModelName
        properties["propertyId"] = propertyId
        if (acquireAction != null) {
            properties["acquireAction"] = acquireAction?.properties(
            );
        }
        if (config != null) {
            properties["config"] = config.map(v => v.properties(
                ));
        }
        properties["userId"] = userId

        super(
            "Gs2Formation:AcquireActionsToPropertyFormProperties",
            properties,
        );
    }
}
