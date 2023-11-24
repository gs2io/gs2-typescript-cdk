import { CategoryModelOptions } from "./options/CategoryModelOptions";
import { CategoryModelScopeIsGlobalOptions } from "./options/CategoryModelScopeIsGlobalOptions";
import { CategoryModelScopeIsScopedOptions } from "./options/CategoryModelScopeIsScopedOptions";
import { CategoryModelOrderDirection } from "./enum/CategoryModelOrderDirection";
import { CategoryModelScope } from "./enum/CategoryModelScope";
export default class CategoryModel {
    private readonly name;
    private readonly orderDirection;
    private readonly scope;
    private readonly metadata;
    private readonly minimumValue;
    private readonly maximumValue;
    private readonly uniqueByUserId;
    private readonly sum;
    private readonly calculateFixedTimingHour;
    private readonly calculateFixedTimingMinute;
    private readonly calculateIntervalMinutes;
    private readonly additionalScopes;
    private readonly entryPeriodEventId;
    private readonly accessPeriodEventId;
    private readonly ignoreUserIds;
    private readonly generation;
    constructor(name: string, orderDirection: CategoryModelOrderDirection, scope: CategoryModelScope, options?: CategoryModelOptions | null);
    static scopeIsGlobal(name: string, orderDirection: CategoryModelOrderDirection, uniqueByUserId: boolean, calculateIntervalMinutes: number, options?: CategoryModelScopeIsGlobalOptions | null): CategoryModel;
    static scopeIsScoped(name: string, orderDirection: CategoryModelOrderDirection, options?: CategoryModelScopeIsScopedOptions | null): CategoryModel;
    properties(): {
        [name: string]: any;
    };
}
