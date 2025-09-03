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
import TransactionSetting from "../../../core/model/TransactionSetting";
import PlatformSetting from "../PlatformSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
import { NamespaceCurrencyUsagePriority } from "../enums/NamespaceCurrencyUsagePriority";

export interface NamespaceOptions {
    description?: string|null;
    transactionSetting?: TransactionSetting|null;
    depositBalanceScript?: ScriptSetting|null;
    withdrawBalanceScript?: ScriptSetting|null;
    verifyReceiptScript?: ScriptSetting|null;
    subscribeScript?: string|null;
    renewScript?: string|null;
    unsubscribeScript?: string|null;
    takeOverScript?: ScriptSetting|null;
    changeSubscriptionStatusNotification?: NotificationSetting|null;
    logSetting?: LogSetting|null;
}

