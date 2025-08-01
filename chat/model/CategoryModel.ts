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
import { CategoryModelOptions } from "./options/CategoryModelOptions";
import { CategoryModelRejectAccessTokenPost } from "./enums/CategoryModelRejectAccessTokenPost";

export default class CategoryModel {
    private readonly category: number;
    private readonly rejectAccessTokenPost: CategoryModelRejectAccessTokenPost|null = null;

    public constructor(
        category: number,
        options: CategoryModelOptions|null = null,
    ) {
        this.category = category;
        this.rejectAccessTokenPost = options?.rejectAccessTokenPost ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.category != null) {
            properties["category"] = this.category;
        }
        if (this.rejectAccessTokenPost != null) {
            properties["rejectAccessTokenPost"] = this.rejectAccessTokenPost;
        }

        return properties;
    }
}
