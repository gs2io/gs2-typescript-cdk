import { ConsumeAction } from "../../core/model";
export default class SubExperienceByUserId extends ConsumeAction {
    constructor(namespaceName: string, experienceName: string, propertyId: string, experienceValue?: number | null, userId?: string | null);
}
