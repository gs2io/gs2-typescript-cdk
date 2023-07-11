import EntryModelRef from "./EntryModelRef";
import AddEntriesByUserId from "../stampSheet/AddEntriesByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    entryModel(entryName: string): EntryModelRef;
    addEntries(entryModelNames?: string[] | null, userId?: string | null): AddEntriesByUserId;
    grn(): string;
}
