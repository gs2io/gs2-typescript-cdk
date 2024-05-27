import GlobalRankingSetting from "./GlobalRankingSetting";
import { CategoryModelOptions } from "./options/CategoryModelOptions";
import { CategoryModelScopeIsGlobalOptions } from "./options/CategoryModelScopeIsGlobalOptions";
import { CategoryModelScopeIsScopedOptions } from "./options/CategoryModelScopeIsScopedOptions";
import { CategoryModelOrderDirection } from "./enum/CategoryModelOrderDirection";
import { CategoryModelScope } from "./enum/CategoryModelScope";
export default class CategoryModel {
    private readonly name;
    private readonly sum;
    private readonly orderDirection;
    private readonly scope;
    private readonly metadata;
    private readonly minimumValue;
    private readonly maximumValue;
    private readonly globalRankingSetting;
    private readonly entryPeriodEventId;
    private readonly accessPeriodEventId;
    private readonly uniqueByUserId;
    private readonly calculateFixedTimingHour;
    private readonly calculateFixedTimingMinute;
    private readonly calculateIntervalMinutes;
    private readonly additionalScopes;
    private readonly ignoreUserIds;
    private readonly generation;
    constructor(name: string, sum: boolean, orderDirection: CategoryModelOrderDirection, scope: CategoryModelScope, options?: CategoryModelOptions | null);
    static scopeIsGlobal(name: string, sum: boolean, orderDirection: CategoryModelOrderDirection, globalRankingSetting: GlobalRankingSetting, uniqueByUserId: boolean, calculateIntervalMinutes: number, options?: CategoryModelScopeIsGlobalOptions | null): CategoryModel;
    static scopeIsScoped(name: string, sum: boolean, orderDirection: CategoryModelOrderDirection, options?: CategoryModelScopeIsScopedOptions | null): CategoryModel;
    properties(): {
        [name: string]: any;
    };
}
