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

import * as model from "./model";
import * as ref from "./ref";
import * as stampSheet from "./stampSheet";

function user(
        userName: string,
): ref.UserRef {
    return new ref.UserRef(
        userName,
    )
}

function securityPolicy(
        securityPolicyName: string,
): ref.SecurityPolicyRef {
    return new ref.SecurityPolicyRef(
        securityPolicyName,
    )
}

export default {
    model,
    ref,
    stampSheet,
    user,
    securityPolicy,
};