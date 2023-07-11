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
import { PlayerOptions } from "./options/PlayerOptions";

export default class Player {
    private readonly userId: string;
    private readonly roleName: string;
    private readonly attributes: Attribute[]|null = null;
    private readonly denyUserIds: string[]|null = null;

    public constructor(
        userId: string,
        roleName: string,
        options: PlayerOptions|null = null,
    ) {
        this.userId = userId;
        this.roleName = roleName;
        this.attributes = options?.attributes ?? null;
        this.denyUserIds = options?.denyUserIds ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.attributes != null) {
            properties["attributes"] = this.attributes.map(v => v.properties(
                ));
        }
        if (this.roleName != null) {
            properties["roleName"] = this.roleName;
        }
        if (this.denyUserIds != null) {
            properties["denyUserIds"] = this.denyUserIds;
        }

        return properties;
    }
}
