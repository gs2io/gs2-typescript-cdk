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

import * as model from "./model";
import * as ref from "./ref";
import * as stampSheet from "./stampSheet";
import { NamespaceRef } from "./ref";
import { BanStatusRef } from "./ref";


function namespace(
    namespaceName: string,
): NamespaceRef {
    return new NamespaceRef(
        namespaceName,
    );
}


function banStatus(
    name: string,
): BanStatusRef {
    return new BanStatusRef(
        name,
    );
}

export default {
    model,
    ref,
    stampSheet,
    namespace,
    banStatus,
};