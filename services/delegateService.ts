import { Injectable, Type } from '@angular/core';

export interface DelegateControlMetadata{
    controlId: string,
    selector: string,
    template: string,
    imports?: Array<Type<any> | any[]>
    styles?: string[];
}

@Injectable()
export class DelegateService {
    private static _delegateStore: Array<DelegateControlMetadata> = new Array<DelegateControlMetadata>();

    public RegisterDelegate(data: DelegateControlMetadata): void{
        if(!data) return;

        let i:number = DelegateService._delegateStore.findIndex( e => e.controlId == data.controlId);
        if (i != -1) DelegateService._delegateStore.splice(i, 1);
        DelegateService._delegateStore.push(data);
    }
    
    public GetDelegate(id: string): DelegateControlMetadata{
        let d:DelegateControlMetadata = DelegateService._delegateStore.find ( e => e.controlId == id ); 
        return d;
    }

}