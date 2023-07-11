import MissionTaskModel from "../MissionTaskModel";
export interface MissionGroupModelResetTypeIsNotResetOptions {
    metadata?: string | null;
    tasks?: MissionTaskModel[] | null;
    completeNotificationNamespaceId?: string | null;
}
