export class NavNode {
    protected _title: string;
    protected _url: string;
    protected _id: string;
    protected _children: Array<NavNode>;
    protected _faIcon: string;

    public get Title():string { return this._title; }
    public get Url():string { return this._url; }
    public get Id():string { return this._id; }
    public get Children(): Array<NavNode> { return this._children; }
    public get IsGroup(): boolean { return this._children.length > 0; }
    public get FAIcon(): string { return this._faIcon; }

    constructor(title: string, url: string, id: string, faIcon?: string, children?:Array<NavNode>) {
        this._title = title;
        this._url = url;
        this._id = id;
        faIcon ? this._faIcon = faIcon : this._faIcon = 'fa-link';
        children ? this._children = children : this._children = new Array<NavNode>();
    }
}