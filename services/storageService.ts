interface Dictionary<T>{
    [key: string]: T;
}

export class StorageService {
    private _prefix:string;

    constructor(private _storage: Storage, prefix:string){
        if(prefix == null || prefix == "" || typeof prefix != "string") throw("StorageService requires a non-empty prefix of type string.");
        this._prefix = prefix ;
    }

    public clear(): void {
        this._storage.removeItem(this._prefix);
    }

    public get(key: string): any {
        let val = this._storage.getItem(this._prefix);
        if (val == null || val == "") return val;
        let o = JSON.parse(val);
        let v = o[key];
        return v;
    }

    public remove(key: string): void {
        let val = this._storage.getItem(this._prefix);
        if (val == null || val == "") return;
        let o = JSON.parse(val);
        o.delete(key);
        this._storage.set(this._prefix, JSON.stringify(o));
    }

    public set(key: string, value: any): void {
        let o:any = {};
        let val = this._storage.getItem(this._prefix);
        if (val != null && val != "") o = JSON.parse(val);
        o[key] = value;
        this._storage.setItem(this._prefix, JSON.stringify(o));
    }
}


export class LocalStorageService extends StorageService {
    private static _instances:Dictionary<LocalStorageService> = {};
    private constructor(prefix: string) {
        super(localStorage, prefix);
    }

    public static Instance(prefix:string): LocalStorageService {
        if (LocalStorageService._instances[prefix] == null) LocalStorageService._instances[prefix] = new LocalStorageService(prefix);
        return LocalStorageService._instances[prefix]; 
    }
}

export class SessionStorageService extends StorageService {
    private static _instances:Dictionary<SessionStorageService> = {};
    private constructor(prefix: string) {
        super(sessionStorage, prefix);
    }

    public static Instance(prefix:string): LocalStorageService {
        if (SessionStorageService._instances[prefix] == null) SessionStorageService._instances[prefix] = new SessionStorageService(prefix);
        return SessionStorageService._instances[prefix]; 
    }

}