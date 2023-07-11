import QuestModel from "../QuestModel";
export interface QuestGroupModelOptions {
    metadata?: string | null;
    quests?: QuestModel[] | null;
    challengePeriodEventId?: string | null;
}
