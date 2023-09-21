import Version from "./Version";
import { ScheduleVersionOptions } from "./options/ScheduleVersionOptions";
export default class ScheduleVersion {
    private readonly currentVersion;
    private readonly warningVersion;
    private readonly errorVersion;
    private readonly scheduleEventId;
    constructor(currentVersion: Version, warningVersion: Version, errorVersion: Version, options?: ScheduleVersionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
