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

import {CdkResource, Stack} from "../../core/model";
import {GetAttr} from "../../core/func";
import ScriptSetting from "../../core/model/ScriptSetting";
import NotificationSetting from "../../core/model/NotificationSetting";
import LogSetting from "../../core/model/LogSetting";

import NamespaceRef from "../ref/NamespaceRef";

import { NamespaceOptions } from "./options/NamespaceOptions";

export default class Namespace extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly description: string|null = null;
    private readonly allowCreateRoom: boolean|null = null;
    private readonly messageLifeTimeDays: number|null = null;
    private readonly postMessageScript: ScriptSetting|null = null;
    private readonly createRoomScript: ScriptSetting|null = null;
    private readonly deleteRoomScript: ScriptSetting|null = null;
    private readonly subscribeRoomScript: ScriptSetting|null = null;
    private readonly unsubscribeRoomScript: ScriptSetting|null = null;
    private readonly postNotification: NotificationSetting|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "Chat_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.description = options?.description ?? null;
        this.allowCreateRoom = options?.allowCreateRoom ?? null;
        this.messageLifeTimeDays = options?.messageLifeTimeDays ?? null;
        this.postMessageScript = options?.postMessageScript ?? null;
        this.createRoomScript = options?.createRoomScript ?? null;
        this.deleteRoomScript = options?.deleteRoomScript ?? null;
        this.subscribeRoomScript = options?.subscribeRoomScript ?? null;
        this.unsubscribeRoomScript = options?.unsubscribeRoomScript ?? null;
        this.postNotification = options?.postNotification ?? null;
        this.logSetting = options?.logSetting ?? null;
        stack.addResource(
            this,
        );
    }


    public alternateKeys(
    ) {
        return "name";
    }

    public resourceType(
    ): string {
        return "GS2::Chat::Namespace";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.allowCreateRoom != null) {
            properties["AllowCreateRoom"] = this.allowCreateRoom;
        }
        if (this.messageLifeTimeDays != null) {
            properties["MessageLifeTimeDays"] = this.messageLifeTimeDays;
        }
        if (this.postMessageScript != null) {
            properties["PostMessageScript"] = this.postMessageScript?.properties(
            );
        }
        if (this.createRoomScript != null) {
            properties["CreateRoomScript"] = this.createRoomScript?.properties(
            );
        }
        if (this.deleteRoomScript != null) {
            properties["DeleteRoomScript"] = this.deleteRoomScript?.properties(
            );
        }
        if (this.subscribeRoomScript != null) {
            properties["SubscribeRoomScript"] = this.subscribeRoomScript?.properties(
            );
        }
        if (this.unsubscribeRoomScript != null) {
            properties["UnsubscribeRoomScript"] = this.unsubscribeRoomScript?.properties(
            );
        }
        if (this.postNotification != null) {
            properties["PostNotification"] = this.postNotification?.properties(
            );
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = this.logSetting?.properties(
            );
        }

        return properties;
    }

    public ref(
    ): NamespaceRef {
        return new NamespaceRef(
            this.name!,
        );
    }

    public getAttrNamespaceId(
    ): GetAttr {
        return new GetAttr(
            this,
            "Item.NamespaceId",
            null,
        );
    }
}
