export interface IProduct {
    readonly id?: number;
    readonly name: string;
    readonly description: string;
    readonly location: string;
    readonly date?: string;
    readonly count?: number;
    readonly country?: string;
    readonly comment?: string;
}
