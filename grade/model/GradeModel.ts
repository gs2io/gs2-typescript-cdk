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
import DefaultGradeModel from "./DefaultGradeModel";
import GradeEntryModel from "./GradeEntryModel";
import AcquireActionRate from "./AcquireActionRate";
import { GradeModelOptions } from "./options/GradeModelOptions";

export default class GradeModel {
    private readonly name: string;
    private readonly experienceModelId: string;
    private readonly gradeEntries: GradeEntryModel[];
    private readonly metadata: string|null = null;
    private readonly defaultGrades: DefaultGradeModel[]|null = null;
    private readonly acquireActionRates: AcquireActionRate[]|null = null;

    public constructor(
        name: string,
        experienceModelId: string,
        gradeEntries: GradeEntryModel[],
        options: GradeModelOptions|null = null,
    ) {
        this.name = name;
        this.experienceModelId = experienceModelId;
        this.gradeEntries = gradeEntries;
        this.metadata = options?.metadata ?? null;
        this.defaultGrades = options?.defaultGrades ?? null;
        this.acquireActionRates = options?.acquireActionRates ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.defaultGrades != null) {
            properties["defaultGrades"] = this.defaultGrades.map(v => v.properties(
                ));
        }
        if (this.experienceModelId != null) {
            properties["experienceModelId"] = this.experienceModelId;
        }
        if (this.gradeEntries != null) {
            properties["gradeEntries"] = this.gradeEntries.map(v => v.properties(
                ));
        }
        if (this.acquireActionRates != null) {
            properties["acquireActionRates"] = this.acquireActionRates.map(v => v.properties(
                ));
        }

        return properties;
    }
}
