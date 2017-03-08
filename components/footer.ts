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
    styles: [
        ":host .fa, :host .wrapper { color: #aaa; }",
        ":host .fa {padding-left: 10px; }"
    ]
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