import * as model from "./model";
import * as ref from "./ref";
import * as stampSheet from "./stampSheet";
import { NamespaceRef } from "./ref";
declare function namespace(namespaceName: string): NamespaceRef;
declare const _default: {
    model: typeof model;
    ref: typeof ref;
    stampSheet: typeof stampSheet;
    namespace: typeof namespace;
};
export default _default;
