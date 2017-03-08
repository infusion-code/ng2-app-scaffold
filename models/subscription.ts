export class Subscription {
    private _label: string;
    private _count: number;
    private _faIcon: string;
    private _badgeClass: string;
    private _detailUrl: string;

    public get Label():string { return this._label; }
    public get Count():number { return this._count; }
    public get FAIcon():string { return this._faIcon; }
    public get Detail(): string { return this._detailUrl; }
    public get BadgeClass(): string { return this._badgeClass; }

    constructor(label: string, count: number, faIcon: string, badgeClass?: string, detail?: string) {
        this._label = label;
        this._count = count;
        this._faIcon = faIcon;
        if (badgeClass) this._badgeClass = badgeClass;
        if (detail) this._detailUrl = detail;
    }
}