import IncreaseCounterByUserId from "../stampSheet/IncreaseCounterByUserId";
export default class CounterModelRef {
    private readonly namespaceName;
    private readonly counterName;
    constructor(namespaceName: string, counterName: string);
    increaseCounter(value: number, userId?: string | null): IncreaseCounterByUserId;
    grn(): string;
}
