export class NavNode {
    private _title: string;
    private _url: string;
    private _id: string;
    private _children: Array<NavNode>;
    private _mdIcon: string;

    public get Title():string { return this._title; }
    public get Url():string { return this._url; }
    public get Id():string { return this._id; }
    public get Children(): Array<NavNode> { return this._children; }
    public get IsGroup(): boolean { return this._children.length > 0; }
    public get MDIcon(): string { return this._mdIcon; }

    constructor(title: string, url: string, id: string, mdIcon?: string, children?:Array<NavNode>) {
        this._title = title;
        this._url = url;
        this._id = id;
        mdIcon ? this._mdIcon = mdIcon : this._mdIcon = 'link';
        children ? this._children = children : this._children = new Array<NavNode>();
    }
}