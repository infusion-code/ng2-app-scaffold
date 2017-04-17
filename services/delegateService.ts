import { Injectable } from '@angular/core';

@Injectable()
export class DelegateService {
    private static _delegateStore: any = {};

    public RegisterDelegate(component: string, template: string): void{
        DelegateService._delegateStore[component] = template;
    }
    
    public GetDelegate(component: string): string{
        if(DelegateService._delegateStore[component] == null) return "";
        return DelegateService._delegateStore[component];
    }
}