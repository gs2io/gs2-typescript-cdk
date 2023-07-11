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

export default class MissionTaskModelRef {
    private readonly namespaceName: string;
    private readonly missionGroupName: string;
    private readonly missionTaskName: string;

    public constructor(
        namespaceName: string,
        missionGroupName: string,
        missionTaskName: string,
    ) {
        this.namespaceName = namespaceName;
        this.missionGroupName = missionGroupName;
        this.missionTaskName = missionTaskName;
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
                "mission",
                this.namespaceName,
                "group",
                this.missionGroupName,
                "missionTaskModel",
                this.missionTaskName,
            ],
        ).str(
        );
    }
}
