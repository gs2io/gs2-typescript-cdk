import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import RoomRef from "../ref/RoomRef";
import { RoomOptions } from "./options/RoomOptions";
export default class Room extends CdkResource {
    private readonly stack;
    private readonly ownerId;
    private readonly namespaceName;
    private readonly name;
    private readonly ipAddress;
    private readonly port;
    private readonly encryptionKey;
    constructor(stack: Stack, ownerId: string, namespaceName: string, name: string, options?: RoomOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): RoomRef;
    getAttrRoomId(): GetAttr;
}
