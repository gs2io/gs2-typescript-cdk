import ReceiveMemberRequest from "../ReceiveMemberRequest";
export interface InboxOptions {
    fromUserIds?: string[] | null;
    receiveMemberRequests?: ReceiveMemberRequest[] | null;
    revision?: number | null;
}
