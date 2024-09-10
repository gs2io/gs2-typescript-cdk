import InGameLogTag from "../InGameLogTag";
export interface InGameLogOptions {
    userId?: string | null;
    tags?: InGameLogTag[] | null;
}
