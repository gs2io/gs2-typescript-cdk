import { TimeseriesMetadataOptions } from "./options/TimeseriesMetadataOptions";
export default class TimeseriesMetadata {
    private readonly keys;
    private readonly groupBy;
    constructor(options?: TimeseriesMetadataOptions | null);
    properties(): {
        [name: string]: any;
    };
}
