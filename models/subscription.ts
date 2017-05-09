export class Subscription {
    private _label: string;
    private _count: number;
    private _mdIcon: string;
    private _badgeClass: string;
    private _detailUrl: string;

    public get Label():string { return this._label; }
    public get Count():number { return this._count; }
    public get MDIcon():string { return this._mdIcon; }
    public get Detail(): string { return this._detailUrl; }
    public get BadgeClass(): string { return this._badgeClass; }

    constructor(label: string, count: number, mdIcon: string, badgeClass?: string, detail?: string) {
        this._label = label;
        this._count = count;
        this._mdIcon = mdIcon;
        if (badgeClass) this._badgeClass = badgeClass;
        if (detail) this._detailUrl = detail;
    }
}