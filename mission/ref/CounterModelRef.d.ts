import IncreaseCounterByUserId from "../stampSheet/IncreaseCounterByUserId";
import DecreaseCounterByUserId from "../stampSheet/DecreaseCounterByUserId";
export default class CounterModelRef {
    private readonly namespaceName;
    private readonly counterName;
    constructor(namespaceName: string, counterName: string);
    increaseCounter(value: number, userId?: string | null): IncreaseCounterByUserId;
    decreaseCounter(value: number, userId?: string | null): DecreaseCounterByUserId;
    grn(): string;
}
