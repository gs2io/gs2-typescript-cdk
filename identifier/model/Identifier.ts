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

import IdentifierRef from "../ref/IdentifierRef";

export default class Identifier extends core.CdkResource {

    private stack: Stack;
    private readonly userName: string;

    public constructor(
        stack: Stack,
        userName: string,
    ) {
        super("Identifier_Identifier_");

        this.stack = stack;
        this.userName = userName;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Identifier::Identifier";
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.userName != null) {
            properties["UserName"] = this.userName;
        }
        return properties;
    }


    public getAttrClientId(): GetAttr {
        return new core.GetAttr(
            null,
            null,
            "Item.ClientId"
        );
    }

    public getAttrClientSecret(): GetAttr {
        return new core.GetAttr(
            null,
            null,
            "ClientSecret"
        );
    }
}
