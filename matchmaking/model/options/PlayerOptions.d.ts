import Attribute from "../Attribute";
export interface PlayerOptions {
    attributes?: Attribute[] | null;
    denyUserIds?: string[] | null;
}
