import AddEntriesByUserId from "../stampSheet/AddEntriesByUserId";
import DeleteEntriesByUserId from "../stampSheet/DeleteEntriesByUserId";
export default class EntryModelRef {
    private readonly namespaceName;
    private readonly entryName;
    constructor(namespaceName: string, entryName: string);
    addEntries(entryModelNames?: string[] | null, userId?: string | null): AddEntriesByUserId;
    deleteEntries(entryModelNames?: string[] | null, userId?: string | null): DeleteEntriesByUserId;
    grn(): string;
}
