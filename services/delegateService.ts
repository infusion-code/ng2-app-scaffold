import { Injectable, Type, Provider } from '@angular/core';

export interface IDelegateControlMetadata{
    controlId: string;
    selector: string;
    template: string;
    styles?: string[];
    imports?: Array<Type<any> | any[]>;
    providers?: Provider[];
}

@Injectable()
export class DelegateService {
    private static _delegateStore: Array<IDelegateControlMetadata> = new Array<IDelegateControlMetadata>();

    public RegisterDelegate(data: IDelegateControlMetadata): void{
        if(!data) return;

        let i:number = DelegateService._delegateStore.findIndex( e => e.controlId == data.controlId);
        if (i != -1) DelegateService._delegateStore.splice(i, 1);
        DelegateService._delegateStore.push(data);
    }
    
    public GetDelegate(id: string): IDelegateControlMetadata{
        let d:IDelegateControlMetadata = DelegateService._delegateStore.find ( e => e.controlId == id ); 
        return d;
    }

}