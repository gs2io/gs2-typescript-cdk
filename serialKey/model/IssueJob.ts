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
import { IssueJobOptions } from "./options/IssueJobOptions";
import { IssueJobStatus } from "./enum/IssueJobStatus";

export default class IssueJob {
    private readonly name: string;
    private readonly issuedCount: number;
    private readonly issueRequestCount: number;
    private readonly status: IssueJobStatus;
    private readonly metadata: string|null = null;
    private readonly revision: number|null = null;

    public constructor(
        name: string,
        issuedCount: number,
        issueRequestCount: number,
        status: IssueJobStatus,
        options: IssueJobOptions|null = null,
    ) {
        this.name = name;
        this.issuedCount = issuedCount;
        this.issueRequestCount = issueRequestCount;
        this.status = status;
        this.metadata = options?.metadata ?? null;
        this.revision = options?.revision ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.issuedCount != null) {
            properties["issuedCount"] = this.issuedCount;
        }
        if (this.issueRequestCount != null) {
            properties["issueRequestCount"] = this.issueRequestCount;
        }
        if (this.status != null) {
            properties["status"] = this.status;
        }

        return properties;
    }
}
