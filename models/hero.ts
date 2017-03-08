export class Hero {
    private _name: string;
    private _id: string;
    private _email: string;
    private _pictureUrl: string;
    private _profileUrl: string;

    public get Name(): string { return this._name; }
    public get Picture(): string  { return this._pictureUrl; }
    public get Email(): string { return this._email; }
    public get UserId(): string { return this._id; }
    public get Profile(): string { return this._profileUrl; }


    constructor(id: string, name: string, email: string, picture: string, profile: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._pictureUrl = picture;
        this._profileUrl = profile;
    }
}