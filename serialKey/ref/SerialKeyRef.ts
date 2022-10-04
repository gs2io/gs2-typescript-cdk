/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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
import UseByUserId from "../stampSheet/UseByUserId";


export default class SerialKeyRef {
    private namespaceName: string;
    private serialKeyCode: string;

    public constructor(
            namespaceName: string,
            serialKeyCode: string,
    ) {
        this.namespaceName = namespaceName;
        this.serialKeyCode = serialKeyCode;
    }

    public use(
            code: string,
            userId: string = '#{userId}',
    ): UseByUserId {
        return new UseByUserId(
            this.namespaceName,
            code,
            userId,
        );
    }

    public grn(): string {
        return new Join(
            ":",
            [
                "grn",
                "gs2",
                GetAttr.region().str(),
                GetAttr.ownerId().str(),
                "serialKey",
                this.namespaceName,
                "serialKey",
                this.serialKeyCode
            ]
        ).str();
    }
}
