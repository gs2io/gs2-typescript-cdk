import EntryModelRef from "./EntryModelRef";
import AddEntriesByUserId from "../stampSheet/AddEntriesByUserId";
import DeleteEntriesByUserId from "../stampSheet/DeleteEntriesByUserId";
import VerifyEntryByUserId from "../stampSheet/VerifyEntryByUserId";
import { EntryVerifyType } from "../stampSheet/enum/EntryVerifyType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    entryModel(entryName: string): EntryModelRef;
    addEntries(entryModelNames?: string[] | null, userId?: string): AddEntriesByUserId;
    deleteEntries(entryModelNames?: string[] | null, userId?: string): DeleteEntriesByUserId;
    verifyEntry(entryModelName: string, verifyType: EntryVerifyType, userId?: string): VerifyEntryByUserId;
    grn(): string;
}
