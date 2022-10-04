export interface ProjectTokenOptions {
    token?: string | null | undefined;
}
export default class ProjectToken {
    private readonly token;
    constructor(options?: ProjectTokenOptions);
    properties(): {
        [name: string]: any;
    };
}
