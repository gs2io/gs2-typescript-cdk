import { QuestGroupModelOptions } from "./options/QuestGroupModelOptions";
export default class QuestGroupModel {
    private readonly name;
    private readonly metadata;
    private readonly quests;
    private readonly challengePeriodEventId;
    constructor(name: string, options?: QuestGroupModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
