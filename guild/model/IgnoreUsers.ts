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
import IgnoreUser from "./IgnoreUser";
import { IgnoreUsersOptions } from "./options/IgnoreUsersOptions";

export default class IgnoreUsers {
    private readonly guildModelName: string;
    private readonly users: IgnoreUser[]|null = null;
    private readonly revision: number|null = null;

    public constructor(
        guildModelName: string,
        options: IgnoreUsersOptions|null = null,
    ) {
        this.guildModelName = guildModelName;
        this.users = options?.users ?? null;
        this.revision = options?.revision ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.guildModelName != null) {
            properties["guildModelName"] = this.guildModelName;
        }
        if (this.users != null) {
            properties["users"] = this.users.map(v => v.properties(
                ));
        }

        return properties;
    }
}
