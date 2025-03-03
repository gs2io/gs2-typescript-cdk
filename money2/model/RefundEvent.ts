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
import { RefundEventOptions } from "./options/RefundEventOptions";
import { RefundEventPlatform } from "./enums/RefundEventPlatform";

export default class RefundEvent {
    private readonly contentName: string;
    private readonly platform: RefundEventPlatform;
    private readonly appleAppStoreRefundEvent: AppleAppStoreVerifyReceiptEvent|null = null;
    private readonly googlePlayRefundEvent: GooglePlayVerifyReceiptEvent|null = null;

    public constructor(
        contentName: string,
        platform: RefundEventPlatform,
        options: RefundEventOptions|null = null,
    ) {
        this.contentName = contentName;
        this.platform = platform;
        this.appleAppStoreRefundEvent = options?.appleAppStoreRefundEvent ?? null;
        this.googlePlayRefundEvent = options?.googlePlayRefundEvent ?? null;
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
        if (this.appleAppStoreRefundEvent != null) {
            properties["appleAppStoreRefundEvent"] = this.appleAppStoreRefundEvent?.properties(
            );
        }
        if (this.googlePlayRefundEvent != null) {
            properties["googlePlayRefundEvent"] = this.googlePlayRefundEvent?.properties(
            );
        }

        return properties;
    }
}
