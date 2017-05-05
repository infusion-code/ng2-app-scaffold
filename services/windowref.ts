import { Injectable } from "@angular/core";

///
/// Window Reference service to assist with abstracting the availability of window. Needed for AOT and 
/// Server Side rendering
///
@Injectable()
export class WindowRef {
    
    public get IsAvailable(): boolean {
        return !(typeof (window) == "undefined");
    }

    public GetNativeWindow(): any {
        if (typeof (window) == "undefined") return null;
        return window;
    }
}

