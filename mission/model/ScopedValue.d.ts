import { ScopedValueOptions } from "./options/ScopedValueOptions";
import { ScopedValueResetType } from "./enum/ScopedValueResetType";
export default class ScopedValue {
    private readonly resetType;
    private readonly value;
    private readonly updatedAt;
    private readonly nextResetAt;
    constructor(resetType: ScopedValueResetType, value: number, updatedAt: number, options?: ScopedValueOptions | null);
    properties(): {
        [name: string]: any;
    };
}
