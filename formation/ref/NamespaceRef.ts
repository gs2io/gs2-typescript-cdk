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
import PropertyFormModelRef from "./PropertyFormModelRef";
import AddMoldCapacityByUserId from "../stampSheet/AddMoldCapacityByUserId";
import SetMoldCapacityByUserId from "../stampSheet/SetMoldCapacityByUserId";
import AcquireActionsToFormProperties from "../stampSheet/AcquireActionsToFormProperties";
import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
import SetFormByUserId from "../stampSheet/SetFormByUserId";
import Slot from "../model/Slot";
import AcquireActionsToPropertyFormProperties from "../stampSheet/AcquireActionsToPropertyFormProperties";
import SubMoldCapacityByUserId from "../stampSheet/SubMoldCapacityByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public moldModel(
        moldModelName: string,
    ): MoldModelRef {
        return new MoldModelRef(
            this.namespaceName,
            moldModelName,
        );
    }

    public propertyFormModel(
        propertyFormModelName: string,
    ): PropertyFormModelRef {
        return new PropertyFormModelRef(
            this.namespaceName,
            propertyFormModelName,
        );
    }

    public addMoldCapacity(
        moldModelName: string,
        capacity: number,
        userId: string = "#{userId}",
    ): AddMoldCapacityByUserId {
        return new AddMoldCapacityByUserId(
            this.namespaceName,
            moldModelName,
            capacity,
            userId,
        );
    }

    public setMoldCapacity(
        moldModelName: string,
        capacity: number,
        userId: string = "#{userId}",
    ): SetMoldCapacityByUserId {
        return new SetMoldCapacityByUserId(
            this.namespaceName,
            moldModelName,
            capacity,
            userId,
        );
    }

    public acquireActionsToFormProperties(
        moldModelName: string,
        index: number,
        acquireAction: AcquireAction,
        config: Config[]|null = null,
        userId: string = "#{userId}",
    ): AcquireActionsToFormProperties {
        return new AcquireActionsToFormProperties(
            this.namespaceName,
            moldModelName,
            index,
            acquireAction,
            config,
            userId,
        );
    }

    public setForm(
        moldModelName: string,
        index: number,
        slots: Slot[],
        userId: string = "#{userId}",
    ): SetFormByUserId {
        return new SetFormByUserId(
            this.namespaceName,
            moldModelName,
            index,
            slots,
            userId,
        );
    }

    public acquireActionsToPropertyFormProperties(
        propertyFormModelName: string,
        propertyId: string,
        acquireAction: AcquireAction,
        config: Config[]|null = null,
        userId: string = "#{userId}",
    ): AcquireActionsToPropertyFormProperties {
        return new AcquireActionsToPropertyFormProperties(
            this.namespaceName,
            propertyFormModelName,
            propertyId,
            acquireAction,
            config,
            userId,
        );
    }

    public subMoldCapacity(
        moldModelName: string,
        capacity: number,
        userId: string = "#{userId}",
    ): SubMoldCapacityByUserId {
        return new SubMoldCapacityByUserId(
            this.namespaceName,
            moldModelName,
            capacity,
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
