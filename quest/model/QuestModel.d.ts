import Contents from "./Contents";
import { QuestModelOptions } from "./options/QuestModelOptions";
export default class QuestModel {
    private readonly name;
    private readonly contents;
    private readonly metadata;
    private readonly challengePeriodEventId;
    private readonly firstCompleteAcquireActions;
    private readonly verifyActions;
    private readonly consumeActions;
    private readonly failedAcquireActions;
    private readonly premiseQuestNames;
    constructor(name: string, contents: Contents[], options?: QuestModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
