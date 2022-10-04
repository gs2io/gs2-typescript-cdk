import CurrentMessageMasterRef from "./CurrentMessageMasterRef";
import GlobalMessageRef from "./GlobalMessageRef";
import GlobalMessageMasterRef from "./GlobalMessageMasterRef";
import SendMessageByUserId from "../stampSheet/SendMessageByUserId";
import { AcquireAction } from "../../core/model";
import TimeSpan from "../model/TimeSpan";
export default class NamespaceRef {
    private namespaceName;
    constructor(namespaceName: string);
    currentMessageMaster(): CurrentMessageMasterRef;
    globalMessage(globalMessageName: string): GlobalMessageRef;
    globalMessageMaster(globalMessageName: string): GlobalMessageMasterRef;
    sendMessage(metadata: string, readAcquireActions?: AcquireAction[] | null, expiresAt?: number | null, expiresTimeSpan?: TimeSpan | null, userId?: string): SendMessageByUserId;
    grn(): string;
}
