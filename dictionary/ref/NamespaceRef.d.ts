import EntryModelRef from "./EntryModelRef";
import AddEntriesByUserId from "../stampSheet/AddEntriesByUserId";
import DeleteEntriesByUserId from "../stampSheet/DeleteEntriesByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    entryModel(entryName: string): EntryModelRef;
    addEntries(entryModelNames?: string[] | null, userId?: string | null): AddEntriesByUserId;
    deleteEntries(entryModelNames?: string[] | null, userId?: string | null): DeleteEntriesByUserId;
    grn(): string;
}
