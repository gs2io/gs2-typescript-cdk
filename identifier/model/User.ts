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
import {Stack} from "../../core/model";
import {GetAttr} from "../../core/func";

import UserRef from "../ref/UserRef";

import Identifier from "./Identifier";
import AttachSecurityPolicy from "./AttachSecurityPolicy";
import SecurityPolicy from "./SecurityPolicy";

export default class User extends core.CdkResource {

    private stack: Stack;
    private readonly name: string;
    private readonly description: string|null = null;

    public constructor(
        stack: Stack,
        name: string,
    ) {
        super("Identifier_User_" + name);

        this.stack = stack;
        this.name = name;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Identifier::User";
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        return properties;
    }

    public ref(
    ): UserRef {
        return new UserRef(
            this.name,
        );
    }

    public attach(
        securityPolicy: SecurityPolicy,
    ): User {
        new AttachSecurityPolicy(
            this.stack,
            this.name,
            securityPolicy.getAttrSecurityPolicyId().str()
        ).addDependsOn(
            this
        ).addDependsOn(
            securityPolicy
        );
        return this;
    }

    public identifier(): Identifier {
        let identifier = new Identifier(
            this.stack,
            this.name
        );
        identifier.addDependsOn(
            this
        );
        return identifier;
    }

    public getAttrUserId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.UserId"
        );
    }
}
