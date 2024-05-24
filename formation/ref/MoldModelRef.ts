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
import FormModelRef from "./FormModelRef";
import AddMoldCapacityByUserId from "../stampSheet/AddMoldCapacityByUserId";
import SetMoldCapacityByUserId from "../stampSheet/SetMoldCapacityByUserId";
import AcquireActionsToFormProperties from "../stampSheet/AcquireActionsToFormProperties";
import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
import SetFormByUserId from "../stampSheet/SetFormByUserId";
import Slot from "../model/Slot";
import SubMoldCapacityByUserId from "../stampSheet/SubMoldCapacityByUserId";

export default class MoldModelRef {
    private readonly namespaceName: string;
    private readonly moldModelName: string;

    public constructor(
        namespaceName: string,
        moldModelName: string,
    ) {
        this.namespaceName = namespaceName;
        this.moldModelName = moldModelName;
    }

    public formModel(
    ): FormModelRef {
        return new FormModelRef(
            this.namespaceName,
            this.moldModelName,
        );
    }

    public addMoldCapacity(
        capacity: number,
        userId: string = "#{userId}",
    ): AddMoldCapacityByUserId {
        return new AddMoldCapacityByUserId(
            this.namespaceName,
            this.moldModelName,
            capacity,
            userId,
        );
    }

    public setMoldCapacity(
        capacity: number,
        userId: string = "#{userId}",
    ): SetMoldCapacityByUserId {
        return new SetMoldCapacityByUserId(
            this.namespaceName,
            this.moldModelName,
            capacity,
            userId,
        );
    }

    public acquireActionsToFormProperties(
        index: number,
        acquireAction: AcquireAction,
        config: Config[]|null = null,
        userId: string = "#{userId}",
    ): AcquireActionsToFormProperties {
        return new AcquireActionsToFormProperties(
            this.namespaceName,
            this.moldModelName,
            index,
            acquireAction,
            config,
            userId,
        );
    }

    public setForm(
        index: number,
        slots: Slot[],
        userId: string = "#{userId}",
    ): SetFormByUserId {
        return new SetFormByUserId(
            this.namespaceName,
            this.moldModelName,
            index,
            slots,
            userId,
        );
    }

    public subMoldCapacity(
        capacity: number,
        userId: string = "#{userId}",
    ): SubMoldCapacityByUserId {
        return new SubMoldCapacityByUserId(
            this.namespaceName,
            this.moldModelName,
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
                "model",
                "mold",
                this.moldModelName,
            ],
        ).str(
        );
    }
}
