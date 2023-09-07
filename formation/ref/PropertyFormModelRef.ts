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

import {GetAttr, Join} from "../../core/func";
import AcquireActionsToPropertyFormProperties from "../stampSheet/AcquireActionsToPropertyFormProperties";
import { AcquireAction } from "../../core/model";
import AcquireActionConfig from "../model/AcquireActionConfig";

export default class PropertyFormModelRef {
    private readonly namespaceName: string;
    private readonly propertyFormModelName: string;

    public constructor(
        namespaceName: string,
        propertyFormModelName: string,
    ) {
        this.namespaceName = namespaceName;
        this.propertyFormModelName = propertyFormModelName;
    }

    public acquireActionsToPropertyFormProperties(
        propertyId: string,
        acquireAction: AcquireAction,
        config: AcquireActionConfig[]|null = null,
        userId: string|null = "#{userId}",
    ): AcquireActionsToPropertyFormProperties {
        return new AcquireActionsToPropertyFormProperties(
            this.namespaceName,
            this.propertyFormModelName,
            propertyId,
            acquireAction,
            config,
            userId,
        );
    }

    public grn(
    ): string {
        return new Join(
            ":",
            [
                "grn",
                "gs2",
                GetAttr.region(
                ).str(
                ),
                GetAttr.ownerId(
                ).str(
                ),
                "formation",
                this.namespaceName,
                "model",
                "propertyForm",
                this.propertyFormModelName,
            ],
        ).str(
        );
    }
}
