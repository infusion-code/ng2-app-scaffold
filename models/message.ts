export class Message {
    private _title: string;
    private _body: string;
    private _date: Date;
    private _imageUrl: string;
    private _detailUrl: string;

    public get Title(): string { return this._title; }
    public get Body(): string { return this._body; }
    public get Date(): Date { return this._date; }
    public get Image(): string { return this._imageUrl; }
    public get Detail(): string { return this._detailUrl; }


    constructor(title: string, date: Date, body?: string, image?: string, detail?: string) {
        this._title = title;
        this._date = date;
        if (body) this._body = body;
        if (image) this._imageUrl = image;
        if (detail) this._detailUrl = detail;
    }
}