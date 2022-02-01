export enum StartMode {
    START,
    STOP
}

export enum WorkingState {
    NOT_WORKING = 'Not Working',
    MINING = 'Mining'
}

export interface IXMRigLogEvent {
    log: string[];
}
