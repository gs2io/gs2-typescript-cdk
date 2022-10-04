import Func from "./Func";
import { CdkResource } from "../model";
export default class GetAttr implements Func {
    key: string;
    constructor(resource?: CdkResource | null, path?: string | null, key?: string | null);
    str(): string;
    static region(): GetAttr;
    static ownerId(): GetAttr;
}
