import MissionTaskModel from "../MissionTaskModel";
import { MissionGroupModelResetDayOfWeek } from "../enums/MissionGroupModelResetDayOfWeek";
export interface MissionGroupModelOptions {
    metadata?: string | null;
    tasks?: MissionTaskModel[] | null;
    resetDayOfMonth?: number | null;
    resetDayOfWeek?: MissionGroupModelResetDayOfWeek | null;
    resetHour?: number | null;
    completeNotificationNamespaceId?: string | null;
    anchorTimestamp?: number | null;
    days?: number | null;
}
