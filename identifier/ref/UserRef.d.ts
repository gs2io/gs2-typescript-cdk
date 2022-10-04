import IdentifierRef from "./IdentifierRef";
export default class UserRef {
    private userName;
    constructor(userName: string);
    identifier(userName: string): IdentifierRef;
    grn(): string;
}
