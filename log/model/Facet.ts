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
import FacetValueCount from "./FacetValueCount";
import NumericRange from "./NumericRange";
import { FacetOptions } from "./options/FacetOptions";

export default class Facet {
    private readonly field: string;
    private readonly values: FacetValueCount[]|null = null;
    private readonly range: NumericRange|null = null;
    private readonly globalRange: NumericRange|null = null;

    public constructor(
        field: string,
        options: FacetOptions|null = null,
    ) {
        this.field = field;
        this.values = options?.values ?? null;
        this.range = options?.range ?? null;
        this.globalRange = options?.globalRange ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.field != null) {
            properties["field"] = this.field;
        }
        if (this.values != null) {
            properties["values"] = this.values.map(v => v.properties(
                ));
        }
        if (this.range != null) {
            properties["range"] = this.range?.properties(
            );
        }
        if (this.globalRange != null) {
            properties["globalRange"] = this.globalRange?.properties(
            );
        }

        return properties;
    }
}
