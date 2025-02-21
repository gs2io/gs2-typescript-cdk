import { BlockingPolicyModelLocationRestriction } from "../enums/BlockingPolicyModelLocationRestriction";
import { BlockingPolicyModelAnonymousIpRestriction } from "../enums/BlockingPolicyModelAnonymousIpRestriction";
import { BlockingPolicyModelHostingProviderIpRestriction } from "../enums/BlockingPolicyModelHostingProviderIpRestriction";
import { BlockingPolicyModelReputationIpRestriction } from "../enums/BlockingPolicyModelReputationIpRestriction";
import { BlockingPolicyModelIpAddressRestriction } from "../enums/BlockingPolicyModelIpAddressRestriction";
export interface BlockingPolicyModelOptions {
    locations?: string[] | null;
    locationRestriction?: BlockingPolicyModelLocationRestriction | null;
    anonymousIpRestriction?: BlockingPolicyModelAnonymousIpRestriction | null;
    hostingProviderIpRestriction?: BlockingPolicyModelHostingProviderIpRestriction | null;
    reputationIpRestriction?: BlockingPolicyModelReputationIpRestriction | null;
    ipAddresses?: string[] | null;
    ipAddressRestriction?: BlockingPolicyModelIpAddressRestriction | null;
}
