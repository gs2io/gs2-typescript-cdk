export default abstract class ConsumeAction {
    abstract action(): string;
    abstract request(): {
        [name: string]: any;
    };
    properties(): {
        [name: string]: any;
    };
}
