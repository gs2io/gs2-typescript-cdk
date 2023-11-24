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
import { NotificationSetting } from "../../core/model";
import { LogSetting } from "../../core/model";
import { NamespaceOptions } from "./options/NamespaceOptions";

export default class Namespace {
    private readonly ownerId: string;
    private readonly name: string;
    private readonly enableAutoRun: boolean;
    private readonly description: string|null = null;
    private readonly runNotification: NotificationSetting|null = null;
    private readonly pushNotification: NotificationSetting|null = null;
    private readonly logSetting: LogSetting|null = null;
    private readonly revision: number|null = null;

    public constructor(
        ownerId: string,
        name: string,
        enableAutoRun: boolean,
        options: NamespaceOptions|null = null,
    ) {
        this.ownerId = ownerId;
        this.name = name;
        this.enableAutoRun = enableAutoRun;
        this.description = options?.description ?? null;
        this.runNotification = options?.runNotification ?? null;
        this.pushNotification = options?.pushNotification ?? null;
        this.logSetting = options?.logSetting ?? null;
        this.revision = options?.revision ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.ownerId != null) {
            properties["ownerId"] = this.ownerId;
        }
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.description != null) {
            properties["description"] = this.description;
        }
        if (this.enableAutoRun != null) {
            properties["enableAutoRun"] = this.enableAutoRun;
        }
        if (this.runNotification != null) {
            properties["runNotification"] = this.runNotification?.properties(
            );
        }
        if (this.pushNotification != null) {
            properties["pushNotification"] = this.pushNotification?.properties(
            );
        }
        if (this.logSetting != null) {
            properties["logSetting"] = this.logSetting?.properties(
            );
        }

        return properties;
    }
}
