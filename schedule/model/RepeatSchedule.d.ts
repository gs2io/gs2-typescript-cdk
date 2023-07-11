import { RepeatScheduleOptions } from "./options/RepeatScheduleOptions";
export default class RepeatSchedule {
    private readonly repeatCount;
    private readonly currentRepeatStartAt;
    private readonly currentRepeatEndAt;
    private readonly lastRepeatEndAt;
    private readonly nextRepeatStartAt;
    constructor(repeatCount: number, options?: RepeatScheduleOptions | null);
    properties(): {
        [name: string]: any;
    };
}
