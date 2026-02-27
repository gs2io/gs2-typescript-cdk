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
import TransactionSetting from "../../core/model/TransactionSetting";
import NotificationSetting from "../../core/model/NotificationSetting";
import ScriptSetting from "../../core/model/ScriptSetting";
import LogSetting from "../../core/model/LogSetting";

import NamespaceRef from "../ref/NamespaceRef";
import CurrentMasterData from "./CurrentMasterData";
import GuildModel from "./GuildModel";

import { NamespaceOptions } from "./options/NamespaceOptions";

export default class Namespace extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly description: string|null = null;
    private readonly transactionSetting: TransactionSetting|null = null;
    private readonly changeNotification: NotificationSetting|null = null;
    private readonly joinNotification: NotificationSetting|null = null;
    private readonly leaveNotification: NotificationSetting|null = null;
    private readonly changeMemberNotification: NotificationSetting|null = null;
    private readonly changeMemberNotificationIgnoreChangeMetadata: boolean|null = null;
    private readonly receiveRequestNotification: NotificationSetting|null = null;
    private readonly removeRequestNotification: NotificationSetting|null = null;
    private readonly createGuildScript: ScriptSetting|null = null;
    private readonly updateGuildScript: ScriptSetting|null = null;
    private readonly joinGuildScript: ScriptSetting|null = null;
    private readonly receiveJoinRequestScript: ScriptSetting|null = null;
    private readonly leaveGuildScript: ScriptSetting|null = null;
    private readonly changeRoleScript: ScriptSetting|null = null;
    private readonly deleteGuildScript: ScriptSetting|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "Guild_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.description = options?.description ?? null;
        this.transactionSetting = options?.transactionSetting ?? null;
        this.changeNotification = options?.changeNotification ?? null;
        this.joinNotification = options?.joinNotification ?? null;
        this.leaveNotification = options?.leaveNotification ?? null;
        this.changeMemberNotification = options?.changeMemberNotification ?? null;
        this.changeMemberNotificationIgnoreChangeMetadata = options?.changeMemberNotificationIgnoreChangeMetadata ?? null;
        this.receiveRequestNotification = options?.receiveRequestNotification ?? null;
        this.removeRequestNotification = options?.removeRequestNotification ?? null;
        this.createGuildScript = options?.createGuildScript ?? null;
        this.updateGuildScript = options?.updateGuildScript ?? null;
        this.joinGuildScript = options?.joinGuildScript ?? null;
        this.receiveJoinRequestScript = options?.receiveJoinRequestScript ?? null;
        this.leaveGuildScript = options?.leaveGuildScript ?? null;
        this.changeRoleScript = options?.changeRoleScript ?? null;
        this.deleteGuildScript = options?.deleteGuildScript ?? null;
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
        return "GS2::Guild::Namespace";
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
        if (this.transactionSetting != null) {
            properties["TransactionSetting"] = this.transactionSetting?.properties(
            );
        }
        if (this.changeNotification != null) {
            properties["ChangeNotification"] = this.changeNotification?.properties(
            );
        }
        if (this.joinNotification != null) {
            properties["JoinNotification"] = this.joinNotification?.properties(
            );
        }
        if (this.leaveNotification != null) {
            properties["LeaveNotification"] = this.leaveNotification?.properties(
            );
        }
        if (this.changeMemberNotification != null) {
            properties["ChangeMemberNotification"] = this.changeMemberNotification?.properties(
            );
        }
        if (this.changeMemberNotificationIgnoreChangeMetadata != null) {
            properties["ChangeMemberNotificationIgnoreChangeMetadata"] = this.changeMemberNotificationIgnoreChangeMetadata;
        }
        if (this.receiveRequestNotification != null) {
            properties["ReceiveRequestNotification"] = this.receiveRequestNotification?.properties(
            );
        }
        if (this.removeRequestNotification != null) {
            properties["RemoveRequestNotification"] = this.removeRequestNotification?.properties(
            );
        }
        if (this.createGuildScript != null) {
            properties["CreateGuildScript"] = this.createGuildScript?.properties(
            );
        }
        if (this.updateGuildScript != null) {
            properties["UpdateGuildScript"] = this.updateGuildScript?.properties(
            );
        }
        if (this.joinGuildScript != null) {
            properties["JoinGuildScript"] = this.joinGuildScript?.properties(
            );
        }
        if (this.receiveJoinRequestScript != null) {
            properties["ReceiveJoinRequestScript"] = this.receiveJoinRequestScript?.properties(
            );
        }
        if (this.leaveGuildScript != null) {
            properties["LeaveGuildScript"] = this.leaveGuildScript?.properties(
            );
        }
        if (this.changeRoleScript != null) {
            properties["ChangeRoleScript"] = this.changeRoleScript?.properties(
            );
        }
        if (this.deleteGuildScript != null) {
            properties["DeleteGuildScript"] = this.deleteGuildScript?.properties(
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

    public masterData(
        guildModels: GuildModel[],
    ): Namespace {
        new CurrentMasterData(
            this.stack,
            this.name,
            guildModels,
        ).addDependsOn(
            this,
        );
        return this;
    }
}
