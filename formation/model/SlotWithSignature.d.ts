import { SlotWithSignatureOptions } from "./options/SlotWithSignatureOptions";
import { SlotWithSignaturePropertyType } from "./enum/SlotWithSignaturePropertyType";
export default class SlotWithSignature {
    private readonly name;
    private readonly propertyType;
    private readonly body;
    private readonly signature;
    private readonly metadata;
    constructor(name: string, propertyType: SlotWithSignaturePropertyType, body: string, signature: string, options?: SlotWithSignatureOptions | null);
    properties(): {
        [name: string]: any;
    };
}
