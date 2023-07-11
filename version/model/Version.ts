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
import { VersionOptions } from "./options/VersionOptions";

export default class Version {
    private readonly major: number;
    private readonly minor: number;
    private readonly micro: number;

    public constructor(
        major: number,
        minor: number,
        micro: number,
        options: VersionOptions|null = null,
    ) {
        this.major = major;
        this.minor = minor;
        this.micro = micro;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.major != null) {
            properties["major"] = this.major;
        }
        if (this.minor != null) {
            properties["minor"] = this.minor;
        }
        if (this.micro != null) {
            properties["micro"] = this.micro;
        }

        return properties;
    }
}
