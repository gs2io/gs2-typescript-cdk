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

import {CdkResource, Stack} from "../../core/model";
import {GetAttr} from "../../core/func";

import PasswordRef from "../ref/PasswordRef";

export default class Password extends CdkResource {

    private stack: Stack;
    private readonly userName: string;
    private readonly password: string;

    public constructor(
        stack: Stack,
        userName: string,
        password: string,
    ) {
        super("Identifier_Password_" + name);

        this.stack = stack;
        this.userName = userName;
        this.password = password;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Identifier::Password";
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.userName != null) {
            properties["UserName"] = this.userName;
        }
        if (this.password != null) {
            properties["Password"] = this.password;
        }
        return properties;
    }

    public ref(
        userName: string,
    ): PasswordRef {
        return new PasswordRef(
            userName,
        );
    }

    public getAttrUserId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.UserId"
        );
    }
}
