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
import InvokeScript from "../stampSheet/InvokeScript";
import RandomStatus from "../model/RandomStatus";

export default class ScriptRef {
    private readonly namespaceName: string;
    private readonly scriptName: string;

    public constructor(
        namespaceName: string,
        scriptName: string,
    ) {
        this.namespaceName = namespaceName;
        this.scriptName = scriptName;
    }

    public invokeScript(
        scriptId: string,
        args: string|null = null,
        randomStatus: RandomStatus|null = null,
        userId: string = "#{userId}",
    ): InvokeScript {
        return new InvokeScript(
            scriptId,
            args,
            randomStatus,
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
                "script",
                this.namespaceName,
                "script",
                this.scriptName,
            ],
        ).str(
        );
    }
}
