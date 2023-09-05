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
import PushByUserId from "../stampSheet/PushByUserId";
import JobEntry from "../model/JobEntry";
import DeleteJobByUserId from "../stampSheet/DeleteJobByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public push(
        jobs: JobEntry[]|null = null,
        userId: string|null = "#{userId}",
    ): PushByUserId {
        return new PushByUserId(
            this.namespaceName,
            jobs,
            userId,
        );
    }

    public deleteJob(
        jobName: string,
        userId: string|null = "#{userId}",
    ): DeleteJobByUserId {
        return new DeleteJobByUserId(
            this.namespaceName,
            jobName,
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
                "queue",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
