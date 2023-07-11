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
import Attribute from "./Attribute";
import Player from "./Player";
import { CapacityOfRoleOptions } from "./options/CapacityOfRoleOptions";

export default class CapacityOfRole {
    private readonly roleName: string;
    private readonly capacity: number;
    private readonly roleAliases: string[]|null = null;
    private readonly participants: Player[]|null = null;

    public constructor(
        roleName: string,
        capacity: number,
        options: CapacityOfRoleOptions|null = null,
    ) {
        this.roleName = roleName;
        this.capacity = capacity;
        this.roleAliases = options?.roleAliases ?? null;
        this.participants = options?.participants ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.roleName != null) {
            properties["roleName"] = this.roleName;
        }
        if (this.roleAliases != null) {
            properties["roleAliases"] = this.roleAliases;
        }
        if (this.capacity != null) {
            properties["capacity"] = this.capacity;
        }
        if (this.participants != null) {
            properties["participants"] = this.participants.map(v => v.properties(
                ));
        }

        return properties;
    }
}
