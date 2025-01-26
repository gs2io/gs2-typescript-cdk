import MissionTaskModel from "../MissionTaskModel";
export interface MissionGroupModelResetTypeIsDaysOptions {
    metadata?: string | null;
    tasks?: MissionTaskModel[] | null;
    completeNotificationNamespaceId?: string | null;
}
