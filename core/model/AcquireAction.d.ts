export default class AcquireAction {
    action: string;
    request: {
        [name: string]: any;
    };
    constructor(action: string, request: {
        [name: string]: any;
    });
    properties(): {
        [name: string]: any;
    };
}
