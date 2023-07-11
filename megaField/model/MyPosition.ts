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
import Position from "./Position";
import Vector from "./Vector";
import { MyPositionOptions } from "./options/MyPositionOptions";

export default class MyPosition {
    private readonly position: Position;
    private readonly vector: Vector;
    private readonly r: number;

    public constructor(
        position: Position,
        vector: Vector,
        r: number,
        options: MyPositionOptions|null = null,
    ) {
        this.position = position;
        this.vector = vector;
        this.r = r;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.position != null) {
            properties["position"] = this.position?.properties(
            );
        }
        if (this.vector != null) {
            properties["vector"] = this.vector?.properties(
            );
        }
        if (this.r != null) {
            properties["r"] = this.r;
        }

        return properties;
    }
}
