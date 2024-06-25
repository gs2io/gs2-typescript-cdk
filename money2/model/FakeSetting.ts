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
import { FakeSettingOptions } from "./options/FakeSettingOptions";
import { FakeSettingAcceptFakeReceipt } from "./enum/FakeSettingAcceptFakeReceipt";

export default class FakeSetting {
    private readonly acceptFakeReceipt: FakeSettingAcceptFakeReceipt;

    public constructor(
        acceptFakeReceipt: FakeSettingAcceptFakeReceipt,
        options: FakeSettingOptions|null = null,
    ) {
        this.acceptFakeReceipt = acceptFakeReceipt;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.acceptFakeReceipt != null) {
            properties["acceptFakeReceipt"] = this.acceptFakeReceipt;
        }

        return properties;
    }
}
