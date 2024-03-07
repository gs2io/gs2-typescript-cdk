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

import {CdkResource, Stack} from "../../core/model";
import {GetAttr} from "../../core/func";

import MatchSessionRef from "../ref/MatchSessionRef";

import { MatchSessionOptions } from "./options/MatchSessionOptions";

export default class MatchSession extends CdkResource {
    private readonly stack: Stack;
    private readonly namespaceName: string;
    private readonly sessionName: string|null = null;
    private readonly ttlSeconds: number|null = null;

    public constructor(
        stack: Stack,
        namespaceName: string,
        options: MatchSessionOptions|null = null,
    ) {
        super(
            "SeasonRating_MatchSession_" + name
        );

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.sessionName = options?.sessionName ?? null;
        this.ttlSeconds = options?.ttlSeconds ?? null;
        stack.addResource(
            this,
        );
    }


    public alternateKeys(
    ) {
        return "name";
    }

    public resourceType(
    ): string {
        return "GS2::SeasonRating::MatchSession";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.sessionName != null) {
            properties["SessionName"] = this.sessionName;
        }
        if (this.ttlSeconds != null) {
            properties["TtlSeconds"] = this.ttlSeconds;
        }

        return properties;
    }

    public ref(
        name: string,
    ): MatchSessionRef {
        return new MatchSessionRef(
            this.namespaceName,
            name!,
        );
    }

    public getAttrSessionId(
    ): GetAttr {
        return new GetAttr(
            this,
            "Item.SessionId",
            null,
        );
    }
}
