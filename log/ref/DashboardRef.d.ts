export default class DashboardRef {
    private readonly namespaceName;
    private readonly dashboardName;
    constructor(namespaceName: string, dashboardName: string);
    grn(): string;
}
