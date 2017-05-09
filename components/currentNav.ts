import { Component, Input } from '@angular/core';
import { DelegateService } from '../services/delegateService';

@Component({
    selector: 'current-nav',
    template: `
        <ng-container *ngIf="_hasBeforeNavDelegate">
            <delegate-control [id]="_delegateBeforeNavId"></delegate-control>
        </ng-container>
        <navbar-vertical *ngIf="!_hasNavDelegate"></navbar-vertical>
        <ng-container *ngIf="_hasNavDelegate">
            <delegate-control [id]="_delegateNavId"></delegate-control>
        </ng-container>
        <ng-container *ngIf="_hasAfterNavDelegate">
            <delegate-control [id]="_delegateAfterNavId"></delegate-control>
        </ng-container>
    `,
    styles: [`
    `]
})
export class CurrentNav {
    private _hasNavHeaderDelegate:boolean = false;
    private _hasBeforeNavDelegate:boolean = false;
    private _hasAfterNavDelegate:boolean = false;
    private _hasNavDelegate:boolean = false;
    private _delegateNavHeaderId:string = "current-nav.header";
    private _delegateBeforeNavId:string = "current-nav.before";
    private _delegateAfterNavId:string = "current-nav.after";
    private _delegateNavId:string = "current-nav";

    constructor() { }
}