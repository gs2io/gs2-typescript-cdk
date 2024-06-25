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
import AppleAppStoreSetting from "./AppleAppStoreSetting";
import GooglePlaySetting from "./GooglePlaySetting";
import FakeSetting from "./FakeSetting";
import { PlatformSettingOptions } from "./options/PlatformSettingOptions";

export default class PlatformSetting {
    private readonly appleAppStore: AppleAppStoreSetting|null = null;
    private readonly googlePlay: GooglePlaySetting|null = null;
    private readonly fake: FakeSetting|null = null;

    public constructor(
        options: PlatformSettingOptions|null = null,
    ) {
        this.appleAppStore = options?.appleAppStore ?? null;
        this.googlePlay = options?.googlePlay ?? null;
        this.fake = options?.fake ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.appleAppStore != null) {
            properties["appleAppStore"] = this.appleAppStore?.properties(
            );
        }
        if (this.googlePlay != null) {
            properties["googlePlay"] = this.googlePlay?.properties(
            );
        }
        if (this.fake != null) {
            properties["fake"] = this.fake?.properties(
            );
        }

        return properties;
    }
}
