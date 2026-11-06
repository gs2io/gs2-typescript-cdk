export declare const NamespaceServerType: {
    readonly RELAY: "relay";
    readonly SYNC: "sync";
    readonly STATE_MACHINE: "stateMachine";
};
export type NamespaceServerType = typeof NamespaceServerType[keyof typeof NamespaceServerType];
