export default abstract class CdkResource {
    resourceName: string;
    dependsOn: string[];
    protected constructor(resourceName: string);
    addDependsOn(resource: CdkResource): CdkResource;
    abstract resourceType(): string;
    abstract properties(): {
        [name: string]: any;
    };
    template(): {
        [name: string]: any;
    };
}
