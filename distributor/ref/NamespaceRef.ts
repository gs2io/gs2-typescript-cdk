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
import CurrentDistributorMasterRef from "./CurrentDistributorMasterRef";
import DistributorModelRef from "./DistributorModelRef";
import DistributorModelMasterRef from "./DistributorModelMasterRef";


export default class NamespaceRef {
    private namespaceName: string;

    public constructor(
            namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public currentDistributorMaster(
    ): CurrentDistributorMasterRef {
        return new CurrentDistributorMasterRef(
            this.namespaceName,
        );
    }

    public distributorModel(
            distributorName: string,
    ): DistributorModelRef {
        return new DistributorModelRef(
            this.namespaceName,
            distributorName,
        );
    }

    public distributorModelMaster(
            distributorName: string,
    ): DistributorModelMasterRef {
        return new DistributorModelMasterRef(
            this.namespaceName,
            distributorName,
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
                "distributor",
                this.namespaceName
            ]
        ).str();
    }
}
