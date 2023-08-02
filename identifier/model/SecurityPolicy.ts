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
import Policy from "./Policy";

import SecurityPolicyRef from "../ref/SecurityPolicyRef";

import { SecurityPolicyOptions } from "./options/SecurityPolicyOptions";

export default class SecurityPolicy extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly policy: Policy;
    private readonly description: string|null = null;

    public constructor(
        stack: Stack,
        name: string,
        policy: Policy,
        options: SecurityPolicyOptions|null = null,
    ) {
        super(
            "Identifier_SecurityPolicy_" + name
        );

        this.stack = stack;
        this.name = name;
        this.policy = policy;
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
        return "GS2::Identifier::SecurityPolicy";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.policy != null) {
            properties["Policy"] = this.policy?.properties(
            );
        }

        return properties;
    }

    public ref(
    ): SecurityPolicyRef {
        return new SecurityPolicyRef(
            this.name!,
        );
    }
    public static applicationAccessGrn(
    ): string {
        return "grn:gs2::system:identifier:securityPolicy:ApplicationAccess";
    }

    public getAttrSecurityPolicyId(
    ): GetAttr {
        return new GetAttr(
            this,
            "Item.SecurityPolicyId",
            null,
        );
    }
}
