import {TimeProviderInterface} from "./time-provider-interface";
export const SUNDAY = 0, SATURDAY = 6;

export class PasswordVerifier {
    private _timeProvider: TimeProviderInterface;

    constructor(rules: any[], timeProvider: TimeProviderInterface) {
        this._timeProvider = timeProvider;
    }

    verify(input: String): String[] {
        const isWeekend = [SUNDAY, SATURDAY]
            .filter((x) => x === this._timeProvider.getDay())
            .length > 0;

        if(isWeekend) {
            throw new Error("It's the weekend!");
        }

        //do something
        return [];
    }
}
