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
import UpdateProfileByUserId from "../stampSheet/UpdateProfileByUserId";
import VerifyFollowByUserId from "../stampSheet/VerifyFollowByUserId";
import { FollowVerifyType } from "../stampSheet/enums/FollowVerifyType";
import VerifyFriendByUserId from "../stampSheet/VerifyFriendByUserId";
import { FriendVerifyType } from "../stampSheet/enums/FriendVerifyType";
import VerifyFriendCountByUserId from "../stampSheet/VerifyFriendCountByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public updateProfile(
        publicProfile: string|null = null,
        followerProfile: string|null = null,
        friendProfile: string|null = null,
        userId: string = "#{userId}",
    ): UpdateProfileByUserId {
        return new UpdateProfileByUserId(
            this.namespaceName,
            publicProfile,
            followerProfile,
            friendProfile,
            userId,
        );
    }

    public verifyFollow(
        targetUserId: string,
        verifyType: FollowVerifyType,
        userId: string = "#{userId}",
    ): VerifyFollowByUserId {
        return new VerifyFollowByUserId(
            this.namespaceName,
            targetUserId,
            verifyType,
            userId,
        );
    }

    public verifyFriend(
        targetUserId: string,
        verifyType: FriendVerifyType,
        userId: string = "#{userId}",
    ): VerifyFriendByUserId {
        return new VerifyFriendByUserId(
            this.namespaceName,
            targetUserId,
            verifyType,
            userId,
        );
    }

    public verifyFriendCount(
        verifyType: FriendVerifyType,
        count: number,
        userId: string = "#{userId}",
    ): VerifyFriendCountByUserId {
        return new VerifyFriendCountByUserId(
            this.namespaceName,
            verifyType,
            count,
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
                "friend",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
