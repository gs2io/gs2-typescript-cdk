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
import CurrentStaminaMasterRef from "./CurrentStaminaMasterRef";
import MaxStaminaTableRef from "./MaxStaminaTableRef";
import RecoverIntervalTableRef from "./RecoverIntervalTableRef";
import RecoverValueTableRef from "./RecoverValueTableRef";
import StaminaModelRef from "./StaminaModelRef";
import RecoverIntervalTableMasterRef from "./RecoverIntervalTableMasterRef";
import MaxStaminaTableMasterRef from "./MaxStaminaTableMasterRef";
import RecoverValueTableMasterRef from "./RecoverValueTableMasterRef";
import StaminaModelMasterRef from "./StaminaModelMasterRef";


export default class NamespaceRef {
    private namespaceName: string;

    public constructor(
            namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public currentStaminaMaster(
    ): CurrentStaminaMasterRef {
        return new CurrentStaminaMasterRef(
            this.namespaceName,
        );
    }

    public maxStaminaTable(
            maxStaminaTableName: string,
    ): MaxStaminaTableRef {
        return new MaxStaminaTableRef(
            this.namespaceName,
            maxStaminaTableName,
        );
    }

    public recoverIntervalTable(
            recoverIntervalTableName: string,
    ): RecoverIntervalTableRef {
        return new RecoverIntervalTableRef(
            this.namespaceName,
            recoverIntervalTableName,
        );
    }

    public recoverValueTable(
            recoverValueTableName: string,
    ): RecoverValueTableRef {
        return new RecoverValueTableRef(
            this.namespaceName,
            recoverValueTableName,
        );
    }

    public staminaModel(
            staminaName: string,
    ): StaminaModelRef {
        return new StaminaModelRef(
            this.namespaceName,
            staminaName,
        );
    }

    public recoverIntervalTableMaster(
            recoverIntervalTableName: string,
    ): RecoverIntervalTableMasterRef {
        return new RecoverIntervalTableMasterRef(
            this.namespaceName,
            recoverIntervalTableName,
        );
    }

    public maxStaminaTableMaster(
            maxStaminaTableName: string,
    ): MaxStaminaTableMasterRef {
        return new MaxStaminaTableMasterRef(
            this.namespaceName,
            maxStaminaTableName,
        );
    }

    public recoverValueTableMaster(
            recoverValueTableName: string,
    ): RecoverValueTableMasterRef {
        return new RecoverValueTableMasterRef(
            this.namespaceName,
            recoverValueTableName,
        );
    }

    public staminaModelMaster(
            staminaName: string,
    ): StaminaModelMasterRef {
        return new StaminaModelMasterRef(
            this.namespaceName,
            staminaName,
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
                "stamina",
                this.namespaceName
            ]
        ).str();
    }
}
