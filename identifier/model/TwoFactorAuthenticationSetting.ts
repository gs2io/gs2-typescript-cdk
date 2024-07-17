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
import { TwoFactorAuthenticationSettingOptions } from "./options/TwoFactorAuthenticationSettingOptions";
import { TwoFactorAuthenticationSettingStatus } from "./enum/TwoFactorAuthenticationSettingStatus";

export default class TwoFactorAuthenticationSetting {
    private readonly authenticationKey: string;
    private readonly status: TwoFactorAuthenticationSettingStatus;

    public constructor(
        authenticationKey: string,
        status: TwoFactorAuthenticationSettingStatus,
        options: TwoFactorAuthenticationSettingOptions|null = null,
    ) {
        this.authenticationKey = authenticationKey;
        this.status = status;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.authenticationKey != null) {
            properties["authenticationKey"] = this.authenticationKey;
        }
        if (this.status != null) {
            properties["status"] = this.status;
        }

        return properties;
    }
}
