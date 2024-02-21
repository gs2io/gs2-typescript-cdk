import CategoryModelRef from "./CategoryModelRef";
import IncreaseMaximumIdleMinutesByUserId from "../stampSheet/IncreaseMaximumIdleMinutesByUserId";
import SetMaximumIdleMinutesByUserId from "../stampSheet/SetMaximumIdleMinutesByUserId";
import DecreaseMaximumIdleMinutesByUserId from "../stampSheet/DecreaseMaximumIdleMinutesByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    categoryModel(categoryName: string): CategoryModelRef;
    increaseMaximumIdleMinutes(categoryName: string, increaseMinutes?: number | null, userId?: string): IncreaseMaximumIdleMinutesByUserId;
    setMaximumIdleMinutes(categoryName: string, maximumIdleMinutes?: number | null, userId?: string): SetMaximumIdleMinutesByUserId;
    decreaseMaximumIdleMinutes(categoryName: string, decreaseMinutes?: number | null, userId?: string): DecreaseMaximumIdleMinutesByUserId;
    grn(): string;
}
