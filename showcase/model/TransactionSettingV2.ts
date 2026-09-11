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
import { TransactionSettingV2Options } from "./options/TransactionSettingV2Options";

export default class TransactionSettingV2 {
    private readonly distributorNamespaceId: string;
    private readonly enableParallelExecution: boolean;

    public constructor(
        distributorNamespaceId: string,
        enableParallelExecution: boolean,
        options: TransactionSettingV2Options|null = null,
    ) {
        this.distributorNamespaceId = distributorNamespaceId;
        this.enableParallelExecution = enableParallelExecution;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.distributorNamespaceId != null) {
            properties["distributorNamespaceId"] = this.distributorNamespaceId;
        }
        if (this.enableParallelExecution != null) {
            properties["enableParallelExecution"] = this.enableParallelExecution;
        }

        return properties;
    }
}
