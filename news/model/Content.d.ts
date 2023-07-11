import { ContentOptions } from "./options/ContentOptions";
export default class Content {
    private readonly section;
    private readonly content;
    private readonly frontMatter;
    constructor(section: string, content: string, frontMatter: string, options?: ContentOptions | null);
    properties(): {
        [name: string]: any;
    };
}
