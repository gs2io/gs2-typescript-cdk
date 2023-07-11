import { GameResultOptions } from "./options/GameResultOptions";
export default class GameResult {
    private readonly rank;
    private readonly userId;
    constructor(rank: number, userId: string, options?: GameResultOptions | null);
    properties(): {
        [name: string]: any;
    };
}
