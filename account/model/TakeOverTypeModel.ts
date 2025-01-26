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
import ScopeValue from "./ScopeValue";
import OpenIdConnectSetting from "./OpenIdConnectSetting";
import { TakeOverTypeModelOptions } from "./options/TakeOverTypeModelOptions";

export default class TakeOverTypeModel {
    private readonly type: number;
    private readonly openIdConnectSetting: OpenIdConnectSetting;
    private readonly metadata: string|null = null;

    public constructor(
        type: number,
        openIdConnectSetting: OpenIdConnectSetting,
        options: TakeOverTypeModelOptions|null = null,
    ) {
        this.type = type;
        this.openIdConnectSetting = openIdConnectSetting;
        this.metadata = options?.metadata ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.openIdConnectSetting != null) {
            properties["openIdConnectSetting"] = this.openIdConnectSetting?.properties(
            );
        }

        return properties;
    }
}
