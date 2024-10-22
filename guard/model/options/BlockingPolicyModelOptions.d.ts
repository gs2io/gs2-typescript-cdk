import { BlockingPolicyModelLocationRestriction } from "../enum/BlockingPolicyModelLocationRestriction";
import { BlockingPolicyModelAnonymousIpRestriction } from "../enum/BlockingPolicyModelAnonymousIpRestriction";
import { BlockingPolicyModelHostingProviderIpRestriction } from "../enum/BlockingPolicyModelHostingProviderIpRestriction";
import { BlockingPolicyModelReputationIpRestriction } from "../enum/BlockingPolicyModelReputationIpRestriction";
import { BlockingPolicyModelIpAddressRestriction } from "../enum/BlockingPolicyModelIpAddressRestriction";
export interface BlockingPolicyModelOptions {
    locations?: string[] | null;
    locationRestriction?: BlockingPolicyModelLocationRestriction | null;
    anonymousIpRestriction?: BlockingPolicyModelAnonymousIpRestriction | null;
    hostingProviderIpRestriction?: BlockingPolicyModelHostingProviderIpRestriction | null;
    reputationIpRestriction?: BlockingPolicyModelReputationIpRestriction | null;
    ipAddresses?: string[] | null;
    ipAddressRestriction?: BlockingPolicyModelIpAddressRestriction | null;
}
