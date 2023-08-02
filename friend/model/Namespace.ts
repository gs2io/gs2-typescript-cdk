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
    private readonly followScript: ScriptSetting|null = null;
    private readonly unfollowScript: ScriptSetting|null = null;
    private readonly sendRequestScript: ScriptSetting|null = null;
    private readonly cancelRequestScript: ScriptSetting|null = null;
    private readonly acceptRequestScript: ScriptSetting|null = null;
    private readonly rejectRequestScript: ScriptSetting|null = null;
    private readonly deleteFriendScript: ScriptSetting|null = null;
    private readonly updateProfileScript: ScriptSetting|null = null;
    private readonly followNotification: NotificationSetting|null = null;
    private readonly receiveRequestNotification: NotificationSetting|null = null;
    private readonly acceptRequestNotification: NotificationSetting|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "Friend_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.description = options?.description ?? null;
        this.followScript = options?.followScript ?? null;
        this.unfollowScript = options?.unfollowScript ?? null;
        this.sendRequestScript = options?.sendRequestScript ?? null;
        this.cancelRequestScript = options?.cancelRequestScript ?? null;
        this.acceptRequestScript = options?.acceptRequestScript ?? null;
        this.rejectRequestScript = options?.rejectRequestScript ?? null;
        this.deleteFriendScript = options?.deleteFriendScript ?? null;
        this.updateProfileScript = options?.updateProfileScript ?? null;
        this.followNotification = options?.followNotification ?? null;
        this.receiveRequestNotification = options?.receiveRequestNotification ?? null;
        this.acceptRequestNotification = options?.acceptRequestNotification ?? null;
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
        return "GS2::Friend::Namespace";
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
        if (this.followScript != null) {
            properties["FollowScript"] = this.followScript?.properties(
            );
        }
        if (this.unfollowScript != null) {
            properties["UnfollowScript"] = this.unfollowScript?.properties(
            );
        }
        if (this.sendRequestScript != null) {
            properties["SendRequestScript"] = this.sendRequestScript?.properties(
            );
        }
        if (this.cancelRequestScript != null) {
            properties["CancelRequestScript"] = this.cancelRequestScript?.properties(
            );
        }
        if (this.acceptRequestScript != null) {
            properties["AcceptRequestScript"] = this.acceptRequestScript?.properties(
            );
        }
        if (this.rejectRequestScript != null) {
            properties["RejectRequestScript"] = this.rejectRequestScript?.properties(
            );
        }
        if (this.deleteFriendScript != null) {
            properties["DeleteFriendScript"] = this.deleteFriendScript?.properties(
            );
        }
        if (this.updateProfileScript != null) {
            properties["UpdateProfileScript"] = this.updateProfileScript?.properties(
            );
        }
        if (this.followNotification != null) {
            properties["FollowNotification"] = this.followNotification?.properties(
            );
        }
        if (this.receiveRequestNotification != null) {
            properties["ReceiveRequestNotification"] = this.receiveRequestNotification?.properties(
            );
        }
        if (this.acceptRequestNotification != null) {
            properties["AcceptRequestNotification"] = this.acceptRequestNotification?.properties(
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
