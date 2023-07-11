import MissionTaskModel from "../MissionTaskModel";
export interface MissionGroupModelResetTypeIsDailyOptions {
    metadata?: string | null;
    tasks?: MissionTaskModel[] | null;
    completeNotificationNamespaceId?: string | null;
}
