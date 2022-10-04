export default class Config {
    key: string;
    value: string;
    constructor(key: string, value: string);
    properties(): {
        [name: string]: any;
    };
}
