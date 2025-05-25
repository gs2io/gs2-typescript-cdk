import { MicroserviceOptions } from "./options/MicroserviceOptions";
export default class Microservice {
    private readonly name;
    private readonly version;
    constructor(name: string, version: string, options?: MicroserviceOptions | null);
    properties(): {
        [name: string]: any;
    };
}
