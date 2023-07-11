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
import Version from "./Version";
import { VersionOptions } from "./options/VersionOptions";
import VersionModel from "./VersionModel";
import { VersionModelOptions } from "./options/VersionModelOptions";
import { VersionModelScope } from "./enum/VersionModelScope";
import { VersionModelScopeIsPassiveOptions } from "./options/VersionModelScopeIsPassiveOptions"
import { VersionModelScopeIsActiveOptions } from "./options/VersionModelScopeIsActiveOptions"
import Status from "./Status";
import { StatusOptions } from "./options/StatusOptions";
import TargetVersion from "./TargetVersion";
import { TargetVersionOptions } from "./options/TargetVersionOptions";
import SignTargetVersion from "./SignTargetVersion";
import { SignTargetVersionOptions } from "./options/SignTargetVersionOptions";
import CurrentMasterData from "./CurrentMasterData";

export {
    Namespace,
    NamespaceOptions,
    Version,
    VersionOptions,
    VersionModel,
    VersionModelOptions,
    VersionModelScope,
    VersionModelScopeIsPassiveOptions,
    VersionModelScopeIsActiveOptions,
    Status,
    StatusOptions,
    TargetVersion,
    TargetVersionOptions,
    SignTargetVersion,
    SignTargetVersionOptions,
    CurrentMasterData,
}