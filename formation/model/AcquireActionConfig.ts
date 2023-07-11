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
import { Config } from "../../core/model";
import { AcquireActionConfigOptions } from "./options/AcquireActionConfigOptions";

export default class AcquireActionConfig {
    private readonly name: string;
    private readonly config: Config[]|null = null;

    public constructor(
        name: string,
        options: AcquireActionConfigOptions|null = null,
    ) {
        this.name = name;
        this.config = options?.config ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.config != null) {
            properties["config"] = this.config.map(v => v.properties(
                ));
        }

        return properties;
    }
}
