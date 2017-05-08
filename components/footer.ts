import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="app-footer">
            <div class="wrapper">
                <span class="pull-right">{{Version}} 
                    <a *ngIf="VersionNotes != ''" [routerLink]="VersionNotes"><i class="fa fa-question-circle-o" title="Release Notes"></i></a>
                </span>{{Copyright}}
            </div>
        </footer>
    `,
    styles: [`
        :host .fa, :host .wrapper { color: #aaa; }
        :host .fa {padding-left: 10px; }
        .app-footer { display: block; position: absolute;bottom: 0;right: 0;left: 0px;-webkit-transition: all 0.25s;transition: all 0.25s;font-size: 12px;font-family: 'Roboto Condensed', sans-serif; }
        .app-footer .wrapper {padding: 10px 35px;height: 50px;line-height: 50px; vertical-align: middle; }
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

    @Input()
        public get Copyright(): string { return this._copyright; }
        public set Copyright(val: string) { this._copyright = val; }

    @Input()
        public get Version(): string { return this._version; }
        public set Version(val: string) { this._version = val; }

    @Input()
        public get VersionNotes(): string { return this._versionLink; }
        public set VersionNotes(val: string) { this._versionLink = val; }

    constructor() { }
}