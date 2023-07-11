import AddEntriesByUserId from "../stampSheet/AddEntriesByUserId";
export default class EntryModelRef {
    private readonly namespaceName;
    private readonly entryName;
    constructor(namespaceName: string, entryName: string);
    addEntries(entryModelNames?: string[] | null, userId?: string | null): AddEntriesByUserId;
    grn(): string;
}
