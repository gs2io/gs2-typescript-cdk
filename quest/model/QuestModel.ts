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
import { AcquireAction } from "../../core/model";
import Contents from "./Contents";
import { ConsumeAction } from "../../core/model";
import { QuestModelOptions } from "./options/QuestModelOptions";

export default class QuestModel {
    private readonly name: string;
    private readonly contents: Contents[];
    private readonly metadata: string|null = null;
    private readonly challengePeriodEventId: string|null = null;
    private readonly firstCompleteAcquireActions: AcquireAction[]|null = null;
    private readonly consumeActions: ConsumeAction[]|null = null;
    private readonly failedAcquireActions: AcquireAction[]|null = null;
    private readonly premiseQuestNames: string[]|null = null;

    public constructor(
        name: string,
        contents: Contents[],
        options: QuestModelOptions|null = null,
    ) {
        this.name = name;
        this.contents = contents;
        this.metadata = options?.metadata ?? null;
        this.challengePeriodEventId = options?.challengePeriodEventId ?? null;
        this.firstCompleteAcquireActions = options?.firstCompleteAcquireActions ?? null;
        this.consumeActions = options?.consumeActions ?? null;
        this.failedAcquireActions = options?.failedAcquireActions ?? null;
        this.premiseQuestNames = options?.premiseQuestNames ?? null;
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
        if (this.contents != null) {
            properties["contents"] = this.contents.map(v => v.properties(
                ));
        }
        if (this.challengePeriodEventId != null) {
            properties["challengePeriodEventId"] = this.challengePeriodEventId;
        }
        if (this.firstCompleteAcquireActions != null) {
            properties["firstCompleteAcquireActions"] = this.firstCompleteAcquireActions.map(v => v.properties(
                ));
        }
        if (this.consumeActions != null) {
            properties["consumeActions"] = this.consumeActions.map(v => v.properties(
                ));
        }
        if (this.failedAcquireActions != null) {
            properties["failedAcquireActions"] = this.failedAcquireActions.map(v => v.properties(
                ));
        }
        if (this.premiseQuestNames != null) {
            properties["premiseQuestNames"] = this.premiseQuestNames;
        }

        return properties;
    }
}
