import ChangeStateEvent from "../ChangeStateEvent";
import EmitEvent from "../EmitEvent";
export interface EventOptions {
    changeStateEvent?: ChangeStateEvent | null;
    emitEvent?: EmitEvent | null;
}
