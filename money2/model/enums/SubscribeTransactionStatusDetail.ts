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



export const SubscribeTransactionStatusDetail = {
    ACTIVE_ACTIVE: "active@active",
    ACTIVE_CONVERTED_FROM_TRIAL: "active@converted_from_trial",
    ACTIVE_IN_TRIAL: "active@in_trial",
    ACTIVE_IN_INTRO_OFFER: "active@in_intro_offer",
    GRACE_CANCELED: "grace@canceled",
    GRACE_GRACE_PERIOD: "grace@grace_period",
    GRACE_ON_HOLD: "grace@on_hold",
    INACTIVE_EXPIRED: "inactive@expired",
    INACTIVE_REVOKED: "inactive@revoked",
} as const;
export type SubscribeTransactionStatusDetail = typeof SubscribeTransactionStatusDetail[keyof typeof SubscribeTransactionStatusDetail];
