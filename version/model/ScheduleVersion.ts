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
import Version from "./Version";
import { ScheduleVersionOptions } from "./options/ScheduleVersionOptions";

export default class ScheduleVersion {
    private readonly currentVersion: Version;
    private readonly warningVersion: Version;
    private readonly errorVersion: Version;
    private readonly scheduleEventId: string|null = null;

    public constructor(
        currentVersion: Version,
        warningVersion: Version,
        errorVersion: Version,
        options: ScheduleVersionOptions|null = null,
    ) {
        this.currentVersion = currentVersion;
        this.warningVersion = warningVersion;
        this.errorVersion = errorVersion;
        this.scheduleEventId = options?.scheduleEventId ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.currentVersion != null) {
            properties["currentVersion"] = this.currentVersion?.properties(
            );
        }
        if (this.warningVersion != null) {
            properties["warningVersion"] = this.warningVersion?.properties(
            );
        }
        if (this.errorVersion != null) {
            properties["errorVersion"] = this.errorVersion?.properties(
            );
        }
        if (this.scheduleEventId != null) {
            properties["scheduleEventId"] = this.scheduleEventId;
        }

        return properties;
    }
}
