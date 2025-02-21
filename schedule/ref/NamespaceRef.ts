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
import TriggerByUserId from "../stampSheet/TriggerByUserId";
import { TriggerTriggerStrategy } from "../stampSheet/enums/TriggerTriggerStrategy";
import DeleteTriggerByUserId from "../stampSheet/DeleteTriggerByUserId";
import VerifyTriggerByUserId from "../stampSheet/VerifyTriggerByUserId";
import { TriggerVerifyType } from "../stampSheet/enums/TriggerVerifyType";
import VerifyEventByUserId from "../stampSheet/VerifyEventByUserId";
import { EventVerifyType } from "../stampSheet/enums/EventVerifyType";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public trigger(
        triggerName: string,
        triggerStrategy: TriggerTriggerStrategy,
        ttl: number|null = null,
        eventId: string|null = null,
        userId: string = "#{userId}",
    ): TriggerByUserId {
        return new TriggerByUserId(
            this.namespaceName,
            triggerName,
            triggerStrategy,
            ttl,
            eventId,
            userId,
        );
    }

    public deleteTrigger(
        triggerName: string,
        userId: string = "#{userId}",
    ): DeleteTriggerByUserId {
        return new DeleteTriggerByUserId(
            this.namespaceName,
            triggerName,
            userId,
        );
    }

    public verifyTrigger(
        triggerName: string,
        verifyType: TriggerVerifyType,
        elapsedMinutes: number|null = null,
        userId: string = "#{userId}",
    ): VerifyTriggerByUserId {
        return new VerifyTriggerByUserId(
            this.namespaceName,
            triggerName,
            verifyType,
            elapsedMinutes,
            userId,
        );
    }

    public verifyEvent(
        eventName: string,
        verifyType: EventVerifyType,
        userId: string = "#{userId}",
    ): VerifyEventByUserId {
        return new VerifyEventByUserId(
            this.namespaceName,
            eventName,
            verifyType,
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
                "schedule",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
