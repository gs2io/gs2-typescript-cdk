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
import ITask from "./ITask";
import IVariable from "./IVariable";
import StringType from "./StringType";
import Event from "./Event";

export default class ErrorTask implements ITask {
    private name: string;
    private arguments: IVariable[];

    constructor(name: string) {
        this.name = name;
        this.arguments = [new StringType("reason")];
    }

    getName(): string {
        return this.name;
    }

    transition(event: Event): this {
        return this;
    }

    getEvents(): Event[] {
        return [];
    }

    gsl(): string {
        return `ErrorTask ${this.name}(string reason);\n\n`;
    }

    mermaid(): string {
        return "";
    }
}
