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
import AppleAppStoreSubscriptionContent from "./AppleAppStoreSubscriptionContent";
import GooglePlaySubscriptionContent from "./GooglePlaySubscriptionContent";
import { StoreSubscriptionContentModelOptions } from "./options/StoreSubscriptionContentModelOptions";

export default class StoreSubscriptionContentModel {
    private readonly name: string;
    private readonly scheduleNamespaceId: string;
    private readonly triggerName: string;
    private readonly reallocateSpanDays: number;
    private readonly metadata: string|null = null;
    private readonly appleAppStore: AppleAppStoreSubscriptionContent|null = null;
    private readonly googlePlay: GooglePlaySubscriptionContent|null = null;

    public constructor(
        name: string,
        scheduleNamespaceId: string,
        triggerName: string,
        reallocateSpanDays: number,
        options: StoreSubscriptionContentModelOptions|null = null,
    ) {
        this.name = name;
        this.scheduleNamespaceId = scheduleNamespaceId;
        this.triggerName = triggerName;
        this.reallocateSpanDays = reallocateSpanDays;
        this.metadata = options?.metadata ?? null;
        this.appleAppStore = options?.appleAppStore ?? null;
        this.googlePlay = options?.googlePlay ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.scheduleNamespaceId != null) {
            properties["scheduleNamespaceId"] = this.scheduleNamespaceId;
        }
        if (this.triggerName != null) {
            properties["triggerName"] = this.triggerName;
        }
        if (this.reallocateSpanDays != null) {
            properties["reallocateSpanDays"] = this.reallocateSpanDays;
        }
        if (this.appleAppStore != null) {
            properties["appleAppStore"] = this.appleAppStore?.properties(
            );
        }
        if (this.googlePlay != null) {
            properties["googlePlay"] = this.googlePlay?.properties(
            );
        }

        return properties;
    }
}
