import { Component, Input } from '@angular/core';

@Component({
    selector: 'current-nav',
    template: `
        <div class="side-menu sidebar-inverse">
            <nav class="navbar navbar-default" role="navigation">
                <div class="side-menu-container">
                    <div class="navbar-header">
                        <a class="navbar-brand" routerLink="/">
                            <div class="icon fa {{HomeIcon}}"></div>
                            <div class="title">{{HomeLabel}}</div>
                        </a>
                    </div>
                    <navbar-vertical></navbar-vertical>
                </div>
            </nav>
        </div>
    `,
    styles: []
})
export class CurrentNav {
    private _homeLabel: string = "Home";
    private _homeIcon: string = "fa-paper-plane";

    @Input()
        public get HomeLabel(): string { return this._homeLabel; }
        public set HomeLabel(val: string) { this._homeLabel = val; }

    @Input()
        public get HomeIcon(): string { return this._homeIcon; }
        public set HomeIcon(val: string) { this._homeIcon = val; }

    constructor() { }
}