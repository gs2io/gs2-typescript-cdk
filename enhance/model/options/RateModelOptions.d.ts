import BonusRate from "../BonusRate";
export interface RateModelOptions {
    description?: string | null;
    metadata?: string | null;
    acquireExperienceHierarchy?: string[] | null;
    bonusRates?: BonusRate[] | null;
}
