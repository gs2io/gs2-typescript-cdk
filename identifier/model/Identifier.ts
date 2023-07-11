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

import IdentifierRef from "../ref/IdentifierRef";

import { IdentifierOptions } from "./options/IdentifierOptions";

export default class Identifier extends CdkResource {
    private readonly stack: Stack;
    private readonly userName: string;

    public constructor(
        stack: Stack,
        userName: string,
        options: IdentifierOptions|null = null,
    ) {
        super(
            "Identifier_Identifier_" + userName
        );

        this.stack = stack;
        this.userName = userName;
        stack.addResource(
            this,
        );
    }


    public alternateKeys(
    ) {
        return "userName";
    }

    public resourceType(
    ): string {
        return "GS2::Identifier::Identifier";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.userName != null) {
            properties["UserName"] = this.userName;
        }

        return properties;
    }

    public ref(
        clientId: string,
    ): IdentifierRef {
        return new IdentifierRef(
            this.userName,
            clientId!,
        );
    }

    public getAttrClientId(
    ): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.ClientId",
        );
    }


    public getAttrClientSecret(
    ): GetAttr {
        return new GetAttr(
            null,
            null,
            "ClientSecret",
        );
    }
}
