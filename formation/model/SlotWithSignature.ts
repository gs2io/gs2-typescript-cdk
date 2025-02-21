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
import { SlotWithSignatureOptions } from "./options/SlotWithSignatureOptions";
import { SlotWithSignaturePropertyType } from "./enums/SlotWithSignaturePropertyType";

export default class SlotWithSignature {
    private readonly name: string;
    private readonly propertyType: SlotWithSignaturePropertyType;
    private readonly body: string|null = null;
    private readonly signature: string|null = null;
    private readonly metadata: string|null = null;

    public constructor(
        name: string,
        propertyType: SlotWithSignaturePropertyType,
        options: SlotWithSignatureOptions|null = null,
    ) {
        this.name = name;
        this.propertyType = propertyType;
        this.body = options?.body ?? null;
        this.signature = options?.signature ?? null;
        this.metadata = options?.metadata ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.propertyType != null) {
            properties["propertyType"] = this.propertyType;
        }
        if (this.body != null) {
            properties["body"] = this.body;
        }
        if (this.signature != null) {
            properties["signature"] = this.signature;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }

        return properties;
    }
}
