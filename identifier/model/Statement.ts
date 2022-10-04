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

export default class Statement {

    private effect: string;
    private actions: string[];

    public constructor(
        effect: string,
        actions: string[]
    ) {
        this.effect = effect;
        this.actions = actions;
    }

    public static allow(
        actions: string[]
    ): Statement {
        return  new Statement(
            "Allow",
            actions,
        );
    }

    public static allowAll(): Statement {
        return  new Statement(
            "Allow",
            ["*"],
        );
    }

    public static deny(
        actions: string[],
    ): Statement {
        return  new Statement(
            "Deny",
            actions,
        );
    }

    public static denyAll(): Statement {
        return  new Statement(
            "Deny",
            ["*"],
        );
    }

    public action(action: string): Statement {
        this.actions.push(action);
        return this;
    }

    public properties(): {[name: string]: any} {
        return {
            "Effect": this.effect,
            "Actions": this.actions,
            "Resources": ["*"],
        };
    }
}
