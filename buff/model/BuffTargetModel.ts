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
 *
 * deny overwrite
 */
import BuffTargetGrn from "./BuffTargetGrn";
import { BuffTargetModelOptions } from "./options/BuffTargetModelOptions";

export default class BuffTargetModel {
    private readonly targetModelName: string;
    private readonly targetFieldName: string;
    private readonly conditionGrns: BuffTargetGrn[];
    private readonly rate: number;

    public constructor(
        targetModelName: string,
        targetFieldName: string,
        conditionGrns: BuffTargetGrn[],
        rate: number,
        options: BuffTargetModelOptions|null = null,
    ) {
        this.targetModelName = targetModelName;
        this.targetFieldName = targetFieldName;
        this.conditionGrns = conditionGrns;
        this.rate = rate;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.targetModelName != null) {
            properties["targetModelName"] = this.targetModelName;
        }
        if (this.targetFieldName != null) {
            properties["targetFieldName"] = this.targetFieldName;
        }
        if (this.conditionGrns != null) {
            properties["conditionGrns"] = this.conditionGrns.map(v => v.properties(
                ));
        }
        if (this.rate != null) {
            properties["rate"] = this.rate;
        }

        return properties;
    }
}
