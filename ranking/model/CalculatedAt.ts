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
import { CalculatedAtOptions } from "./options/CalculatedAtOptions";

export default class CalculatedAt {
    private readonly categoryName: string;
    private readonly calculatedAt: number;

    public constructor(
        categoryName: string,
        calculatedAt: number,
        options: CalculatedAtOptions|null = null,
    ) {
        this.categoryName = categoryName;
        this.calculatedAt = calculatedAt;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.categoryName != null) {
            properties["categoryName"] = this.categoryName;
        }
        if (this.calculatedAt != null) {
            properties["calculatedAt"] = this.calculatedAt;
        }

        return properties;
    }
}
