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
import { ScopeOptions } from "./options/ScopeOptions";

export default class Scope {
    private readonly layerName: string;
    private readonly r: number;
    private readonly limit: number;

    public constructor(
        layerName: string,
        r: number,
        limit: number,
        options: ScopeOptions|null = null,
    ) {
        this.layerName = layerName;
        this.r = r;
        this.limit = limit;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.layerName != null) {
            properties["layerName"] = this.layerName;
        }
        if (this.r != null) {
            properties["r"] = this.r;
        }
        if (this.limit != null) {
            properties["limit"] = this.limit;
        }

        return properties;
    }
}
