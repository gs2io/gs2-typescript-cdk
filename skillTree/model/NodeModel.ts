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
import { ConsumeAction } from "../../core/model";
import { AcquireAction } from "../../core/model";
import { NodeModelOptions } from "./options/NodeModelOptions";

export default class NodeModel {
    private readonly name: string;
    private readonly releaseConsumeActions: ConsumeAction[];
    private readonly restrainReturnRate: number;
    private readonly metadata: string|null = null;
    private readonly returnAcquireActions: AcquireAction[]|null = null;
    private readonly premiseNodeNames: string[]|null = null;

    public constructor(
        name: string,
        releaseConsumeActions: ConsumeAction[],
        restrainReturnRate: number,
        options: NodeModelOptions|null = null,
    ) {
        this.name = name;
        this.releaseConsumeActions = releaseConsumeActions;
        this.restrainReturnRate = restrainReturnRate;
        this.metadata = options?.metadata ?? null;
        this.returnAcquireActions = options?.returnAcquireActions ?? null;
        this.premiseNodeNames = options?.premiseNodeNames ?? null;
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
        if (this.releaseConsumeActions != null) {
            properties["releaseConsumeActions"] = this.releaseConsumeActions.map(v => v.properties(
                ));
        }
        if (this.restrainReturnRate != null) {
            properties["restrainReturnRate"] = this.restrainReturnRate;
        }
        if (this.premiseNodeNames != null) {
            properties["premiseNodeNames"] = this.premiseNodeNames;
        }

        return properties;
    }
}
