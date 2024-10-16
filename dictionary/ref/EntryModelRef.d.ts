import AddEntriesByUserId from "../stampSheet/AddEntriesByUserId";
import DeleteEntriesByUserId from "../stampSheet/DeleteEntriesByUserId";
import VerifyEntryByUserId from "../stampSheet/VerifyEntryByUserId";
import { EntryVerifyType } from "../stampSheet/enum/EntryVerifyType";
export default class EntryModelRef {
    private readonly namespaceName;
    private readonly entryModelName;
    constructor(namespaceName: string, entryModelName: string);
    addEntries(entryModelNames?: string[] | null, userId?: string): AddEntriesByUserId;
    deleteEntries(entryModelNames?: string[] | null, userId?: string): DeleteEntriesByUserId;
    verifyEntry(verifyType: EntryVerifyType, userId?: string): VerifyEntryByUserId;
    grn(): string;
}
