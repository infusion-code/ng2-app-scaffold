import { Injectable } from "@angular/core";

///
/// Document Reference service to assist with abstracting the availability of document. Needed for AOT and 
/// Server Side rendering
///
@Injectable()
export class DocumentRef {
    public get IsAvailable(): boolean {
        return !(typeof (document) == "undefined");
    }

    public GetNativeDocument(): any {
        if (typeof (document) == "undefined") return null;
        return document;
    }
}