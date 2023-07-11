import MissionTaskModel from "../MissionTaskModel";
export interface MissionGroupModelResetTypeIsMonthlyOptions {
    metadata?: string | null;
    tasks?: MissionTaskModel[] | null;
    completeNotificationNamespaceId?: string | null;
}
