export default class LogSetting {
    loggingNamespaceId: string;
    constructor(loggingNamespaceId: string);
    properties(): {
        [name: string]: any;
    };
}
