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
import RateModelRef from "./RateModelRef";
import IncrementalRateModelRef from "./IncrementalRateModelRef";
import ExchangeByUserId from "../stampSheet/ExchangeByUserId";
import { Config } from "../../core/model";
import IncrementalExchangeByUserId from "../stampSheet/IncrementalExchangeByUserId";
import CreateAwaitByUserId from "../stampSheet/CreateAwaitByUserId";
import AcquireForceByUserId from "../stampSheet/AcquireForceByUserId";
import SkipByUserId from "../stampSheet/SkipByUserId";
import { AwaitSkipType } from "../stampSheet/enum/AwaitSkipType";
import DeleteAwaitByUserId from "../stampSheet/DeleteAwaitByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public rateModel(
        rateName: string,
    ): RateModelRef {
        return new RateModelRef(
            this.namespaceName,
            rateName,
        );
    }

    public incrementalRateModel(
        rateName: string,
    ): IncrementalRateModelRef {
        return new IncrementalRateModelRef(
            this.namespaceName,
            rateName,
        );
    }

    public exchange(
        rateName: string,
        count: number,
        config: Config[]|null = null,
        userId: string = "#{userId}",
    ): ExchangeByUserId {
        return new ExchangeByUserId(
            this.namespaceName,
            rateName,
            count,
            config,
            userId,
        );
    }

    public incrementalExchange(
        rateName: string,
        count: number,
        config: Config[]|null = null,
        userId: string = "#{userId}",
    ): IncrementalExchangeByUserId {
        return new IncrementalExchangeByUserId(
            this.namespaceName,
            rateName,
            count,
            config,
            userId,
        );
    }

    public createAwait(
        rateName: string,
        count: number|null = null,
        config: Config[]|null = null,
        userId: string = "#{userId}",
    ): CreateAwaitByUserId {
        return new CreateAwaitByUserId(
            this.namespaceName,
            rateName,
            count,
            config,
            userId,
        );
    }

    public acquireForce(
        awaitName: string|null = null,
        config: Config[]|null = null,
        userId: string = "#{userId}",
    ): AcquireForceByUserId {
        return new AcquireForceByUserId(
            this.namespaceName,
            awaitName,
            config,
            userId,
        );
    }

    public skip(
        awaitName: string|null = null,
        skipType: AwaitSkipType|null = null,
        minutes: number|null = null,
        rate: number|null = null,
        userId: string = "#{userId}",
    ): SkipByUserId {
        return new SkipByUserId(
            this.namespaceName,
            awaitName,
            skipType,
            minutes,
            rate,
            userId,
        );
    }

    public deleteAwait(
        awaitName: string|null = null,
        userId: string = "#{userId}",
    ): DeleteAwaitByUserId {
        return new DeleteAwaitByUserId(
            this.namespaceName,
            awaitName,
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
                "exchange",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
