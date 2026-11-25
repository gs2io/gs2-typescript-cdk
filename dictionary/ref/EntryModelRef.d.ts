import AddEntriesByUserId from "../stampSheet/AddEntriesByUserId";
import DeleteEntriesByUserId from "../stampSheet/DeleteEntriesByUserId";
import VerifyEntryByUserId from "../stampSheet/VerifyEntryByUserId";
import { EntryVerifyType } from "../stampSheet/enums/EntryVerifyType";
import VerifyEntryCountByUserId from "../stampSheet/VerifyEntryCountByUserId";
export default class EntryModelRef {
    private readonly namespaceName;
    private readonly entryModelName;
    constructor(namespaceName: string, entryModelName: string);
    addEntries(entryModelNames?: string[] | null, userId?: string): AddEntriesByUserId;
    deleteEntries(entryModelNames?: string[] | null, userId?: string): DeleteEntriesByUserId;
    verifyEntry(verifyType: EntryVerifyType, userId?: string): VerifyEntryByUserId;
    verifyEntryCount(verifyType: EntryVerifyType, count: number, entryModelNames?: string[] | null, userId?: string): VerifyEntryCountByUserId;
    grn(): string;
}
