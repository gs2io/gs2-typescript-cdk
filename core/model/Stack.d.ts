import CdkResource from "./CdkResource";
export default class Stack {
    resources: CdkResource[];
    outputs: {
        [name: string]: string;
    };
    constructor();
    addResource(resource: CdkResource): void;
    output(name: string, path: string): void;
    template(): {
        [name: string]: any;
    };
    yaml(): string;
}
