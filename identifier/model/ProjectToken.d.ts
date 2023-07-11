import { ProjectTokenOptions } from "./options/ProjectTokenOptions";
export default class ProjectToken {
    private readonly token;
    constructor(options?: ProjectTokenOptions | null);
    properties(): {
        [name: string]: any;
    };
}
