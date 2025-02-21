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
import { BlockingPolicyModelDefaultRestriction } from "../enums/BlockingPolicyModelDefaultRestriction";
import { BlockingPolicyModelLocationDetection } from "../enums/BlockingPolicyModelLocationDetection";
import { BlockingPolicyModelLocationRestriction } from "../enums/BlockingPolicyModelLocationRestriction";
import { BlockingPolicyModelAnonymousIpDetection } from "../enums/BlockingPolicyModelAnonymousIpDetection";
import { BlockingPolicyModelAnonymousIpRestriction } from "../enums/BlockingPolicyModelAnonymousIpRestriction";
import { BlockingPolicyModelHostingProviderIpDetection } from "../enums/BlockingPolicyModelHostingProviderIpDetection";
import { BlockingPolicyModelHostingProviderIpRestriction } from "../enums/BlockingPolicyModelHostingProviderIpRestriction";
import { BlockingPolicyModelReputationIpDetection } from "../enums/BlockingPolicyModelReputationIpDetection";
import { BlockingPolicyModelReputationIpRestriction } from "../enums/BlockingPolicyModelReputationIpRestriction";
import { BlockingPolicyModelIpAddressesDetection } from "../enums/BlockingPolicyModelIpAddressesDetection";
import { BlockingPolicyModelIpAddressRestriction } from "../enums/BlockingPolicyModelIpAddressRestriction";

export interface BlockingPolicyModelReputationIpDetectionIsEnableOptions {
    ipAddresses?: string[]|null;
}
