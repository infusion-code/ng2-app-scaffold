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
    styles: [
        ".navbar { z-index: 10001; padding-left: 60px; -webkit-transition: all 0.25s; transition: all 0.25s; }",
        ".navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand { height: 60px; line-height: 60px; margin-left: 0px; font-family: 'Roboto Condensed', sans-serif; font-weight: 400; padding: 0; font-size: 1.5em; }",
        ".side-menu {overflow-y: auto;z-index: 100000; position: fixed; width: 60px;height: 100%; -webkit-transition: all 0.25s; transition: all 0.25s; }",
        ".side-menu .navbar-header {width: 100%; border-bottom: 0px solid #e7e7e7; }",
        ".side-menu .navbar-header .navbar-brand { width: 455px;line-height: 60px; height: 60px;padding: 0; width: 100%;overflow: hidden; font-family: 'Roboto Condensed', sans-serif; }",
        ".side-menu .navbar-header .navbar-brand .icon { width: 60px; text-align: center; display: inline-block; }",
        ".side-menu .navbar-header .navbar-brand .title { margin-left: -10px; display: none; }",
        ".side-menu .navbar-header .navbar-expand-toggle { position: absolute; right: 0; width: 60px; height: 60px; background-color: transparent; border: 0px; -moz-transition: all 0.25s linear;-webkit-transition: all 0.25s linear; transition: all 0.25s linear;opacity: 0.75; }",
        ".side-menu .navbar { border: none; padding-left: 0px; }",
        ".side-menu .navbar-nav li { display: block; width: 100%; overflow: hidden; }",
        ".side-menu .navbar-nav li a { font-family: 'Roboto Condensed', sans-serif; padding: 0 10px 0 10px; height: 46px; line-height: 46px; display: block; white-space: nowrap; }",
        ".side-menu .navbar-nav li a .icon { margin-left: 0px; width: 38px; text-align: center; font-size: 1.1em; display: inline-block; }",
        ".side-menu .navbar-nav li a .title { width: 0px; white-space: nowrap; padding-left: 6px; display: none; }",
        ".side-menu .navbar-nav li.dropdown { border: 0; margin-bottom: 0; border-radius: 0; box-shadow: none; }",
        ".side-menu .navbar-nav li.dropdown ul li a { height: 44px;line-height: 44px; vertical-align: middle; padding: 0em 1.2em; }",
        ".side-menu .navbar-nav li.dropdown > a:after { content: ''; position: absolute; right: 1em; }",
        ".side-menu .navbar-nav .panel-collapse.in { display: none; }",
        ".side-menu:hover { width: 250px; }",
        ".side-menu:hover .navbar-header .navbar-brand .title { display: inline-block; }",
        ".side-menu:hover .navbar-nav li a .title { width: 192px; display: inline-block; }",
        ".side-menu:hover .navbar-nav li.dropdown > a:after { font-family: FontAwesome; content: '\f107'; position: absolute; right: 1em; }",
        ".side-menu:hover .panel-collapse.in { display: block; }",
        ":host-context(.app-container.expanded .content-container) .side-menu { width: 250px; }",
        ":host-context(.app-container.expanded .content-container) .side-menu .navbar-header .navbar-brand .title { display: inline-block; }",
        ":host-context(.app-container.expanded .content-container) .side-menu .navbar-nav li a .title { display: inline-block; }",
        ":host-context(.app-container.expanded .content-container) .side-menu .navbar-nav li .panel-collapse.in { display: block; }",
        ":host-context(.app-container.expanded .content-container) .side-menu .navbar-nav li.dropdown > a:after { font-family: FontAwesome; content: '\f107'; position: absolute; right: 1em; }",
        "@media (max-width: 768px) {",
        "  .navbar { padding-left: 0; }",
        "  .navbar .navbar-header { width: auto; display: block; }",
        "  .navbar .navbar-nav { width: auto; margin: 0; }",
        "  .navbar .navbar-nav > li { display: inline-block; }",
        "  .navbar .navbar-right { position: absolute;top: 0;right: -100%;height: 100%;width: 100%;-moz-transition: all 0.25s linear;-webkit-transition: all 0.25s linear; transition: all 0.25s linear; }",
        "  .navbar .navbar-right .open .dropdown-menu { position: absolute; }",
        "  .navbar .navbar-right.expanded { right: 0; }",
        "  :host-context(.app-container .content-container) .side-menu { margin-left: -250px; width: 0px; }",
        "  :host-context(.app-container.expanded) .side-menu { margin-left: 0px; width: 250px; }",
        "}"
    ]
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