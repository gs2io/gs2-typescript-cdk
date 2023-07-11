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
import { ContentOptions } from "./options/ContentOptions";

export default class Content {
    private readonly section: string;
    private readonly content: string;
    private readonly frontMatter: string;

    public constructor(
        section: string,
        content: string,
        frontMatter: string,
        options: ContentOptions|null = null,
    ) {
        this.section = section;
        this.content = content;
        this.frontMatter = frontMatter;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.section != null) {
            properties["section"] = this.section;
        }
        if (this.content != null) {
            properties["content"] = this.content;
        }
        if (this.frontMatter != null) {
            properties["frontMatter"] = this.frontMatter;
        }

        return properties;
    }
}
