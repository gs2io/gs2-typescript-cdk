/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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

export default class TransactionSetting {

    distributorNamespaceId: string | null;
    queueNamespaceId: string | null;

    public constructor(
        distributorNamespaceId: string | null = null,
        queueNamespaceId: string | null = null,
    ) {
        this.distributorNamespaceId = distributorNamespaceId;
        this.queueNamespaceId = queueNamespaceId;
    }

    public properties(): { [name: string]: any } {
        let properties: {[name: string]: any} = {};

        properties["EnableAutoRun"] = true;
        if (this.distributorNamespaceId != null) {
            properties["DistributorNamespaceId"] = this.distributorNamespaceId;
        }
        if (this.queueNamespaceId != null) {
            properties["QueueNamespaceId"] = this.queueNamespaceId;
        }

        return properties;
    }
}