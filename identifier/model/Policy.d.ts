import Statement from "./Statement";
export default class Policy {
    private version;
    private statements;
    constructor(statements: Statement[]);
    properties(): {
        [name: string]: any;
    };
}
