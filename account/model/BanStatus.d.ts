import { BanStatusOptions } from "./options/BanStatusOptions";
export default class BanStatus {
    private readonly reason;
    private readonly releaseTimestamp;
    constructor(reason: string, releaseTimestamp: number, options?: BanStatusOptions | null);
    properties(): {
        [name: string]: any;
    };
}
