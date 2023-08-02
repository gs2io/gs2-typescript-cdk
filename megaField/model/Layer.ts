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
import { LayerOptions } from "./options/LayerOptions";

export default class Layer {
    private readonly areaModelName: string;
    private readonly layerModelName: string;
    private readonly numberOfMinEntries: number;
    private readonly numberOfMaxEntries: number;
    private readonly height: number;
    private readonly root: string|null = null;

    public constructor(
        areaModelName: string,
        layerModelName: string,
        numberOfMinEntries: number,
        numberOfMaxEntries: number,
        height: number,
        options: LayerOptions|null = null,
    ) {
        this.areaModelName = areaModelName;
        this.layerModelName = layerModelName;
        this.numberOfMinEntries = numberOfMinEntries;
        this.numberOfMaxEntries = numberOfMaxEntries;
        this.height = height;
        this.root = options?.root ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.areaModelName != null) {
            properties["areaModelName"] = this.areaModelName;
        }
        if (this.layerModelName != null) {
            properties["layerModelName"] = this.layerModelName;
        }
        if (this.root != null) {
            properties["root"] = this.root;
        }
        if (this.numberOfMinEntries != null) {
            properties["numberOfMinEntries"] = this.numberOfMinEntries;
        }
        if (this.numberOfMaxEntries != null) {
            properties["numberOfMaxEntries"] = this.numberOfMaxEntries;
        }
        if (this.height != null) {
            properties["height"] = this.height;
        }

        return properties;
    }
}
