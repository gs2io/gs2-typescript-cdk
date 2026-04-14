export declare const LogEntryStatus: {
    readonly OK: "ok";
    readonly INFO: "info";
    readonly NOTICE: "notice";
    readonly ERROR: "error";
    readonly WARN: "warn";
    readonly EMAG: "emag";
};
export type LogEntryStatus = typeof LogEntryStatus[keyof typeof LogEntryStatus];
