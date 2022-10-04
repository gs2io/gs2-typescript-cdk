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

import CdkResource from "./CdkResource";

const yaml = require('js-yaml');

export default class Stack {

    resources: CdkResource[];
    outputs: { [name: string]: string };

    public constructor() {
        this.resources = [];
        this.outputs = {};
    }

    public addResource(
        resource: CdkResource
    ) {
        this.resources.push(resource);
    }

    public output(
        name: string,
        path: string,
    ) {
        this.outputs[name] = path;
    }

    public template(): { [name: string]: any } {
        let templateResources: { [name: string]: any } = {};
        for (let i = 0; i < this.resources.length; i++) {
            const resource = this.resources[i];
            templateResources[resource.resourceName] = resource.template();
        }
        return {
            "GS2TemplateFormatVersion": "2019-05-01",
            "Resources": templateResources,
            "Outputs": this.outputs,
        };
    }

    public yaml(): string {
        return yaml.dump(this.template(), {lineWidth: -1, quotingType: "\""}).replaceAll(/"!(.*) (.*)"/ig, "!$1 $2");
    }
}