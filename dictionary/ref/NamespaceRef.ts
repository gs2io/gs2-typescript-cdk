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

import {GetAttr, Join} from "../../core/func";
import EntryModelRef from "./EntryModelRef";
import AddEntriesByUserId from "../stampSheet/AddEntriesByUserId";
import DeleteEntriesByUserId from "../stampSheet/DeleteEntriesByUserId";
import VerifyEntryByUserId from "../stampSheet/VerifyEntryByUserId";
import { EntryVerifyType } from "../stampSheet/enum/EntryVerifyType";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public entryModel(
        entryModelName: string,
    ): EntryModelRef {
        return new EntryModelRef(
            this.namespaceName,
            entryModelName,
        );
    }

    public addEntries(
        entryModelNames: string[]|null = null,
        userId: string = "#{userId}",
    ): AddEntriesByUserId {
        return new AddEntriesByUserId(
            this.namespaceName,
            entryModelNames,
            userId,
        );
    }

    public deleteEntries(
        entryModelNames: string[]|null = null,
        userId: string = "#{userId}",
    ): DeleteEntriesByUserId {
        return new DeleteEntriesByUserId(
            this.namespaceName,
            entryModelNames,
            userId,
        );
    }

    public verifyEntry(
        entryModelName: string,
        verifyType: EntryVerifyType,
        userId: string = "#{userId}",
    ): VerifyEntryByUserId {
        return new VerifyEntryByUserId(
            this.namespaceName,
            entryModelName,
            verifyType,
            userId,
        );
    }

    public grn(
    ): string {
        return new Join(
            ":",
            [
                "grn",
                "gs2",
                GetAttr.region(
                ).str(
                ),
                GetAttr.ownerId(
                ).str(
                ),
                "dictionary",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
