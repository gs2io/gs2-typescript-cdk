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

import KeyRef from "../ref/KeyRef";

import { KeyOptions } from "./options/KeyOptions";

export default class Key extends CdkResource {
    private readonly stack: Stack;
    private readonly namespaceName: string;
    private readonly name: string;
    private readonly description: string|null = null;

    public constructor(
        stack: Stack,
        namespaceName: string,
        name: string,
        options: KeyOptions|null = null,
    ) {
        super(
            "Key_Key_" + name
        );

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.description = options?.description ?? null;
        stack.addResource(
            this,
        );
    }


    public alternateKeys(
    ) {
        return "name";
    }

    public resourceType(
    ): string {
        return "GS2::Key::Key";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }

        return properties;
    }

    public ref(
    ): KeyRef {
        return new KeyRef(
            this.namespaceName,
            this.name!,
        );
    }

    public getAttrKeyId(
    ): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.KeyId",
        );
    }
}
