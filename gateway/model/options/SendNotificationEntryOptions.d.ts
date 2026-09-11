import MobileNotificationMessage from "../MobileNotificationMessage";
export interface SendNotificationEntryOptions {
    sound?: string | null;
    mobileNotificationMessages?: MobileNotificationMessage[] | null;
}
