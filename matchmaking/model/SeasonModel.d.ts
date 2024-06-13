import { SeasonModelOptions } from "./options/SeasonModelOptions";
export default class SeasonModel {
    private readonly name;
    private readonly maximumParticipants;
    private readonly challengePeriodEventId;
    private readonly metadata;
    private readonly experienceModelId;
    constructor(name: string, maximumParticipants: number, challengePeriodEventId: string, options?: SeasonModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
