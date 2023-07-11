export default class RoomRef {
    private readonly namespaceName;
    private readonly roomName;
    constructor(namespaceName: string, roomName: string);
    grn(): string;
}
