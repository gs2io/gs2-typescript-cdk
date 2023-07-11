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
import Namespace from "./Namespace";
import { NamespaceOptions } from "./options/NamespaceOptions";
import { NamespaceCreateGatheringTriggerType } from "./enum/NamespaceCreateGatheringTriggerType";
import { NamespaceCompleteMatchmakingTriggerType } from "./enum/NamespaceCompleteMatchmakingTriggerType";
import { NamespaceCreateGatheringTriggerTypeIsNoneOptions } from "./options/NamespaceCreateGatheringTriggerTypeIsNoneOptions"
import { NamespaceCreateGatheringTriggerTypeIsGs2RealtimeOptions } from "./options/NamespaceCreateGatheringTriggerTypeIsGs2RealtimeOptions"
import { NamespaceCreateGatheringTriggerTypeIsGs2ScriptOptions } from "./options/NamespaceCreateGatheringTriggerTypeIsGs2ScriptOptions"
import { NamespaceCompleteMatchmakingTriggerTypeIsNoneOptions } from "./options/NamespaceCompleteMatchmakingTriggerTypeIsNoneOptions"
import { NamespaceCompleteMatchmakingTriggerTypeIsGs2RealtimeOptions } from "./options/NamespaceCompleteMatchmakingTriggerTypeIsGs2RealtimeOptions"
import { NamespaceCompleteMatchmakingTriggerTypeIsGs2ScriptOptions } from "./options/NamespaceCompleteMatchmakingTriggerTypeIsGs2ScriptOptions"
import RatingModel from "./RatingModel";
import { RatingModelOptions } from "./options/RatingModelOptions";
import AttributeRange from "./AttributeRange";
import { AttributeRangeOptions } from "./options/AttributeRangeOptions";
import CapacityOfRole from "./CapacityOfRole";
import { CapacityOfRoleOptions } from "./options/CapacityOfRoleOptions";
import Attribute from "./Attribute";
import { AttributeOptions } from "./options/AttributeOptions";
import Player from "./Player";
import { PlayerOptions } from "./options/PlayerOptions";
import GameResult from "./GameResult";
import { GameResultOptions } from "./options/GameResultOptions";
import SignedBallot from "./SignedBallot";
import { SignedBallotOptions } from "./options/SignedBallotOptions";
import TimeSpan from "./TimeSpan";
import { TimeSpanOptions } from "./options/TimeSpanOptions";
import CurrentMasterData from "./CurrentMasterData";

export {
    Namespace,
    NamespaceOptions,
    NamespaceCreateGatheringTriggerType,
    NamespaceCompleteMatchmakingTriggerType,
    NamespaceCreateGatheringTriggerTypeIsNoneOptions,
    NamespaceCreateGatheringTriggerTypeIsGs2RealtimeOptions,
    NamespaceCreateGatheringTriggerTypeIsGs2ScriptOptions,
    NamespaceCompleteMatchmakingTriggerTypeIsNoneOptions,
    NamespaceCompleteMatchmakingTriggerTypeIsGs2RealtimeOptions,
    NamespaceCompleteMatchmakingTriggerTypeIsGs2ScriptOptions,
    RatingModel,
    RatingModelOptions,
    AttributeRange,
    AttributeRangeOptions,
    CapacityOfRole,
    CapacityOfRoleOptions,
    Attribute,
    AttributeOptions,
    Player,
    PlayerOptions,
    GameResult,
    GameResultOptions,
    SignedBallot,
    SignedBallotOptions,
    TimeSpan,
    TimeSpanOptions,
    CurrentMasterData,
}