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
import { NamespaceEnableDisconnectDetection } from "./enums/NamespaceEnableDisconnectDetection";
import { NamespaceCreateGatheringTriggerType } from "./enums/NamespaceCreateGatheringTriggerType";
import { NamespaceCompleteMatchmakingTriggerType } from "./enums/NamespaceCompleteMatchmakingTriggerType";
import { NamespaceEnableCollaborateSeasonRating } from "./enums/NamespaceEnableCollaborateSeasonRating";
import { NamespaceEnableDisconnectDetectionIsDisableOptions } from "./options/NamespaceEnableDisconnectDetectionIsDisableOptions"
import { NamespaceEnableDisconnectDetectionIsEnableOptions } from "./options/NamespaceEnableDisconnectDetectionIsEnableOptions"
import { NamespaceCreateGatheringTriggerTypeIsNoneOptions } from "./options/NamespaceCreateGatheringTriggerTypeIsNoneOptions"
import { NamespaceCreateGatheringTriggerTypeIsGs2RealtimeOptions } from "./options/NamespaceCreateGatheringTriggerTypeIsGs2RealtimeOptions"
import { NamespaceCreateGatheringTriggerTypeIsGs2ScriptOptions } from "./options/NamespaceCreateGatheringTriggerTypeIsGs2ScriptOptions"
import { NamespaceCompleteMatchmakingTriggerTypeIsNoneOptions } from "./options/NamespaceCompleteMatchmakingTriggerTypeIsNoneOptions"
import { NamespaceCompleteMatchmakingTriggerTypeIsGs2RealtimeOptions } from "./options/NamespaceCompleteMatchmakingTriggerTypeIsGs2RealtimeOptions"
import { NamespaceCompleteMatchmakingTriggerTypeIsGs2ScriptOptions } from "./options/NamespaceCompleteMatchmakingTriggerTypeIsGs2ScriptOptions"
import { NamespaceEnableCollaborateSeasonRatingIsEnableOptions } from "./options/NamespaceEnableCollaborateSeasonRatingIsEnableOptions"
import { NamespaceEnableCollaborateSeasonRatingIsDisableOptions } from "./options/NamespaceEnableCollaborateSeasonRatingIsDisableOptions"
import RatingModel from "./RatingModel";
import { RatingModelOptions } from "./options/RatingModelOptions";
import SeasonModel from "./SeasonModel";
import { SeasonModelOptions } from "./options/SeasonModelOptions";
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
    NamespaceEnableDisconnectDetection,
    NamespaceCreateGatheringTriggerType,
    NamespaceCompleteMatchmakingTriggerType,
    NamespaceEnableCollaborateSeasonRating,
    NamespaceEnableDisconnectDetectionIsDisableOptions,
    NamespaceEnableDisconnectDetectionIsEnableOptions,
    NamespaceCreateGatheringTriggerTypeIsNoneOptions,
    NamespaceCreateGatheringTriggerTypeIsGs2RealtimeOptions,
    NamespaceCreateGatheringTriggerTypeIsGs2ScriptOptions,
    NamespaceCompleteMatchmakingTriggerTypeIsNoneOptions,
    NamespaceCompleteMatchmakingTriggerTypeIsGs2RealtimeOptions,
    NamespaceCompleteMatchmakingTriggerTypeIsGs2ScriptOptions,
    NamespaceEnableCollaborateSeasonRatingIsEnableOptions,
    NamespaceEnableCollaborateSeasonRatingIsDisableOptions,
    RatingModel,
    RatingModelOptions,
    SeasonModel,
    SeasonModelOptions,
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