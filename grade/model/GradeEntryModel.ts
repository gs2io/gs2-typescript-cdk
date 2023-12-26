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
import { GradeEntryModelOptions } from "./options/GradeEntryModelOptions";

export default class GradeEntryModel {
    private readonly rankCapValue: number;
    private readonly gradeUpPropertyIdRegex: string;
    private readonly metadata: string|null = null;
    private readonly propertyIdRegex: string|null = null;

    public constructor(
        rankCapValue: number,
        gradeUpPropertyIdRegex: string,
        options: GradeEntryModelOptions|null = null,
    ) {
        this.rankCapValue = rankCapValue;
        this.gradeUpPropertyIdRegex = gradeUpPropertyIdRegex;
        this.metadata = options?.metadata ?? null;
        this.propertyIdRegex = options?.propertyIdRegex ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.rankCapValue != null) {
            properties["rankCapValue"] = this.rankCapValue;
        }
        if (this.propertyIdRegex != null) {
            properties["propertyIdRegex"] = this.propertyIdRegex;
        }
        if (this.gradeUpPropertyIdRegex != null) {
            properties["gradeUpPropertyIdRegex"] = this.gradeUpPropertyIdRegex;
        }

        return properties;
    }
}
