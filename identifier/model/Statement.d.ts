export default class Statement {
    private effect;
    private actions;
    constructor(effect: string, actions: string[]);
    static allow(actions: string[]): Statement;
    static allowAll(): Statement;
    static deny(actions: string[]): Statement;
    static denyAll(): Statement;
    action(action: string): Statement;
    properties(): {
        [name: string]: any;
    };
}
