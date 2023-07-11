import { SignedBallotOptions } from "./options/SignedBallotOptions";
export default class SignedBallot {
    private readonly body;
    private readonly signature;
    constructor(body: string, signature: string, options?: SignedBallotOptions | null);
    properties(): {
        [name: string]: any;
    };
}
