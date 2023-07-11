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
import MoldModelRef from "./MoldModelRef";
import FormModelRef from "./FormModelRef";
import AddMoldCapacityByUserId from "../stampSheet/AddMoldCapacityByUserId";
import SetMoldCapacityByUserId from "../stampSheet/SetMoldCapacityByUserId";
import AcquireActionsToFormProperties from "../stampSheet/AcquireActionsToFormProperties";
import { AcquireAction } from "../../core/model";
import AcquireActionConfig from "../model/AcquireActionConfig";
import AcquireActionsToPropertyFormProperties from "../stampSheet/AcquireActionsToPropertyFormProperties";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public moldModel(
        moldName: string,
    ): MoldModelRef {
        return new MoldModelRef(
            this.namespaceName,
            moldName,
        );
    }

    public formModel(
        formModelName: string,
    ): FormModelRef {
        return new FormModelRef(
            this.namespaceName,
            formModelName,
        );
    }

    public addMoldCapacity(
        moldName: string,
        capacity: number,
        userId: string|null = "#{userId}",
    ): AddMoldCapacityByUserId {
        return new AddMoldCapacityByUserId(
            this.namespaceName,
            moldName,
            capacity,
            userId,
        );
    }

    public setMoldCapacity(
        moldName: string,
        capacity: number,
        userId: string|null = "#{userId}",
    ): SetMoldCapacityByUserId {
        return new SetMoldCapacityByUserId(
            this.namespaceName,
            moldName,
            capacity,
            userId,
        );
    }

    public acquireActionsToFormProperties(
        moldName: string,
        index: number,
        acquireAction: AcquireAction,
        config: AcquireActionConfig[]|null = null,
        userId: string|null = "#{userId}",
    ): AcquireActionsToFormProperties {
        return new AcquireActionsToFormProperties(
            this.namespaceName,
            moldName,
            index,
            acquireAction,
            config,
            userId,
        );
    }

    public acquireActionsToPropertyFormProperties(
        formModelName: string,
        propertyId: string,
        acquireAction: AcquireAction,
        config: AcquireActionConfig[]|null = null,
        userId: string|null = "#{userId}",
    ): AcquireActionsToPropertyFormProperties {
        return new AcquireActionsToPropertyFormProperties(
            this.namespaceName,
            formModelName,
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
            ],
        ).str(
        );
    }
}
