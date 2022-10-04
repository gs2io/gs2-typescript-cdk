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

import Func from "./Func";
import {CdkResource} from "../model";

export default class GetAttr implements Func {

    key: string;

    public constructor(
        resource: CdkResource | null = null,
        path: string | null = null,
        key: string | null = null,
    ) {
        if (key == null) {
            this.key = resource!.resourceName + "." + path;
        } else {
            this.key = key;
        }
    }

    public str(): string {
        return "!GetAttr " + this.key;
    }

    public static region(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Gs2::Region"
        );
    }

    public static ownerId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Gs2::OwnerId"
        );
    }
}