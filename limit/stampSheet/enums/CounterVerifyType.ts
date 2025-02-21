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



export const CounterVerifyType = {
    LESS: "less",
    LESS_EQUAL: "lessEqual",
    GREATER: "greater",
    GREATER_EQUAL: "greaterEqual",
    EQUAL: "equal",
    NOT_EQUAL: "notEqual",
} as const;
export type CounterVerifyType = typeof CounterVerifyType[keyof typeof CounterVerifyType];
