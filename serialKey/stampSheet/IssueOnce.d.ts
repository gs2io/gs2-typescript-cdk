import { AcquireAction } from "../../core/model";
export default class IssueOnce extends AcquireAction {
    private readonly namespaceName;
    private readonly campaignModelName;
    private readonly metadata;
    constructor(namespaceName: string, campaignModelName: string, metadata?: string | null);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
