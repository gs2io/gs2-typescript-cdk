import { CategoryModelOptions } from "./options/CategoryModelOptions";
export default class CategoryModel {
    private readonly category;
    private readonly rejectAccessTokenPost;
    constructor(category: number, options?: CategoryModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
