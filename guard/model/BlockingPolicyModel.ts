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
import { BlockingPolicyModelOptions } from "./options/BlockingPolicyModelOptions";
import { BlockingPolicyModelLocationDetectionIsEnableOptions } from "./options/BlockingPolicyModelLocationDetectionIsEnableOptions";
import { BlockingPolicyModelLocationDetectionIsDisableOptions } from "./options/BlockingPolicyModelLocationDetectionIsDisableOptions";
import { BlockingPolicyModelAnonymousIpDetectionIsEnableOptions } from "./options/BlockingPolicyModelAnonymousIpDetectionIsEnableOptions";
import { BlockingPolicyModelAnonymousIpDetectionIsDisableOptions } from "./options/BlockingPolicyModelAnonymousIpDetectionIsDisableOptions";
import { BlockingPolicyModelHostingProviderIpDetectionIsEnableOptions } from "./options/BlockingPolicyModelHostingProviderIpDetectionIsEnableOptions";
import { BlockingPolicyModelHostingProviderIpDetectionIsDisableOptions } from "./options/BlockingPolicyModelHostingProviderIpDetectionIsDisableOptions";
import { BlockingPolicyModelReputationIpDetectionIsEnableOptions } from "./options/BlockingPolicyModelReputationIpDetectionIsEnableOptions";
import { BlockingPolicyModelReputationIpDetectionIsDisableOptions } from "./options/BlockingPolicyModelReputationIpDetectionIsDisableOptions";
import { BlockingPolicyModelIpAddressesDetectionIsEnableOptions } from "./options/BlockingPolicyModelIpAddressesDetectionIsEnableOptions";
import { BlockingPolicyModelIpAddressesDetectionIsDisableOptions } from "./options/BlockingPolicyModelIpAddressesDetectionIsDisableOptions";
import { BlockingPolicyModelDefaultRestriction } from "./enum/BlockingPolicyModelDefaultRestriction";
import { BlockingPolicyModelLocationDetection } from "./enum/BlockingPolicyModelLocationDetection";
import { BlockingPolicyModelLocationRestriction } from "./enum/BlockingPolicyModelLocationRestriction";
import { BlockingPolicyModelAnonymousIpDetection } from "./enum/BlockingPolicyModelAnonymousIpDetection";
import { BlockingPolicyModelAnonymousIpRestriction } from "./enum/BlockingPolicyModelAnonymousIpRestriction";
import { BlockingPolicyModelHostingProviderIpDetection } from "./enum/BlockingPolicyModelHostingProviderIpDetection";
import { BlockingPolicyModelHostingProviderIpRestriction } from "./enum/BlockingPolicyModelHostingProviderIpRestriction";
import { BlockingPolicyModelReputationIpDetection } from "./enum/BlockingPolicyModelReputationIpDetection";
import { BlockingPolicyModelReputationIpRestriction } from "./enum/BlockingPolicyModelReputationIpRestriction";
import { BlockingPolicyModelIpAddressesDetection } from "./enum/BlockingPolicyModelIpAddressesDetection";
import { BlockingPolicyModelIpAddressRestriction } from "./enum/BlockingPolicyModelIpAddressRestriction";

export default class BlockingPolicyModel {
    private readonly passServices: string[];
    private readonly defaultRestriction: BlockingPolicyModelDefaultRestriction;
    private readonly locationDetection: BlockingPolicyModelLocationDetection;
    private readonly anonymousIpDetection: BlockingPolicyModelAnonymousIpDetection;
    private readonly hostingProviderIpDetection: BlockingPolicyModelHostingProviderIpDetection;
    private readonly reputationIpDetection: BlockingPolicyModelReputationIpDetection;
    private readonly ipAddressesDetection: BlockingPolicyModelIpAddressesDetection;
    private readonly locations: string[]|null = null;
    private readonly locationRestriction: BlockingPolicyModelLocationRestriction|null = null;
    private readonly anonymousIpRestriction: BlockingPolicyModelAnonymousIpRestriction|null = null;
    private readonly hostingProviderIpRestriction: BlockingPolicyModelHostingProviderIpRestriction|null = null;
    private readonly reputationIpRestriction: BlockingPolicyModelReputationIpRestriction|null = null;
    private readonly ipAddresses: string[]|null = null;
    private readonly ipAddressRestriction: BlockingPolicyModelIpAddressRestriction|null = null;

    public constructor(
        passServices: string[],
        defaultRestriction: BlockingPolicyModelDefaultRestriction,
        locationDetection: BlockingPolicyModelLocationDetection,
        anonymousIpDetection: BlockingPolicyModelAnonymousIpDetection,
        hostingProviderIpDetection: BlockingPolicyModelHostingProviderIpDetection,
        reputationIpDetection: BlockingPolicyModelReputationIpDetection,
        ipAddressesDetection: BlockingPolicyModelIpAddressesDetection,
        options: BlockingPolicyModelOptions|null = null,
    ) {
        this.passServices = passServices;
        this.defaultRestriction = defaultRestriction;
        this.locationDetection = locationDetection;
        this.anonymousIpDetection = anonymousIpDetection;
        this.hostingProviderIpDetection = hostingProviderIpDetection;
        this.reputationIpDetection = reputationIpDetection;
        this.ipAddressesDetection = ipAddressesDetection;
        this.locations = options?.locations ?? null;
        this.locationRestriction = options?.locationRestriction ?? null;
        this.anonymousIpRestriction = options?.anonymousIpRestriction ?? null;
        this.hostingProviderIpRestriction = options?.hostingProviderIpRestriction ?? null;
        this.reputationIpRestriction = options?.reputationIpRestriction ?? null;
        this.ipAddresses = options?.ipAddresses ?? null;
        this.ipAddressRestriction = options?.ipAddressRestriction ?? null;
    }

    public static locationDetectionIsEnable(
        passServices: string[],
        defaultRestriction: BlockingPolicyModelDefaultRestriction,
        anonymousIpDetection: BlockingPolicyModelAnonymousIpDetection,
        hostingProviderIpDetection: BlockingPolicyModelHostingProviderIpDetection,
        reputationIpDetection: BlockingPolicyModelReputationIpDetection,
        ipAddressesDetection: BlockingPolicyModelIpAddressesDetection,
        locations: string[],
        locationRestriction: BlockingPolicyModelLocationRestriction,
        options: BlockingPolicyModelLocationDetectionIsEnableOptions|null = null,
    ): BlockingPolicyModel {
        return new BlockingPolicyModel(
            passServices,
            defaultRestriction,
            BlockingPolicyModelLocationDetection.ENABLE,
            anonymousIpDetection,
            hostingProviderIpDetection,
            reputationIpDetection,
            ipAddressesDetection,
            {
                locations: locations,
                locationRestriction: locationRestriction,
                ipAddresses: options?.ipAddresses,
            },
        );
    }

    public static locationDetectionIsDisable(
        passServices: string[],
        defaultRestriction: BlockingPolicyModelDefaultRestriction,
        anonymousIpDetection: BlockingPolicyModelAnonymousIpDetection,
        hostingProviderIpDetection: BlockingPolicyModelHostingProviderIpDetection,
        reputationIpDetection: BlockingPolicyModelReputationIpDetection,
        ipAddressesDetection: BlockingPolicyModelIpAddressesDetection,
        options: BlockingPolicyModelLocationDetectionIsDisableOptions|null = null,
    ): BlockingPolicyModel {
        return new BlockingPolicyModel(
            passServices,
            defaultRestriction,
            BlockingPolicyModelLocationDetection.DISABLE,
            anonymousIpDetection,
            hostingProviderIpDetection,
            reputationIpDetection,
            ipAddressesDetection,
            {
                ipAddresses: options?.ipAddresses,
            },
        );
    }

    public static anonymousIpDetectionIsEnable(
        passServices: string[],
        defaultRestriction: BlockingPolicyModelDefaultRestriction,
        locationDetection: BlockingPolicyModelLocationDetection,
        hostingProviderIpDetection: BlockingPolicyModelHostingProviderIpDetection,
        reputationIpDetection: BlockingPolicyModelReputationIpDetection,
        ipAddressesDetection: BlockingPolicyModelIpAddressesDetection,
        anonymousIpRestriction: BlockingPolicyModelAnonymousIpRestriction,
        options: BlockingPolicyModelAnonymousIpDetectionIsEnableOptions|null = null,
    ): BlockingPolicyModel {
        return new BlockingPolicyModel(
            passServices,
            defaultRestriction,
            locationDetection,
            BlockingPolicyModelAnonymousIpDetection.ENABLE,
            hostingProviderIpDetection,
            reputationIpDetection,
            ipAddressesDetection,
            {
                anonymousIpRestriction: anonymousIpRestriction,
                ipAddresses: options?.ipAddresses,
            },
        );
    }

    public static anonymousIpDetectionIsDisable(
        passServices: string[],
        defaultRestriction: BlockingPolicyModelDefaultRestriction,
        locationDetection: BlockingPolicyModelLocationDetection,
        hostingProviderIpDetection: BlockingPolicyModelHostingProviderIpDetection,
        reputationIpDetection: BlockingPolicyModelReputationIpDetection,
        ipAddressesDetection: BlockingPolicyModelIpAddressesDetection,
        options: BlockingPolicyModelAnonymousIpDetectionIsDisableOptions|null = null,
    ): BlockingPolicyModel {
        return new BlockingPolicyModel(
            passServices,
            defaultRestriction,
            locationDetection,
            BlockingPolicyModelAnonymousIpDetection.DISABLE,
            hostingProviderIpDetection,
            reputationIpDetection,
            ipAddressesDetection,
            {
                ipAddresses: options?.ipAddresses,
            },
        );
    }

    public static hostingProviderIpDetectionIsEnable(
        passServices: string[],
        defaultRestriction: BlockingPolicyModelDefaultRestriction,
        locationDetection: BlockingPolicyModelLocationDetection,
        anonymousIpDetection: BlockingPolicyModelAnonymousIpDetection,
        reputationIpDetection: BlockingPolicyModelReputationIpDetection,
        ipAddressesDetection: BlockingPolicyModelIpAddressesDetection,
        hostingProviderIpRestriction: BlockingPolicyModelHostingProviderIpRestriction,
        options: BlockingPolicyModelHostingProviderIpDetectionIsEnableOptions|null = null,
    ): BlockingPolicyModel {
        return new BlockingPolicyModel(
            passServices,
            defaultRestriction,
            locationDetection,
            anonymousIpDetection,
            BlockingPolicyModelHostingProviderIpDetection.ENABLE,
            reputationIpDetection,
            ipAddressesDetection,
            {
                hostingProviderIpRestriction: hostingProviderIpRestriction,
                ipAddresses: options?.ipAddresses,
            },
        );
    }

    public static hostingProviderIpDetectionIsDisable(
        passServices: string[],
        defaultRestriction: BlockingPolicyModelDefaultRestriction,
        locationDetection: BlockingPolicyModelLocationDetection,
        anonymousIpDetection: BlockingPolicyModelAnonymousIpDetection,
        reputationIpDetection: BlockingPolicyModelReputationIpDetection,
        ipAddressesDetection: BlockingPolicyModelIpAddressesDetection,
        options: BlockingPolicyModelHostingProviderIpDetectionIsDisableOptions|null = null,
    ): BlockingPolicyModel {
        return new BlockingPolicyModel(
            passServices,
            defaultRestriction,
            locationDetection,
            anonymousIpDetection,
            BlockingPolicyModelHostingProviderIpDetection.DISABLE,
            reputationIpDetection,
            ipAddressesDetection,
            {
                ipAddresses: options?.ipAddresses,
            },
        );
    }

    public static reputationIpDetectionIsEnable(
        passServices: string[],
        defaultRestriction: BlockingPolicyModelDefaultRestriction,
        locationDetection: BlockingPolicyModelLocationDetection,
        anonymousIpDetection: BlockingPolicyModelAnonymousIpDetection,
        hostingProviderIpDetection: BlockingPolicyModelHostingProviderIpDetection,
        ipAddressesDetection: BlockingPolicyModelIpAddressesDetection,
        reputationIpRestriction: BlockingPolicyModelReputationIpRestriction,
        options: BlockingPolicyModelReputationIpDetectionIsEnableOptions|null = null,
    ): BlockingPolicyModel {
        return new BlockingPolicyModel(
            passServices,
            defaultRestriction,
            locationDetection,
            anonymousIpDetection,
            hostingProviderIpDetection,
            BlockingPolicyModelReputationIpDetection.ENABLE,
            ipAddressesDetection,
            {
                reputationIpRestriction: reputationIpRestriction,
                ipAddresses: options?.ipAddresses,
            },
        );
    }

    public static reputationIpDetectionIsDisable(
        passServices: string[],
        defaultRestriction: BlockingPolicyModelDefaultRestriction,
        locationDetection: BlockingPolicyModelLocationDetection,
        anonymousIpDetection: BlockingPolicyModelAnonymousIpDetection,
        hostingProviderIpDetection: BlockingPolicyModelHostingProviderIpDetection,
        ipAddressesDetection: BlockingPolicyModelIpAddressesDetection,
        options: BlockingPolicyModelReputationIpDetectionIsDisableOptions|null = null,
    ): BlockingPolicyModel {
        return new BlockingPolicyModel(
            passServices,
            defaultRestriction,
            locationDetection,
            anonymousIpDetection,
            hostingProviderIpDetection,
            BlockingPolicyModelReputationIpDetection.DISABLE,
            ipAddressesDetection,
            {
                ipAddresses: options?.ipAddresses,
            },
        );
    }

    public static ipAddressesDetectionIsEnable(
        passServices: string[],
        defaultRestriction: BlockingPolicyModelDefaultRestriction,
        locationDetection: BlockingPolicyModelLocationDetection,
        anonymousIpDetection: BlockingPolicyModelAnonymousIpDetection,
        hostingProviderIpDetection: BlockingPolicyModelHostingProviderIpDetection,
        reputationIpDetection: BlockingPolicyModelReputationIpDetection,
        ipAddressRestriction: BlockingPolicyModelIpAddressRestriction,
        options: BlockingPolicyModelIpAddressesDetectionIsEnableOptions|null = null,
    ): BlockingPolicyModel {
        return new BlockingPolicyModel(
            passServices,
            defaultRestriction,
            locationDetection,
            anonymousIpDetection,
            hostingProviderIpDetection,
            reputationIpDetection,
            BlockingPolicyModelIpAddressesDetection.ENABLE,
            {
                ipAddressRestriction: ipAddressRestriction,
                ipAddresses: options?.ipAddresses,
            },
        );
    }

    public static ipAddressesDetectionIsDisable(
        passServices: string[],
        defaultRestriction: BlockingPolicyModelDefaultRestriction,
        locationDetection: BlockingPolicyModelLocationDetection,
        anonymousIpDetection: BlockingPolicyModelAnonymousIpDetection,
        hostingProviderIpDetection: BlockingPolicyModelHostingProviderIpDetection,
        reputationIpDetection: BlockingPolicyModelReputationIpDetection,
        options: BlockingPolicyModelIpAddressesDetectionIsDisableOptions|null = null,
    ): BlockingPolicyModel {
        return new BlockingPolicyModel(
            passServices,
            defaultRestriction,
            locationDetection,
            anonymousIpDetection,
            hostingProviderIpDetection,
            reputationIpDetection,
            BlockingPolicyModelIpAddressesDetection.DISABLE,
            {
                ipAddresses: options?.ipAddresses,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.passServices != null) {
            properties["passServices"] = this.passServices;
        }
        if (this.defaultRestriction != null) {
            properties["defaultRestriction"] = this.defaultRestriction;
        }
        if (this.locationDetection != null) {
            properties["locationDetection"] = this.locationDetection;
        }
        if (this.locations != null) {
            properties["locations"] = this.locations;
        }
        if (this.locationRestriction != null) {
            properties["locationRestriction"] = this.locationRestriction;
        }
        if (this.anonymousIpDetection != null) {
            properties["anonymousIpDetection"] = this.anonymousIpDetection;
        }
        if (this.anonymousIpRestriction != null) {
            properties["anonymousIpRestriction"] = this.anonymousIpRestriction;
        }
        if (this.hostingProviderIpDetection != null) {
            properties["hostingProviderIpDetection"] = this.hostingProviderIpDetection;
        }
        if (this.hostingProviderIpRestriction != null) {
            properties["hostingProviderIpRestriction"] = this.hostingProviderIpRestriction;
        }
        if (this.reputationIpDetection != null) {
            properties["reputationIpDetection"] = this.reputationIpDetection;
        }
        if (this.reputationIpRestriction != null) {
            properties["reputationIpRestriction"] = this.reputationIpRestriction;
        }
        if (this.ipAddressesDetection != null) {
            properties["ipAddressesDetection"] = this.ipAddressesDetection;
        }
        if (this.ipAddresses != null) {
            properties["ipAddresses"] = this.ipAddresses;
        }
        if (this.ipAddressRestriction != null) {
            properties["ipAddressRestriction"] = this.ipAddressRestriction;
        }

        return properties;
    }
}
