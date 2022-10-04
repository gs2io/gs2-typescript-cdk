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

import {GetAttr, Join} from "../../core/func";
import CurrentShowcaseMasterRef from "./CurrentShowcaseMasterRef";
import DisplayItemRef from "./DisplayItemRef";
import SalesItemMasterRef from "./SalesItemMasterRef";
import SalesItemGroupMasterRef from "./SalesItemGroupMasterRef";
import ShowcaseMasterRef from "./ShowcaseMasterRef";


export default class NamespaceRef {
    private namespaceName: string;

    public constructor(
            namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public currentShowcaseMaster(
    ): CurrentShowcaseMasterRef {
        return new CurrentShowcaseMasterRef(
            this.namespaceName,
        );
    }

    public displayItem(
    ): DisplayItemRef {
        return new DisplayItemRef(
            this.namespaceName,
        );
    }

    public salesItemMaster(
            salesItemName: string,
    ): SalesItemMasterRef {
        return new SalesItemMasterRef(
            this.namespaceName,
            salesItemName,
        );
    }

    public salesItemGroupMaster(
            salesItemGroupName: string,
    ): SalesItemGroupMasterRef {
        return new SalesItemGroupMasterRef(
            this.namespaceName,
            salesItemGroupName,
        );
    }

    public showcaseMaster(
            showcaseName: string,
    ): ShowcaseMasterRef {
        return new ShowcaseMasterRef(
            this.namespaceName,
            showcaseName,
        );
    }

    public grn(): string {
        return new Join(
            ":",
            [
                "grn",
                "gs2",
                GetAttr.region().str(),
                GetAttr.ownerId().str(),
                "showcase",
                this.namespaceName
            ]
        ).str();
    }
}
