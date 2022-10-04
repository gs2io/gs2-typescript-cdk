import AcquireAction from "../../core/model/AcquireAction";
import TimeSpan from "../model/TimeSpan";
import GlobalMessageRef from "../ref/GlobalMessageRef";
export interface GlobalMessageOptions {
    readAcquireActions?: AcquireAction[] | null | undefined;
    expiresTimeSpan?: TimeSpan | null | undefined;
    expiresAt?: number | null | undefined;
}
export default class GlobalMessage {
    private readonly name;
    private readonly metadata;
    private readonly readAcquireActions;
    private readonly expiresTimeSpan;
    private readonly expiresAt;
    constructor(name: string, metadata: string, options?: GlobalMessageOptions);
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): GlobalMessageRef;
}
