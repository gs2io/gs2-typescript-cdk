export default abstract class AcquireAction {
    abstract action(): string;
    abstract request(): {
        [name: string]: any;
    };
    properties(): {
        [name: string]: any;
    };
}
