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
import { BlockingPolicyModelDefaultRestriction } from "../enum/BlockingPolicyModelDefaultRestriction";
import { BlockingPolicyModelLocationDetection } from "../enum/BlockingPolicyModelLocationDetection";
import { BlockingPolicyModelLocationRestriction } from "../enum/BlockingPolicyModelLocationRestriction";
import { BlockingPolicyModelAnonymousIpDetection } from "../enum/BlockingPolicyModelAnonymousIpDetection";
import { BlockingPolicyModelAnonymousIpRestriction } from "../enum/BlockingPolicyModelAnonymousIpRestriction";
import { BlockingPolicyModelHostingProviderIpDetection } from "../enum/BlockingPolicyModelHostingProviderIpDetection";
import { BlockingPolicyModelHostingProviderIpRestriction } from "../enum/BlockingPolicyModelHostingProviderIpRestriction";
import { BlockingPolicyModelReputationIpDetection } from "../enum/BlockingPolicyModelReputationIpDetection";
import { BlockingPolicyModelReputationIpRestriction } from "../enum/BlockingPolicyModelReputationIpRestriction";
import { BlockingPolicyModelIpAddressesDetection } from "../enum/BlockingPolicyModelIpAddressesDetection";
import { BlockingPolicyModelIpAddressRestriction } from "../enum/BlockingPolicyModelIpAddressRestriction";

export interface BlockingPolicyModelReputationIpDetectionIsEnableOptions {
    ipAddresses?: string[]|null;
}
