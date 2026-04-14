import { LogEntryOptions } from "./options/LogEntryOptions";
import { LogEntryStatus } from "./enums/LogEntryStatus";
export default class LogEntry {
    private readonly timestamp;
    private readonly status;
    private readonly duration;
    private readonly line;
    private readonly labels;
    constructor(timestamp: number, status: LogEntryStatus, duration: number, line: string, options?: LogEntryOptions | null);
    properties(): {
        [name: string]: any;
    };
}
