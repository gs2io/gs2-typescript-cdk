import InsightRef from "./InsightRef";
export default class NamespaceRef {
    private namespaceName;
    constructor(namespaceName: string);
    insight(insightName: string): InsightRef;
    grn(): string;
}
