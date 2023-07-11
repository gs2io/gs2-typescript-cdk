import { MissionGroupModelOptions } from "./options/MissionGroupModelOptions";
import { MissionGroupModelResetTypeIsNotResetOptions } from "./options/MissionGroupModelResetTypeIsNotResetOptions";
import { MissionGroupModelResetTypeIsDailyOptions } from "./options/MissionGroupModelResetTypeIsDailyOptions";
import { MissionGroupModelResetTypeIsWeeklyOptions } from "./options/MissionGroupModelResetTypeIsWeeklyOptions";
import { MissionGroupModelResetTypeIsMonthlyOptions } from "./options/MissionGroupModelResetTypeIsMonthlyOptions";
import { MissionGroupModelResetType } from "./enum/MissionGroupModelResetType";
import { MissionGroupModelResetDayOfWeek } from "./enum/MissionGroupModelResetDayOfWeek";
export default class MissionGroupModel {
    private readonly name;
    private readonly resetType;
    private readonly metadata;
    private readonly tasks;
    private readonly resetDayOfMonth;
    private readonly resetDayOfWeek;
    private readonly resetHour;
    private readonly completeNotificationNamespaceId;
    constructor(name: string, resetType: MissionGroupModelResetType, options?: MissionGroupModelOptions | null);
    static resetTypeIsNotReset(name: string, options?: MissionGroupModelResetTypeIsNotResetOptions | null): MissionGroupModel;
    static resetTypeIsDaily(name: string, resetHour: number, options?: MissionGroupModelResetTypeIsDailyOptions | null): MissionGroupModel;
    static resetTypeIsWeekly(name: string, resetDayOfWeek: MissionGroupModelResetDayOfWeek, resetHour: number, options?: MissionGroupModelResetTypeIsWeeklyOptions | null): MissionGroupModel;
    static resetTypeIsMonthly(name: string, resetDayOfMonth: number, resetHour: number, options?: MissionGroupModelResetTypeIsMonthlyOptions | null): MissionGroupModel;
    properties(): {
        [name: string]: any;
    };
}
