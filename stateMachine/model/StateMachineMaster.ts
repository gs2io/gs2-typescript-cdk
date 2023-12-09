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

import {CdkResource, Stack} from "../../core/model";
import {GetAttr} from "../../core/func";

import StateMachineMasterRef from "../ref/StateMachineMasterRef";

import { StateMachineMasterOptions } from "./options/StateMachineMasterOptions";

export default class StateMachineMaster extends CdkResource {
    private readonly stack: Stack;
    private readonly namespaceName: string;
    private readonly mainStateMachineName: string;
    private readonly payload: string;

    public constructor(
        stack: Stack,
        namespaceName: string,
        mainStateMachineName: string,
        payload: string,
        options: StateMachineMasterOptions|null = null,
    ) {
        super(
            "StateMachine_StateMachineMaster_" + namespaceName
        );

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.mainStateMachineName = mainStateMachineName;
        this.payload = payload;
        stack.addResource(
            this,
        );
    }


    public alternateKeys(
    ) {
        return "version";
    }

    public resourceType(
    ): string {
        return "GS2::StateMachine::StateMachineMaster";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.mainStateMachineName != null) {
            properties["MainStateMachineName"] = this.mainStateMachineName;
        }
        if (this.payload != null) {
            properties["Payload"] = this.payload;
        }

        return properties;
    }

    public ref(
        version: number,
    ): StateMachineMasterRef {
        return new StateMachineMasterRef(
            this.namespaceName,
            version!,
        );
    }

    public getAttrStateMachineId(
    ): GetAttr {
        return new GetAttr(
            this,
            "Item.StateMachineId",
            null,
        );
    }
}
