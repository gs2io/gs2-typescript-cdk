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
 */

import {CdkResource, Stack} from "../../core/model";
import GlobalMessage from "./GlobalMessage";

export default class CurrentMasterData extends CdkResource {

    private version: string = "2020-03-12";
    private namespaceName: string;
        private readonly globalMessages: GlobalMessage[];

    public constructor(
            stack: Stack,
            namespaceName: string,
            globalMessages: GlobalMessage[],
    ) {
        super("Inbox_CurrentMessageMaster_" + namespaceName);

        this.namespaceName = namespaceName;
        this.globalMessages = globalMessages;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Inbox::CurrentMessageMaster";
    }

    public properties(): {[name: string]: any} {
        return {
            "NamespaceName": this.namespaceName,
            "Settings": {
                "version": this.version,
                "globalMessages": this.globalMessages.map(v => v.properties()),
            },
        };
    }
}