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
import QuestGroupModelRef from "./QuestGroupModelRef";
import CreateProgressByUserId from "../stampSheet/CreateProgressByUserId";
import { Config } from "../../core/model";
import DeleteProgressByUserId from "../stampSheet/DeleteProgressByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public questGroupModel(
        questGroupName: string,
    ): QuestGroupModelRef {
        return new QuestGroupModelRef(
            this.namespaceName,
            questGroupName,
        );
    }

    public createProgress(
        questModelId: string,
        force: boolean|null = null,
        config: Config[]|null = null,
        userId: string|null = "#{userId}",
    ): CreateProgressByUserId {
        return new CreateProgressByUserId(
            this.namespaceName,
            questModelId,
            force,
            config,
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
                "quest",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
