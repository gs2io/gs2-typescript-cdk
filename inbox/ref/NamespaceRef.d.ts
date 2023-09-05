import GlobalMessageRef from "./GlobalMessageRef";
import SendMessageByUserId from "../stampSheet/SendMessageByUserId";
import { AcquireAction } from "../../core/model";
import TimeSpan from "../model/TimeSpan";
import OpenMessageByUserId from "../stampSheet/OpenMessageByUserId";
import DeleteMessageByUserId from "../stampSheet/DeleteMessageByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    globalMessage(globalMessageName: string): GlobalMessageRef;
    sendMessage(metadata: string, readAcquireActions?: AcquireAction[] | null, expiresAt?: number | null, expiresTimeSpan?: TimeSpan | null, userId?: string | null): SendMessageByUserId;
    openMessage(messageName: string, userId?: string | null): OpenMessageByUserId;
    deleteMessage(messageName: string, userId?: string | null): DeleteMessageByUserId;
    grn(): string;
}
