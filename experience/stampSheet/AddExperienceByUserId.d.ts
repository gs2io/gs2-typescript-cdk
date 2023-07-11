import { AcquireAction } from "../../core/model";
export default class AddExperienceByUserId extends AcquireAction {
    constructor(namespaceName: string, experienceName: string, propertyId: string, experienceValue?: number | null, userId?: string | null);
}
