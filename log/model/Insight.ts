/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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

import core from "../../core";
import {GetAttr} from "../../core/func";
import {Stack} from "../../core/model";

export const InsightStatus = {
    ALLOCATING: "ALLOCATING",
    LAUNCHING: "LAUNCHING",
    ACTIVE: "ACTIVE",
    DELETED: "DELETED",
} as const;
export type InsightStatus = typeof InsightStatus[keyof typeof InsightStatus];

import InsightRef from "../ref/InsightRef";

export default class Insight extends core.CdkResource {

    private stack: Stack;
	private readonly namespaceName: string;

    public constructor(
            stack: Stack,
            namespaceName: string,
    ) {
        super("Log_Insight_" + name);

        this.stack = stack;
        this.namespaceName = namespaceName;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Log::Insight";
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): InsightRef {
        return new InsightRef(
            namespaceName,
            '',
        );
    }

    public getAttrInsightId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.InsightId"
        );
    }
}
