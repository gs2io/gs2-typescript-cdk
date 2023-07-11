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

import RoomRef from "../ref/RoomRef";

import { RoomOptions } from "./options/RoomOptions";

export default class Room extends CdkResource {
    private readonly stack: Stack;
    private readonly ownerId: string;
    private readonly namespaceName: string;
    private readonly name: string;
    private readonly ipAddress: string|null = null;
    private readonly port: number|null = null;
    private readonly encryptionKey: string|null = null;

    public constructor(
        stack: Stack,
        ownerId: string,
        namespaceName: string,
        name: string,
        options: RoomOptions|null = null,
    ) {
        super(
            "Realtime_Room_" + name
        );

        this.stack = stack;
        this.ownerId = ownerId;
        this.namespaceName = namespaceName;
        this.name = name;
        this.ipAddress = options?.ipAddress ?? null;
        this.port = options?.port ?? null;
        this.encryptionKey = options?.encryptionKey ?? null;
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
        return "GS2::Realtime::Room";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.ownerId != null) {
            properties["OwnerId"] = this.ownerId;
        }
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.ipAddress != null) {
            properties["IpAddress"] = this.ipAddress;
        }
        if (this.port != null) {
            properties["Port"] = this.port;
        }
        if (this.encryptionKey != null) {
            properties["EncryptionKey"] = this.encryptionKey;
        }

        return properties;
    }

    public ref(
    ): RoomRef {
        return new RoomRef(
            this.namespaceName,
            this.name!,
        );
    }

    public getAttrRoomId(
    ): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.RoomId",
        );
    }
}
