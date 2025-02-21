import { SlotWithSignatureOptions } from "./options/SlotWithSignatureOptions";
import { SlotWithSignaturePropertyType } from "./enums/SlotWithSignaturePropertyType";
export default class SlotWithSignature {
    private readonly name;
    private readonly propertyType;
    private readonly body;
    private readonly signature;
    private readonly metadata;
    constructor(name: string, propertyType: SlotWithSignaturePropertyType, options?: SlotWithSignatureOptions | null);
    properties(): {
        [name: string]: any;
    };
}
