import MissionTaskModel from "../MissionTaskModel";
export interface MissionGroupModelResetTypeIsWeeklyOptions {
    metadata?: string | null;
    tasks?: MissionTaskModel[] | null;
    completeNotificationNamespaceId?: string | null;
}
