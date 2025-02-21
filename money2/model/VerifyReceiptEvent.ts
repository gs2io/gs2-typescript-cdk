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
import AppleAppStoreVerifyReceiptEvent from "./AppleAppStoreVerifyReceiptEvent";
import GooglePlayVerifyReceiptEvent from "./GooglePlayVerifyReceiptEvent";
import { VerifyReceiptEventOptions } from "./options/VerifyReceiptEventOptions";
import { VerifyReceiptEventPlatform } from "./enums/VerifyReceiptEventPlatform";

export default class VerifyReceiptEvent {
    private readonly contentName: string;
    private readonly platform: VerifyReceiptEventPlatform;
    private readonly appleAppStoreVerifyReceiptEvent: AppleAppStoreVerifyReceiptEvent|null = null;
    private readonly googlePlayVerifyReceiptEvent: GooglePlayVerifyReceiptEvent|null = null;

    public constructor(
        contentName: string,
        platform: VerifyReceiptEventPlatform,
        options: VerifyReceiptEventOptions|null = null,
    ) {
        this.contentName = contentName;
        this.platform = platform;
        this.appleAppStoreVerifyReceiptEvent = options?.appleAppStoreVerifyReceiptEvent ?? null;
        this.googlePlayVerifyReceiptEvent = options?.googlePlayVerifyReceiptEvent ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.contentName != null) {
            properties["contentName"] = this.contentName;
        }
        if (this.platform != null) {
            properties["platform"] = this.platform;
        }
        if (this.appleAppStoreVerifyReceiptEvent != null) {
            properties["appleAppStoreVerifyReceiptEvent"] = this.appleAppStoreVerifyReceiptEvent?.properties(
            );
        }
        if (this.googlePlayVerifyReceiptEvent != null) {
            properties["googlePlayVerifyReceiptEvent"] = this.googlePlayVerifyReceiptEvent?.properties(
            );
        }

        return properties;
    }
}
