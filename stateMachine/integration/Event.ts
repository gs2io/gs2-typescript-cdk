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
import IGslElement from "./IGslElement";
import IVariable from "./IVariable";

export default class Event implements IGslElement {
    name: string;
    arguments: IVariable[];
    fromTaskName: string;
    nextTaskName: string;

    constructor(name: string, args: IVariable[], nextTaskName: string) {
        this.name = name;
        this.arguments = args;
        this.nextTaskName = nextTaskName;
        this.fromTaskName = "";
    }

    gsl(): string {
        return `Transition ${this.fromTaskName} handling ${this.name} -> ${this.nextTaskName};\n`;
    }
}
