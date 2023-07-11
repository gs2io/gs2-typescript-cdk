import { ViewOptions } from "./options/ViewOptions";
export default class View {
    private readonly contents;
    private readonly removeContents;
    constructor(options?: ViewOptions | null);
    properties(): {
        [name: string]: any;
    };
}
