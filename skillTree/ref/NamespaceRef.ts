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
import NodeModelRef from "./NodeModelRef";
import MarkReleaseByUserId from "../stampSheet/MarkReleaseByUserId";
import MarkRestrainByUserId from "../stampSheet/MarkRestrainByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public nodeModel(
        nodeModelName: string,
    ): NodeModelRef {
        return new NodeModelRef(
            this.namespaceName,
            nodeModelName,
        );
    }

    public markRelease(
        nodeModelNames: string[],
        userId: string|null = "#{userId}",
    ): MarkReleaseByUserId {
        return new MarkReleaseByUserId(
            this.namespaceName,
            nodeModelNames,
            userId,
        );
    }

    public markRestrain(
        nodeModelNames: string[],
        userId: string|null = "#{userId}",
    ): MarkRestrainByUserId {
        return new MarkRestrainByUserId(
            this.namespaceName,
            nodeModelNames,
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
                "skillTree",
                this.namespaceName,
            ],
        ).str(
        );
    }
}