import CategoryModelRef from "./CategoryModelRef";
import IncreaseMaximumIdleMinutesByUserId from "../stampSheet/IncreaseMaximumIdleMinutesByUserId";
import DecreaseMaximumIdleMinutesByUserId from "../stampSheet/DecreaseMaximumIdleMinutesByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    categoryModel(categoryName: string): CategoryModelRef;
    increaseMaximumIdleMinutes(categoryName: string, increaseMinutes?: number | null, userId?: string): IncreaseMaximumIdleMinutesByUserId;
    decreaseMaximumIdleMinutes(categoryName: string, decreaseMinutes?: number | null, userId?: string): DecreaseMaximumIdleMinutesByUserId;
    grn(): string;
}
