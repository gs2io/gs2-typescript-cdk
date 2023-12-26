import DefaultGradeModel from "../DefaultGradeModel";
import AcquireActionRate from "../AcquireActionRate";
export interface GradeModelOptions {
    metadata?: string | null;
    defaultGrades?: DefaultGradeModel[] | null;
    acquireActionRates?: AcquireActionRate[] | null;
}
