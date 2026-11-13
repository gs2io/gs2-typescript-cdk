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
import IssuedCodeSetting from "./IssuedCodeSetting";
import { TakeOverTypeModelOptions } from "./options/TakeOverTypeModelOptions";
import { TakeOverTypeModelTakeOverMethodIsOpenIdConnectOptions } from "./options/TakeOverTypeModelTakeOverMethodIsOpenIdConnectOptions";
import { TakeOverTypeModelTakeOverMethodIsIssuedCodeOptions } from "./options/TakeOverTypeModelTakeOverMethodIsIssuedCodeOptions";
import { TakeOverTypeModelTakeOverMethod } from "./enums/TakeOverTypeModelTakeOverMethod";

export default class TakeOverTypeModel {
    private readonly type: number;
    private readonly takeOverMethod: TakeOverTypeModelTakeOverMethod;
    private readonly metadata: string|null = null;
    private readonly openIdConnectSetting: OpenIdConnectSetting|null = null;
    private readonly issuedCodeSetting: IssuedCodeSetting|null = null;

    public constructor(
        type: number,
        takeOverMethod: TakeOverTypeModelTakeOverMethod,
        options: TakeOverTypeModelOptions|null = null,
    ) {
        this.type = type;
        this.takeOverMethod = takeOverMethod;
        this.metadata = options?.metadata ?? null;
        this.openIdConnectSetting = options?.openIdConnectSetting ?? null;
        this.issuedCodeSetting = options?.issuedCodeSetting ?? null;
    }

    public static takeOverMethodIsOpenIdConnect(
        type: number,
        openIdConnectSetting: OpenIdConnectSetting,
        options: TakeOverTypeModelTakeOverMethodIsOpenIdConnectOptions|null = null,
    ): TakeOverTypeModel {
        return new TakeOverTypeModel(
            type,
            TakeOverTypeModelTakeOverMethod.OPEN_ID_CONNECT,
            {
                openIdConnectSetting: openIdConnectSetting,
                metadata: options?.metadata,
            },
        );
    }

    public static takeOverMethodIsIssuedCode(
        type: number,
        issuedCodeSetting: IssuedCodeSetting,
        options: TakeOverTypeModelTakeOverMethodIsIssuedCodeOptions|null = null,
    ): TakeOverTypeModel {
        return new TakeOverTypeModel(
            type,
            TakeOverTypeModelTakeOverMethod.ISSUED_CODE,
            {
                issuedCodeSetting: issuedCodeSetting,
                metadata: options?.metadata,
            },
        );
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
        if (this.takeOverMethod != null) {
            properties["takeOverMethod"] = this.takeOverMethod;
        }
        if (this.openIdConnectSetting != null) {
            properties["openIdConnectSetting"] = this.openIdConnectSetting?.properties(
            );
        }
        if (this.issuedCodeSetting != null) {
            properties["issuedCodeSetting"] = this.issuedCodeSetting?.properties(
            );
        }

        return properties;
    }
}
