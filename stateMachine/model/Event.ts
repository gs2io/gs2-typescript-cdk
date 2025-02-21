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
import ChangeStateEvent from "./ChangeStateEvent";
import EmitEvent from "./EmitEvent";
import { EventOptions } from "./options/EventOptions";
import { EventEventTypeIsChangeStateOptions } from "./options/EventEventTypeIsChangeStateOptions";
import { EventEventTypeIsEmitOptions } from "./options/EventEventTypeIsEmitOptions";
import { EventEventType } from "./enums/EventEventType";

export default class Event {
    private readonly eventType: EventEventType;
    private readonly changeStateEvent: ChangeStateEvent|null = null;
    private readonly emitEvent: EmitEvent|null = null;

    public constructor(
        eventType: EventEventType,
        options: EventOptions|null = null,
    ) {
        this.eventType = eventType;
        this.changeStateEvent = options?.changeStateEvent ?? null;
        this.emitEvent = options?.emitEvent ?? null;
    }

    public static eventTypeIsChangeState(
        changeStateEvent: ChangeStateEvent,
        options: EventEventTypeIsChangeStateOptions|null = null,
    ): Event {
        return new Event(
            EventEventType.CHANGE_STATE,
            {
                changeStateEvent: changeStateEvent,
            },
        );
    }

    public static eventTypeIsEmit(
        emitEvent: EmitEvent,
        options: EventEventTypeIsEmitOptions|null = null,
    ): Event {
        return new Event(
            EventEventType.EMIT,
            {
                emitEvent: emitEvent,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.eventType != null) {
            properties["eventType"] = this.eventType;
        }
        if (this.changeStateEvent != null) {
            properties["changeStateEvent"] = this.changeStateEvent?.properties(
            );
        }
        if (this.emitEvent != null) {
            properties["emitEvent"] = this.emitEvent?.properties(
            );
        }

        return properties;
    }
}
