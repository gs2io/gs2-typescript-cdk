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

export default abstract class CdkResource {

    resourceName: string;
    dependsOn: string[];

    protected constructor(
        resourceName: string,
    ) {
        this.resourceName = resourceName;
        this.dependsOn = [];
    }

    public addDependsOn(
        resource: CdkResource,
    ): CdkResource {
        this.dependsOn.push(resource.resourceName);
        return this;
    }

    abstract resourceType(): string;

    abstract properties(): { [name: string]: any };

    public template(): { [name: string]: any } {
        return {
            "Type": this.resourceType(),
            "Properties": this.properties(),
            "DependsOn": this.dependsOn,
        };
    }
}
