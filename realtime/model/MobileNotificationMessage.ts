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
import { MobileNotificationMessageOptions } from "./options/MobileNotificationMessageOptions";

export default class MobileNotificationMessage {
    private readonly locale: string|null = null;
    private readonly title: string|null = null;
    private readonly message: string|null = null;

    public constructor(
        options: MobileNotificationMessageOptions|null = null,
    ) {
        this.locale = options?.locale ?? null;
        this.title = options?.title ?? null;
        this.message = options?.message ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.locale != null) {
            properties["locale"] = this.locale;
        }
        if (this.title != null) {
            properties["title"] = this.title;
        }
        if (this.message != null) {
            properties["message"] = this.message;
        }

        return properties;
    }
}
