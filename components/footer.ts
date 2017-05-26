import { Component, Input } from '@angular/core';
import { DelegateService } from '../services/delegateService';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="app-footer">
            <div class="wrapper">
                <ng-container *ngIf="_hasFooterDelegate">
                    <delegate-control [id]="_footerDelegateId"></delegate-control>
                </ng-container>
                <ng-container *ngIf="!_hasFooterDelegate">
                    <span class="pull-right">{{Version}} 
                        <a *ngIf="VersionNotes != ''" [routerLink]="VersionNotes"><i class="fa fa-question-circle-o" title="Release Notes"></i></a>
                    </span>{{Copyright}}
                </ng-container>
            </div>
        </footer>
    `,
    styles: [`
        :host .fa, :host .wrapper { color: #aaa; }
        :host .fa {padding-left: 10px; }
        .app-footer { display: block; position: absolute;bottom: 0;right: 0;left: 65px;-webkit-transition: all 0.25s;transition: all 0.25s;font-size: 12px;font-family: 'Roboto Condensed', sans-serif; }
        .app-footer .wrapper {padding: 10px 35px;padding-left: 25px;height: 50px;line-height: 50px; vertical-align: middle; }
        :host-context(.app-container.expanded) .app-footer { left: 250px; }
        :host-context(.app-container.expanded) .app-footer .wrapper {  padding-left: 25px; } 
        @media (max-width: 768px) {
            .app-footer { left: 10px; }
            :host-context(.app-container) .app-footer .wrapper, :host-context(.app-container.expanded) .app-footer .wrapper { padding-left: 15px; }
        }
    `]
})
export class Footer {
    private _copyright: string = "Copyright © 2017, Infusion.";
    private _version: string = "0.0.0";
    private _versionLink: string = "";
    private _footerDelegateId: string = "footer.all";
    private _hasFooterDelegate: boolean = false;    

    @Input()
        public get Copyright(): string { return this._copyright; }
        public set Copyright(val: string) { this._copyright = val; }

    @Input()
        public get Version(): string { return this._version; }
        public set Version(val: string) { this._version = val; }

    @Input()
        public get VersionNotes(): string { return this._versionLink; }
        public set VersionNotes(val: string) { this._versionLink = val; }

    constructor(delegates: DelegateService) { 
        if(delegates.GetDelegate(this._footerDelegateId)) this._hasFooterDelegate = true;
    }
}