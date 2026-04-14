import FacetValueCount from "../FacetValueCount";
import NumericRange from "../NumericRange";
export interface FacetOptions {
    values?: FacetValueCount[] | null;
    range?: NumericRange | null;
    globalRange?: NumericRange | null;
}
