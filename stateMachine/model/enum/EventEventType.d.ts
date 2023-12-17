export declare const EventEventType: {
    readonly CHANGE_STATE: "change_state";
    readonly EMIT: "emit";
};
export type EventEventType = typeof EventEventType[keyof typeof EventEventType];
