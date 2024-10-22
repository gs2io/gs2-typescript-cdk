"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BlockingPolicyModelLocationDetection_1 = require("./enum/BlockingPolicyModelLocationDetection");
const BlockingPolicyModelAnonymousIpDetection_1 = require("./enum/BlockingPolicyModelAnonymousIpDetection");
const BlockingPolicyModelHostingProviderIpDetection_1 = require("./enum/BlockingPolicyModelHostingProviderIpDetection");
const BlockingPolicyModelReputationIpDetection_1 = require("./enum/BlockingPolicyModelReputationIpDetection");
const BlockingPolicyModelIpAddressesDetection_1 = require("./enum/BlockingPolicyModelIpAddressesDetection");
class BlockingPolicyModel {
    constructor(passServices, defaultRestriction, locationDetection, anonymousIpDetection, hostingProviderIpDetection, reputationIpDetection, ipAddressesDetection, options = null) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.locations = null;
        this.locationRestriction = null;
        this.anonymousIpRestriction = null;
        this.hostingProviderIpRestriction = null;
        this.reputationIpRestriction = null;
        this.ipAddresses = null;
        this.ipAddressRestriction = null;
        this.passServices = passServices;
        this.defaultRestriction = defaultRestriction;
        this.locationDetection = locationDetection;
        this.anonymousIpDetection = anonymousIpDetection;
        this.hostingProviderIpDetection = hostingProviderIpDetection;
        this.reputationIpDetection = reputationIpDetection;
        this.ipAddressesDetection = ipAddressesDetection;
        this.locations = (_a = options === null || options === void 0 ? void 0 : options.locations) !== null && _a !== void 0 ? _a : null;
        this.locationRestriction = (_b = options === null || options === void 0 ? void 0 : options.locationRestriction) !== null && _b !== void 0 ? _b : null;
        this.anonymousIpRestriction = (_c = options === null || options === void 0 ? void 0 : options.anonymousIpRestriction) !== null && _c !== void 0 ? _c : null;
        this.hostingProviderIpRestriction = (_d = options === null || options === void 0 ? void 0 : options.hostingProviderIpRestriction) !== null && _d !== void 0 ? _d : null;
        this.reputationIpRestriction = (_e = options === null || options === void 0 ? void 0 : options.reputationIpRestriction) !== null && _e !== void 0 ? _e : null;
        this.ipAddresses = (_f = options === null || options === void 0 ? void 0 : options.ipAddresses) !== null && _f !== void 0 ? _f : null;
        this.ipAddressRestriction = (_g = options === null || options === void 0 ? void 0 : options.ipAddressRestriction) !== null && _g !== void 0 ? _g : null;
    }
    static locationDetectionIsEnable(passServices, defaultRestriction, anonymousIpDetection, hostingProviderIpDetection, reputationIpDetection, ipAddressesDetection, locations, locationRestriction, options = null) {
        return new BlockingPolicyModel(passServices, defaultRestriction, BlockingPolicyModelLocationDetection_1.BlockingPolicyModelLocationDetection.ENABLE, anonymousIpDetection, hostingProviderIpDetection, reputationIpDetection, ipAddressesDetection, {
            locations: locations,
            locationRestriction: locationRestriction,
            ipAddresses: options === null || options === void 0 ? void 0 : options.ipAddresses,
        });
    }
    static locationDetectionIsDisable(passServices, defaultRestriction, anonymousIpDetection, hostingProviderIpDetection, reputationIpDetection, ipAddressesDetection, options = null) {
        return new BlockingPolicyModel(passServices, defaultRestriction, BlockingPolicyModelLocationDetection_1.BlockingPolicyModelLocationDetection.DISABLE, anonymousIpDetection, hostingProviderIpDetection, reputationIpDetection, ipAddressesDetection, {
            ipAddresses: options === null || options === void 0 ? void 0 : options.ipAddresses,
        });
    }
    static anonymousIpDetectionIsEnable(passServices, defaultRestriction, locationDetection, hostingProviderIpDetection, reputationIpDetection, ipAddressesDetection, anonymousIpRestriction, options = null) {
        return new BlockingPolicyModel(passServices, defaultRestriction, locationDetection, BlockingPolicyModelAnonymousIpDetection_1.BlockingPolicyModelAnonymousIpDetection.ENABLE, hostingProviderIpDetection, reputationIpDetection, ipAddressesDetection, {
            anonymousIpRestriction: anonymousIpRestriction,
            ipAddresses: options === null || options === void 0 ? void 0 : options.ipAddresses,
        });
    }
    static anonymousIpDetectionIsDisable(passServices, defaultRestriction, locationDetection, hostingProviderIpDetection, reputationIpDetection, ipAddressesDetection, options = null) {
        return new BlockingPolicyModel(passServices, defaultRestriction, locationDetection, BlockingPolicyModelAnonymousIpDetection_1.BlockingPolicyModelAnonymousIpDetection.DISABLE, hostingProviderIpDetection, reputationIpDetection, ipAddressesDetection, {
            ipAddresses: options === null || options === void 0 ? void 0 : options.ipAddresses,
        });
    }
    static hostingProviderIpDetectionIsEnable(passServices, defaultRestriction, locationDetection, anonymousIpDetection, reputationIpDetection, ipAddressesDetection, hostingProviderIpRestriction, options = null) {
        return new BlockingPolicyModel(passServices, defaultRestriction, locationDetection, anonymousIpDetection, BlockingPolicyModelHostingProviderIpDetection_1.BlockingPolicyModelHostingProviderIpDetection.ENABLE, reputationIpDetection, ipAddressesDetection, {
            hostingProviderIpRestriction: hostingProviderIpRestriction,
            ipAddresses: options === null || options === void 0 ? void 0 : options.ipAddresses,
        });
    }
    static hostingProviderIpDetectionIsDisable(passServices, defaultRestriction, locationDetection, anonymousIpDetection, reputationIpDetection, ipAddressesDetection, options = null) {
        return new BlockingPolicyModel(passServices, defaultRestriction, locationDetection, anonymousIpDetection, BlockingPolicyModelHostingProviderIpDetection_1.BlockingPolicyModelHostingProviderIpDetection.DISABLE, reputationIpDetection, ipAddressesDetection, {
            ipAddresses: options === null || options === void 0 ? void 0 : options.ipAddresses,
        });
    }
    static reputationIpDetectionIsEnable(passServices, defaultRestriction, locationDetection, anonymousIpDetection, hostingProviderIpDetection, ipAddressesDetection, reputationIpRestriction, options = null) {
        return new BlockingPolicyModel(passServices, defaultRestriction, locationDetection, anonymousIpDetection, hostingProviderIpDetection, BlockingPolicyModelReputationIpDetection_1.BlockingPolicyModelReputationIpDetection.ENABLE, ipAddressesDetection, {
            reputationIpRestriction: reputationIpRestriction,
            ipAddresses: options === null || options === void 0 ? void 0 : options.ipAddresses,
        });
    }
    static reputationIpDetectionIsDisable(passServices, defaultRestriction, locationDetection, anonymousIpDetection, hostingProviderIpDetection, ipAddressesDetection, options = null) {
        return new BlockingPolicyModel(passServices, defaultRestriction, locationDetection, anonymousIpDetection, hostingProviderIpDetection, BlockingPolicyModelReputationIpDetection_1.BlockingPolicyModelReputationIpDetection.DISABLE, ipAddressesDetection, {
            ipAddresses: options === null || options === void 0 ? void 0 : options.ipAddresses,
        });
    }
    static ipAddressesDetectionIsEnable(passServices, defaultRestriction, locationDetection, anonymousIpDetection, hostingProviderIpDetection, reputationIpDetection, ipAddressRestriction, options = null) {
        return new BlockingPolicyModel(passServices, defaultRestriction, locationDetection, anonymousIpDetection, hostingProviderIpDetection, reputationIpDetection, BlockingPolicyModelIpAddressesDetection_1.BlockingPolicyModelIpAddressesDetection.ENABLE, {
            ipAddressRestriction: ipAddressRestriction,
            ipAddresses: options === null || options === void 0 ? void 0 : options.ipAddresses,
        });
    }
    static ipAddressesDetectionIsDisable(passServices, defaultRestriction, locationDetection, anonymousIpDetection, hostingProviderIpDetection, reputationIpDetection, options = null) {
        return new BlockingPolicyModel(passServices, defaultRestriction, locationDetection, anonymousIpDetection, hostingProviderIpDetection, reputationIpDetection, BlockingPolicyModelIpAddressesDetection_1.BlockingPolicyModelIpAddressesDetection.DISABLE, {
            ipAddresses: options === null || options === void 0 ? void 0 : options.ipAddresses,
        });
    }
    properties() {
        let properties = {};
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
exports.default = BlockingPolicyModel;
//# sourceMappingURL=BlockingPolicyModel.js.map