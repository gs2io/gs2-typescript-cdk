import { SerialKeyOptions } from "./options/SerialKeyOptions";
import { SerialKeyStatusIsActiveOptions } from "./options/SerialKeyStatusIsActiveOptions";
import { SerialKeyStatusIsUsedOptions } from "./options/SerialKeyStatusIsUsedOptions";
import { SerialKeyStatusIsInactiveOptions } from "./options/SerialKeyStatusIsInactiveOptions";
import { SerialKeyStatus } from "./enums/SerialKeyStatus";
export default class SerialKey {
    private readonly campaignModelName;
    private readonly code;
    private readonly status;
    private readonly createdAt;
    private readonly updatedAt;
    private readonly metadata;
    private readonly usedUserId;
    private readonly usedAt;
    constructor(campaignModelName: string, code: string, status: SerialKeyStatus, createdAt: number, updatedAt: number, options?: SerialKeyOptions | null);
    static statusIsActive(campaignModelName: string, code: string, createdAt: number, updatedAt: number, options?: SerialKeyStatusIsActiveOptions | null): SerialKey;
    static statusIsUsed(campaignModelName: string, code: string, createdAt: number, updatedAt: number, usedUserId: string, options?: SerialKeyStatusIsUsedOptions | null): SerialKey;
    static statusIsInactive(campaignModelName: string, code: string, createdAt: number, updatedAt: number, options?: SerialKeyStatusIsInactiveOptions | null): SerialKey;
    properties(): {
        [name: string]: any;
    };
}
