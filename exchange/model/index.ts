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
import RateModel from "./RateModel";
import { RateModelOptions } from "./options/RateModelOptions";
import { RateModelTimingType } from "./enum/RateModelTimingType";
import { RateModelTimingTypeIsImmediateOptions } from "./options/RateModelTimingTypeIsImmediateOptions"
import { RateModelTimingTypeIsAwaitOptions } from "./options/RateModelTimingTypeIsAwaitOptions"
import IncrementalRateModel from "./IncrementalRateModel";
import { IncrementalRateModelOptions } from "./options/IncrementalRateModelOptions";
import { IncrementalRateModelCalculateType } from "./enum/IncrementalRateModelCalculateType";
import { IncrementalRateModelCalculateTypeIsLinearOptions } from "./options/IncrementalRateModelCalculateTypeIsLinearOptions"
import { IncrementalRateModelCalculateTypeIsPowerOptions } from "./options/IncrementalRateModelCalculateTypeIsPowerOptions"
import { IncrementalRateModelCalculateTypeIsGs2ScriptOptions } from "./options/IncrementalRateModelCalculateTypeIsGs2ScriptOptions"
import LogCost from "./LogCost";
import { LogCostOptions } from "./options/LogCostOptions";
import LogRate from "./LogRate";
import { LogRateOptions } from "./options/LogRateOptions";
import VerifyActionResult from "./VerifyActionResult";
import { VerifyActionResultOptions } from "./options/VerifyActionResultOptions";
import ConsumeActionResult from "./ConsumeActionResult";
import { ConsumeActionResultOptions } from "./options/ConsumeActionResultOptions";
import AcquireActionResult from "./AcquireActionResult";
import { AcquireActionResultOptions } from "./options/AcquireActionResultOptions";
import TransactionResult from "./TransactionResult";
import { TransactionResultOptions } from "./options/TransactionResultOptions";
import CurrentMasterData from "./CurrentMasterData";

export {
    Namespace,
    NamespaceOptions,
    RateModel,
    RateModelOptions,
    RateModelTimingType,
    RateModelTimingTypeIsImmediateOptions,
    RateModelTimingTypeIsAwaitOptions,
    IncrementalRateModel,
    IncrementalRateModelOptions,
    IncrementalRateModelCalculateType,
    IncrementalRateModelCalculateTypeIsLinearOptions,
    IncrementalRateModelCalculateTypeIsPowerOptions,
    IncrementalRateModelCalculateTypeIsGs2ScriptOptions,
    LogCost,
    LogCostOptions,
    LogRate,
    LogRateOptions,
    VerifyActionResult,
    VerifyActionResultOptions,
    ConsumeActionResult,
    ConsumeActionResultOptions,
    AcquireActionResult,
    AcquireActionResultOptions,
    TransactionResult,
    TransactionResultOptions,
    CurrentMasterData,
}