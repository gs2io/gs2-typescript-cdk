"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class Statement {
    constructor(effect, actions) {
        this.effect = effect;
        this.actions = actions;
    }
    static allow(actions) {
        return new Statement("Allow", actions);
    }
    static allowAll() {
        return new Statement("Allow", ["*"]);
    }
    static deny(actions) {
        return new Statement("Deny", actions);
    }
    static denyAll() {
        return new Statement("Deny", ["*"]);
    }
    action(action) {
        this.actions.push(action);
        return this;
    }
    properties() {
        return {
            "Effect": this.effect,
            "Actions": this.actions,
            "Resources": ["*"],
        };
    }
}
exports.default = Statement;
//# sourceMappingURL=Statement.js.map