import { Component, Input } from '@angular/core';
import { DelegateService } from '../services/delegateService';

@Component({
    selector: 'current-nav',
    template: `
        <div class="side-menu sidebar-inverse">
            <nav class="navbar navbar-default" role="navigation">
                <div class="side-menu-container">
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
                </div>
            </nav>
        </div>
    `,
    // template: `
    //     <div class="side-menu sidebar-inverse">
    //         <nav class="navbar navbar-default" role="navigation">
    //             <div class="side-menu-container">
    //                 <div class="navbar-header">
    //                     <a *ngIf="!_hasNavHeaderDelegate" class="navbar-brand" routerLink="/">
    //                         <div class="icon fa {{HomeIcon}} {{HomeLabel.length > 25 ? 'multiline' : ''}}"></div>
    //                         <div class="title {{HomeLabel.length > 25 ? 'multiline' : ''}}">{{HomeLabel}}</div>
    //                     </a>
    //                     <ng-container *ngIf="_hasNavHeaderDelegate">
    //                         <delegate-control [id]="_delegateNavHeaderId"></delegate-control>
    //                     </ng-container>
    //                 </div>
    //                 <ng-container *ngIf="_hasBeforeNavDelegate">
    //                     <delegate-control [id]="_delegateBeforeNavId"></delegate-control>
    //                 </ng-container>
    //                 <navbar-vertical *ngIf="!_hasNavDelegate"></navbar-vertical>
    //                 <ng-container *ngIf="_hasNavDelegate">
    //                     <delegate-control [id]="_delegateNavId"></delegate-control>
    //                 </ng-container>                   
    //                 <ng-container *ngIf="_hasAfterNavDelegate">
    //                     <delegate-control [id]="_delegateAfterNavId"></delegate-control>
    //                 </ng-container>
    //             </div>
    //         </nav>
    //     </div>
    // `,
    styles: [`
        .navbar { z-index: 10001; padding-left: 60px; -webkit-transition: all 0.25s; transition: all 0.25s; }
        .side-menu {overflow-y: auto;z-index: 100000; position: fixed; width: 60px;height: 100%; -webkit-transition: all 0.25s; transition: all 0.25s; }
        .side-menu .navbar-header .navbar-expand-toggle { position: absolute; right: 0; width: 60px; height: 60px; background-color: transparent; border: 0px; -moz-transition: all 0.25s linear;-webkit-transition: all 0.25s linear; transition: all 0.25s linear;opacity: 0.75; }
        .side-menu .navbar { border: none; padding-left: 0px; border-radius: 0px; }
        .side-menu /deep/ .navbar-nav { width: 100% }
        .side-menu /deep/ .navbar-nav li { display: block; width: 100%; overflow: hidden; }
        .side-menu /deep/ .navbar-nav li a { font-family: 'Roboto Condensed', sans-serif; padding: 0 10px 0 10px; height: 46px; line-height: 46px; display: block; white-space: nowrap; }
        .side-menu /deep/ .navbar-nav li a .icon { margin-left: 0px; width: 38px; text-align: center; font-size: 1.1em; display: inline-block; }
        .side-menu /deep/ .navbar-nav li a .icon.multiline { vertical-align: top; margin-top: 15px; }
        .side-menu /deep/ .navbar-nav li a .title { width: 0px; white-space: nowrap; padding-left: 6px; display: none; }
        .side-menu /deep/ .navbar-nav li a .title.multiline {line-height: 14pt; padding-bottom: 13px; padding-top: 13px; width: 192px; white-space: normal; }
        .side-menu /deep/ .navbar-nav li.dropdown { border: 0; margin-bottom: 0; border-radius: 0; box-shadow: none; background-color: transparent; }
        .side-menu /deep/ .navbar-nav li.dropdown ul li a { height: 44px;line-height: 44px; vertical-align: middle; padding: 0em 1.2em; }
        .side-menu /deep/ .navbar-nav li.dropdown > a:after { content: ""; position: absolute; right: 1em; }
        .side-menu /deep/ .navbar-nav li.dropdown > div > .expander { display: none; }
        .side-menu /deep/ .navbar-nav .panel-collapse.in { display: none; }
        .side-menu:hover { width: 250px; }
        .side-menu:hover .navbar-header .navbar-brand /deep/ .title { display: inline-block; }
        .side-menu:hover /deep/ .navbar-nav li a .title { width: 192px; display: inline-block; }
        .side-menu:hover /deep/ .navbar-nav li.dropdown > a:after { font-family: FontAwesome; content: "\\f107"; position: absolute; right: 1em; }
        .side-menu:hover /deep/ .navbar-nav li.dropdown > div > .expander { display: block }
        .side-menu:hover /deep/ .panel-collapse.in { display: block; }
        .side-menu.sidebar-inverse .navbar {  background-color: inherit;  border-bottom: 0px; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; }
        .side-menu.sidebar-inverse .navbar /deep/ li { border-left: 0; }
        .side-menu.sidebar-inverse .navbar /deep/ li > a, .side-menu.sidebar-inverse .navbar /deep/ li.dropdown > div > a { color: #fff; }
        .side-menu.sidebar-inverse .navbar /deep/ li.active > a, .side-menu.sidebar-inverse .navbar /deep/ li.dropdown.active > div > a { color: #353d47; border-left: 3px solid #22A7F0; border-right: 0px solid #22A7F0; background-color: #FFF; }
        .side-menu.sidebar-inverse .navbar /deep/ li.active > a .icon, .side-menu.sidebar-inverse .navbar /deep/ li.dropdown.active > div > a .icon { margin-left: -3px; }
        .side-menu.sidebar-inverse .navbar /deep/ li:hover > a, .side-menu.sidebar-inverse .navbar /deep/ li.dropdown:hover > div > a { color: #22A7F0; }
        .side-menu.sidebar-inverse .navbar /deep/ li.dropdown > .panel-collapse { background-color: rgba(0, 0, 0, 0.1); }
        .side-menu.sidebar-inverse .navbar /deep/ li.dropdown .panel-body { padding: 0 7px; }
        .side-menu.sidebar-inverse .navbar-header .navbar-brand { color: #fff; }
        :host-context(.app-container.expanded .content-container) .side-menu { width: 250px; }
        :host-context(.app-container.expanded .content-container) .side-menu .navbar-header .navbar-brand /deep/ .title { display: inline-block; }
        :host-context(.app-container.expanded .content-container) .side-menu /deep/ .navbar-nav li a .title { display: inline-block; }
        :host-context(.app-container.expanded .content-container) .side-menu /deep/ .navbar-nav li .panel-collapse.in { display: block; }
        :host-context(.app-container.expanded .content-container) .side-menu /deep/ .navbar-nav li.dropdown > a:after { font-family: FontAwesome; content: "\\f107"; position: absolute; right: 1em; }
        :host-context(.app-container.expanded .content-container) .side-menu /deep/ .navbar-nav li.dropdown > div > .expander { display: block }
        @media (max-width: 768px) {
          .navbar { padding-left: 0; }
          .navbar .navbar-header { display: block; }
          .navbar /deep/ .navbar-nav { width: auto; margin: 0; }
          .navbar /deep/ .navbar-nav li { display: inline-block; }
          .navbar .navbar-right { position: absolute;top: 0;right: -100%;height: 100%;width: 100%;-moz-transition: all 0.25s linear;-webkit-transition: all 0.25s linear; transition: all 0.25s linear; }
          .navbar .navbar-right /deep/ .open .dropdown-menu { position: absolute; }
          .navbar .navbar-right.expanded { right: 0; }
          :host-context(.app-container .content-container) .side-menu { margin-left: -250px; width: 0px; }
          :host-context(.app-container.expanded) .side-menu { margin-left: 0px; width: 250px; }
        }
    `]
    // styles: [`
    //     .navbar { z-index: 10001; padding-left: 60px; -webkit-transition: all 0.25s; transition: all 0.25s; }
    //     .navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand { height: 60px; line-height: 60px; margin-left: 0px; font-family: 'Roboto Condensed', sans-serif; font-weight: 400; padding: 0; font-size: 1.5em; }
    //     .side-menu {overflow-y: auto;z-index: 100000; position: fixed; width: 60px;height: 100%; -webkit-transition: all 0.25s; transition: all 0.25s; }
    //     .side-menu .navbar-header {width: 100%; border-bottom: 0px solid #e7e7e7; background-color: #22A7F0; color: #fff;  margin-bottom: 4px; }
    //     .side-menu .navbar-header .navbar-brand { width: 455px;line-height: 60px; height: 60px;padding: 0; width: 100%;overflow: hidden; font-family: 'Roboto Condensed', sans-serif; }
    //     .side-menu .navbar-header .navbar-brand .icon { width: 60px; text-align: center; display: inline-block; }
    //     .side-menu .navbar-header .navbar-brand .title { margin-left: -10px; display: none; }
    //     .side-menu .navbar-header .navbar-expand-toggle { position: absolute; right: 0; width: 60px; height: 60px; background-color: transparent; border: 0px; -moz-transition: all 0.25s linear;-webkit-transition: all 0.25s linear; transition: all 0.25s linear;opacity: 0.75; }
    //     .side-menu .navbar { border: none; padding-left: 0px; border-radius: 0px; }
    //     .side-menu /deep/ .navbar-nav { width: 100% }
    //     .side-menu /deep/ .navbar-nav li { display: block; width: 100%; overflow: hidden; }
    //     .side-menu /deep/ .navbar-nav li a { font-family: 'Roboto Condensed', sans-serif; padding: 0 10px 0 10px; height: 46px; line-height: 46px; display: block; white-space: nowrap; }
    //     .side-menu /deep/ .navbar-nav li a .icon { margin-left: 0px; width: 38px; text-align: center; font-size: 1.1em; display: inline-block; }
    //     .side-menu /deep/ .navbar-nav li a .icon.multiline { vertical-align: top; margin-top: 15px; }
    //     .side-menu /deep/ .navbar-nav li a .title { width: 0px; white-space: nowrap; padding-left: 6px; display: none; }
    //     .side-menu /deep/ .navbar-nav li a .title.multiline {line-height: 14pt; padding-bottom: 13px; padding-top: 13px; width: 192px; white-space: normal; }
    //     .side-menu /deep/ .navbar-nav li.dropdown { border: 0; margin-bottom: 0; border-radius: 0; box-shadow: none; background-color: transparent; }
    //     .side-menu /deep/ .navbar-nav li.dropdown ul li a { height: 44px;line-height: 44px; vertical-align: middle; padding: 0em 1.2em; }
    //     .side-menu /deep/ .navbar-nav li.dropdown > a:after { content: ""; position: absolute; right: 1em; }
    //     .side-menu /deep/ .navbar-nav li.dropdown > div > .expander { display: none; }
    //     .side-menu /deep/ .navbar-nav .panel-collapse.in { display: none; }
    //     .side-menu:hover { width: 250px; }
    //     .side-menu:hover .navbar-header .navbar-brand /deep/ .title { display: inline-block; }
    //     .side-menu:hover /deep/ .navbar-nav li a .title { width: 192px; display: inline-block; }
    //     .side-menu:hover /deep/ .navbar-nav li.dropdown > a:after { font-family: FontAwesome; content: "\\f107"; position: absolute; right: 1em; }
    //     .side-menu:hover /deep/ .navbar-nav li.dropdown > div > .expander { display: block }
    //     .side-menu:hover /deep/ .panel-collapse.in { display: block; }
    //     .side-menu.sidebar-inverse { background-color: #353d47; box-shadow: 1px 1px 2px rgba(0,0,0,0.08); color: #fff; }
    //     .side-menu.sidebar-inverse .navbar {  background-color: inherit;  border-bottom: 0px; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; }
    //     .side-menu.sidebar-inverse .navbar /deep/ li { border-left: 0; }
    //     .side-menu.sidebar-inverse .navbar /deep/ li > a, .side-menu.sidebar-inverse .navbar /deep/ li.dropdown > div > a { color: #fff; }
    //     .side-menu.sidebar-inverse .navbar /deep/ li.active > a, .side-menu.sidebar-inverse .navbar /deep/ li.dropdown.active > div > a { color: #353d47; border-left: 3px solid #22A7F0; border-right: 0px solid #22A7F0; background-color: #FFF; }
    //     .side-menu.sidebar-inverse .navbar /deep/ li.active > a .icon, .side-menu.sidebar-inverse .navbar /deep/ li.dropdown.active > div > a .icon { margin-left: -3px; }
    //     .side-menu.sidebar-inverse .navbar /deep/ li:hover > a, .side-menu.sidebar-inverse .navbar /deep/ li.dropdown:hover > div > a { color: #22A7F0; }
    //     .side-menu.sidebar-inverse .navbar /deep/ li.dropdown > .panel-collapse { background-color: rgba(0, 0, 0, 0.1); }
    //     .side-menu.sidebar-inverse .navbar /deep/ li.dropdown .panel-body { padding: 0 7px; }
    //     .side-menu.sidebar-inverse .navbar-header .navbar-brand { color: #fff; }
    //     :host-context(.app-container.expanded .content-container) .side-menu { width: 250px; }
    //     :host-context(.app-container.expanded .content-container) .side-menu .navbar-header .navbar-brand /deep/ .title { display: inline-block; }
    //     :host-context(.app-container.expanded .content-container) .side-menu /deep/ .navbar-nav li a .title { display: inline-block; }
    //     :host-context(.app-container.expanded .content-container) .side-menu /deep/ .navbar-nav li .panel-collapse.in { display: block; }
    //     :host-context(.app-container.expanded .content-container) .side-menu /deep/ .navbar-nav li.dropdown > a:after { font-family: FontAwesome; content: "\\f107"; position: absolute; right: 1em; }
    //     :host-context(.app-container.expanded .content-container) .side-menu /deep/ .navbar-nav li.dropdown > div > .expander { display: block }
    //     @media (max-width: 768px) {
    //       .navbar { padding-left: 0; }
    //       .navbar .navbar-header { display: block; }
    //       .navbar /deep/ .navbar-nav { width: auto; margin: 0; }
    //       .navbar /deep/ .navbar-nav li { display: inline-block; }
    //       .navbar .navbar-right { position: absolute;top: 0;right: -100%;height: 100%;width: 100%;-moz-transition: all 0.25s linear;-webkit-transition: all 0.25s linear; transition: all 0.25s linear; }
    //       .navbar .navbar-right /deep/ .open .dropdown-menu { position: absolute; }
    //       .navbar .navbar-right.expanded { right: 0; }
    //       :host-context(.app-container .content-container) .side-menu { margin-left: -250px; width: 0px; }
    //       :host-context(.app-container.expanded) .side-menu { margin-left: 0px; width: 250px; }
    //     }
    // `]
})
export class CurrentNav {
    // private _homeLabel: string = "Home";
    // private _homeIcon: string = "fa-paper-plane";
    private _hasNavHeaderDelegate:boolean = false;
    private _hasBeforeNavDelegate:boolean = false;
    private _hasAfterNavDelegate:boolean = false;
    private _hasNavDelegate:boolean = false;
    private _delegateNavHeaderId:string = "current-nav.header";
    private _delegateBeforeNavId:string = "current-nav.before";
    private _delegateAfterNavId:string = "current-nav.after";
    private _delegateNavId:string = "current-nav";

    // @Input()
    //     public get HomeLabel(): string { return this._homeLabel; }
    //     public set HomeLabel(val: string) { this._homeLabel = val; }

    // @Input()
    //     public get HomeIcon(): string { return this._homeIcon; }
    //     public set HomeIcon(val: string) { this._homeIcon = val; }

    constructor() { }
}