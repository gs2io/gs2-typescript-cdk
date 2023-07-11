import CategoryModelRef from "./CategoryModelRef";
import IncreaseMaximumIdleMinutesByUserId from "../stampSheet/IncreaseMaximumIdleMinutesByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    categoryModel(categoryName: string): CategoryModelRef;
    increaseMaximumIdleMinutes(categoryName: string, increaseMinutes?: number | null, userId?: string | null): IncreaseMaximumIdleMinutesByUserId;
    grn(): string;
}
