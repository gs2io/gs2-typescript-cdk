export default class OutputRef {
    private readonly stageName;
    private readonly outputName;
    constructor(stageName: string, outputName: string);
    grn(): string;
}
