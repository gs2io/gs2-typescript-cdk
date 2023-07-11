import { CalculatedAtOptions } from "./options/CalculatedAtOptions";
export default class CalculatedAt {
    private readonly categoryName;
    private readonly calculatedAt;
    constructor(categoryName: string, calculatedAt: number, options?: CalculatedAtOptions | null);
    properties(): {
        [name: string]: any;
    };
}
