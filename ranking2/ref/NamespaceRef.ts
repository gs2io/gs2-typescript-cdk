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
import GlobalRankingModelRef from "./GlobalRankingModelRef";
import SubscribeRankingModelRef from "./SubscribeRankingModelRef";
import ClusterRankingModelRef from "./ClusterRankingModelRef";
import CreateGlobalRankingReceivedRewardByUserId from "../stampSheet/CreateGlobalRankingReceivedRewardByUserId";
import CreateClusterRankingReceivedRewardByUserId from "../stampSheet/CreateClusterRankingReceivedRewardByUserId";
import VerifyGlobalRankingScoreByUserId from "../stampSheet/VerifyGlobalRankingScoreByUserId";
import { GlobalRankingScoreVerifyType } from "../stampSheet/enum/GlobalRankingScoreVerifyType";
import VerifyClusterRankingScoreByUserId from "../stampSheet/VerifyClusterRankingScoreByUserId";
import { ClusterRankingScoreVerifyType } from "../stampSheet/enum/ClusterRankingScoreVerifyType";
import VerifySubscribeRankingScoreByUserId from "../stampSheet/VerifySubscribeRankingScoreByUserId";
import { SubscribeRankingScoreVerifyType } from "../stampSheet/enum/SubscribeRankingScoreVerifyType";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public globalRankingModel(
        rankingName: string,
    ): GlobalRankingModelRef {
        return new GlobalRankingModelRef(
            this.namespaceName,
            rankingName,
        );
    }

    public subscribeRankingModel(
        rankingName: string,
    ): SubscribeRankingModelRef {
        return new SubscribeRankingModelRef(
            this.namespaceName,
            rankingName,
        );
    }

    public clusterRankingModel(
        rankingName: string,
    ): ClusterRankingModelRef {
        return new ClusterRankingModelRef(
            this.namespaceName,
            rankingName,
        );
    }

    public createGlobalRankingReceivedReward(
        rankingName: string,
        season: number|null = null,
        userId: string = "#{userId}",
    ): CreateGlobalRankingReceivedRewardByUserId {
        return new CreateGlobalRankingReceivedRewardByUserId(
            this.namespaceName,
            rankingName,
            season,
            userId,
        );
    }

    public createClusterRankingReceivedReward(
        rankingName: string,
        clusterName: string,
        season: number|null = null,
        userId: string = "#{userId}",
    ): CreateClusterRankingReceivedRewardByUserId {
        return new CreateClusterRankingReceivedRewardByUserId(
            this.namespaceName,
            rankingName,
            clusterName,
            season,
            userId,
        );
    }

    public verifyGlobalRankingScore(
        rankingName: string,
        verifyType: GlobalRankingScoreVerifyType,
        score: number,
        season: number|null = null,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifyGlobalRankingScoreByUserId {
        return new VerifyGlobalRankingScoreByUserId(
            this.namespaceName,
            rankingName,
            verifyType,
            score,
            season,
            multiplyValueSpecifyingQuantity,
            userId,
        );
    }

    public verifyClusterRankingScore(
        rankingName: string,
        clusterName: string,
        verifyType: ClusterRankingScoreVerifyType,
        score: number,
        season: number|null = null,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifyClusterRankingScoreByUserId {
        return new VerifyClusterRankingScoreByUserId(
            this.namespaceName,
            rankingName,
            clusterName,
            verifyType,
            score,
            season,
            multiplyValueSpecifyingQuantity,
            userId,
        );
    }

    public verifySubscribeRankingScore(
        rankingName: string,
        verifyType: SubscribeRankingScoreVerifyType,
        score: number,
        season: number|null = null,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifySubscribeRankingScoreByUserId {
        return new VerifySubscribeRankingScoreByUserId(
            this.namespaceName,
            rankingName,
            verifyType,
            score,
            season,
            multiplyValueSpecifyingQuantity,
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
                "ranking2",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
