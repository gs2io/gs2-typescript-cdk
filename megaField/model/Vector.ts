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
import { VectorOptions } from "./options/VectorOptions";

export default class Vector {
    private readonly x: number;
    private readonly y: number;
    private readonly z: number;

    public constructor(
        x: number,
        y: number,
        z: number,
        options: VectorOptions|null = null,
    ) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.x != null) {
            properties["x"] = this.x;
        }
        if (this.y != null) {
            properties["y"] = this.y;
        }
        if (this.z != null) {
            properties["z"] = this.z;
        }

        return properties;
    }
}
