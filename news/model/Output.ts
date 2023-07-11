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
import { OutputOptions } from "./options/OutputOptions";

export default class Output {
    private readonly name: string;
    private readonly text: string;
    private readonly createdAt: number;

    public constructor(
        name: string,
        text: string,
        createdAt: number,
        options: OutputOptions|null = null,
    ) {
        this.name = name;
        this.text = text;
        this.createdAt = createdAt;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.text != null) {
            properties["text"] = this.text;
        }
        if (this.createdAt != null) {
            properties["createdAt"] = this.createdAt;
        }

        return properties;
    }
}
