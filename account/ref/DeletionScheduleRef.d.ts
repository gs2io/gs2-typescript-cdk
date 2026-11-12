export default class DeletionScheduleRef {
    private readonly namespaceName;
    private readonly scheduleKey;
    constructor(namespaceName: string, scheduleKey: string);
    grn(): string;
}
