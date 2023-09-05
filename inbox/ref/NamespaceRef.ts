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
import GlobalMessageRef from "./GlobalMessageRef";
import SendMessageByUserId from "../stampSheet/SendMessageByUserId";
import { AcquireAction } from "../../core/model";
import TimeSpan from "../model/TimeSpan";
import OpenMessageByUserId from "../stampSheet/OpenMessageByUserId";
import DeleteMessageByUserId from "../stampSheet/DeleteMessageByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public globalMessage(
        globalMessageName: string,
    ): GlobalMessageRef {
        return new GlobalMessageRef(
            this.namespaceName,
            globalMessageName,
        );
    }

    public sendMessage(
        metadata: string,
        readAcquireActions: AcquireAction[]|null = null,
        expiresAt: number|null = null,
        expiresTimeSpan: TimeSpan|null = null,
        userId: string|null = "#{userId}",
    ): SendMessageByUserId {
        return new SendMessageByUserId(
            this.namespaceName,
            metadata,
            readAcquireActions,
            expiresAt,
            expiresTimeSpan,
            userId,
        );
    }

    public openMessage(
        messageName: string,
        userId: string|null = "#{userId}",
    ): OpenMessageByUserId {
        return new OpenMessageByUserId(
            this.namespaceName,
            messageName,
            userId,
        );
    }

    public deleteMessage(
        messageName: string,
        userId: string|null = "#{userId}",
    ): DeleteMessageByUserId {
        return new DeleteMessageByUserId(
            this.namespaceName,
            messageName,
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
                "inbox",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
