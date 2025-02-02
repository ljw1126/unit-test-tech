import { IComplicatedLogger } from "./interfaces/complicated-logger";

export class RealLogger implements IComplicatedLogger {
    debug(text: string, obj: any) {}

    error(text: string, location: string, stacktrace: string) {}

    info(text: string) {}

    warn(text: string) {}
}