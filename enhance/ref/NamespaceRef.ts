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
import RateModelRef from "./RateModelRef";
import CreateProgressByUserId from "../stampSheet/CreateProgressByUserId";
import Material from "../model/Material";
import DeleteProgressByUserId from "../stampSheet/DeleteProgressByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public rateModel(
        rateName: string,
    ): RateModelRef {
        return new RateModelRef(
            this.namespaceName,
            rateName,
        );
    }

    public createProgress(
        rateName: string,
        targetItemSetId: string,
        materials: Material[]|null = null,
        force: boolean,
        userId: string|null = "#{userId}",
    ): CreateProgressByUserId {
        return new CreateProgressByUserId(
            this.namespaceName,
            rateName,
            targetItemSetId,
            materials,
            force,
            userId,
        );
    }

    public deleteProgress(
        userId: string|null = "#{userId}",
    ): DeleteProgressByUserId {
        return new DeleteProgressByUserId(
            this.namespaceName,
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
                "enhance",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
