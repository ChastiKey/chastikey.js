export declare class ListLocksResponse {
    status: 200 | 204 | 400;
    message: string;
    timestampGenerated: number;
    locks: Array<ListLocksLock>;
    constructor(init?: Partial<ListLocksResponse>);
    get getLocked(): Array<ListLocksLock>;
}
export declare class ListLocksLock {
    lockID: number;
    lockDeleted: number;
    lockedBy: string;
    lockFrozen: number;
    timestampDeleted: number;
    timestampLocked: number;
    timestampUnlocked: number;
    status: 'UnlockedReal' | 'Locked' | 'ReadyToUnlock';
    combination: string;
    get isLocked(): boolean;
    get isUnlocked(): boolean;
    get isAbandoned(): boolean;
    get totalTimeLocked(): number;
    constructor(init?: Partial<ListLocksLock>);
}
