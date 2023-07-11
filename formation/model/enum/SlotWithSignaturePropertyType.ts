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



export const SlotWithSignaturePropertyType = {
    GS2_INVENTORY: "gs2_inventory",
    GS2_SIMPLE_INVENTORY: "gs2_simple_inventory",
    GS2_DICTIONARY: "gs2_dictionary",
} as const;
export type SlotWithSignaturePropertyType = typeof SlotWithSignaturePropertyType[keyof typeof SlotWithSignaturePropertyType];
