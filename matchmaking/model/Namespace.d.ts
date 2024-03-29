import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NamespaceRef from "../ref/NamespaceRef";
import RatingModel from "./RatingModel";
import { NamespaceCreateGatheringTriggerType } from "./enum/NamespaceCreateGatheringTriggerType";
import { NamespaceCompleteMatchmakingTriggerType } from "./enum/NamespaceCompleteMatchmakingTriggerType";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly createGatheringTriggerType;
    private readonly completeMatchmakingTriggerType;
    private readonly description;
    private readonly enableRating;
    private readonly createGatheringTriggerRealtimeNamespaceId;
    private readonly createGatheringTriggerScriptId;
    private readonly completeMatchmakingTriggerRealtimeNamespaceId;
    private readonly completeMatchmakingTriggerScriptId;
    private readonly changeRatingScript;
    private readonly joinNotification;
    private readonly leaveNotification;
    private readonly completeNotification;
    private readonly changeRatingNotification;
    private readonly logSetting;
    constructor(stack: Stack, name: string, createGatheringTriggerType: NamespaceCreateGatheringTriggerType, completeMatchmakingTriggerType: NamespaceCompleteMatchmakingTriggerType, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(ratingModels: RatingModel[]): Namespace;
}
