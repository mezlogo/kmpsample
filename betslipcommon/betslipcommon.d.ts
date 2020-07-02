export type Nullable<T> = T | null | undefined
export namespace betslipcommon {
    class ResponseDataClass {
        constructor(msg: string, code: number)
        readonly msg: string;
        readonly code: number;
        component1(): string
        component2(): number
        copy(msg: string, code: number): betslipcommon.ResponseDataClass
        toString(): string
        hashCode(): number
        equals(other: Nullable<any>): boolean
    }
    interface Callback {
        onCall(msg: string): string
    }
    function commonCode(callback: betslipcommon.Callback): betslipcommon.ResponseDataClass
}