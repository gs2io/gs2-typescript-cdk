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
    sendMessage(metadata: string, readAcquireActions?: AcquireAction[] | null, expiresAt?: number | null, expiresTimeSpan?: TimeSpan | null, userId?: string): SendMessageByUserId;
    openMessage(messageName?: string | null, userId?: string): OpenMessageByUserId;
    deleteMessage(messageName?: string | null, userId?: string): DeleteMessageByUserId;
    grn(): string;
}
