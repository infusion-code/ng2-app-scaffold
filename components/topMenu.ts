import { Component, Input } from '@angular/core';
import * as $ from "jquery";

@Component({
    selector: 'global-nav',
    template: `
        <nav class="navbar navbar-default navbar-fixed-top navbar-top">
            <div class="container-fluid navbar-container">
                <div class="navbar-header">
                    <button *ngIf="ShowLeftNavToggle"  type="button" class="navbar-expand-toggle" (click)="ToggleSideMenu()">
                        <i class="fa fa-bars icon"></i>
                    </button>
                    <span *ngIf="!ShowLeftNavToggle" class="navbar-spacer">&nbsp;</span>
                    <breadcrumb></breadcrumb>
                    <button *ngIf="ShowSubscriptions || ShowHero || ShowNotifications" type="button" class="navbar-right-expand-toggle pull-right visible-xs" (click)="ToggleTopMenu()">
                        <i class="fa fa-th icon"></i>
                    </button>
                </div>
                <ul *ngIf="ShowSubscriptions || ShowHero || ShowNotifications" class="nav navbar-nav navbar-right">
                    <button *ngIf="ShowSubscriptions || ShowHero || ShowNotifications" type="button" class="navbar-right-expand-toggle pull-right visible-xs" (click)="ToggleTopMenu()">
                        <i class="fa fa-times icon"></i>
                    </button>
                    <notificationBadge *ngIf="ShowNotifications"></notificationBadge>
                    <subscriptionBadge [MoreLink]="'/home'" *ngIf="ShowSubscriptions == true"></subscriptionBadge>
                    <topnavhero *ngIf="ShowHero == true"></topnavhero>
                </ul>
            </div>
        </nav>
    `,
    styles: [
        `.navbar { z-index: 10001; padding-left: 60px; -webkit-transition: all 0.25s; transition: all 0.25s; }
        .navbar.navbar-fixed-top { border-bottom: 1px solid black; }
        .navbar > .container, .navbar > .container-fluid { z-index: 10001; }
        .navbar > .container .navbar-expand-toggle, .navbar > .container-fluid .navbar-expand-toggle { width: 60px; height: 60px; background-color: transparent; border: 0px; float: left; -moz-transition: all 0.25s linear; -webkit-transition: all 0.25s linear; transition: all 0.25s linear; opacity: 0.75; }
        .navbar > .container .navbar-expand-toggle .icon, .navbar > .container-fluid .navbar-expand-toggle .icon { font-size: 1.4em; }
        .navbar > .container .navbar-right-expand-toggle, .navbar > .container-fluid .navbar-right-expand-toggle { width: 60px; height: 60px; background-color: transparent; border: 0px; position: absolute; right: 0; -moz-transition: all 0.25s linear; -webkit-transition: all 0.25s linear; transition: all 0.25s linear; opacity: 0.75; color: #fff; }
        .navbar > .container .navbar-right-expand-toggle .icon, .navbar > .container-fluid .navbar-right-expand-toggle .icon { font-size: 1.4em; }
        .navbar .navbar-nav /deep/ .dropdown-menu, .navbar.navbar-default .navbar-nav /deep/ .dropdown-menu { background-color: #F9F9F9; border-color: #E4E4E4 }
        :host-context(.app-container.expanded .content-container) .navbar-top { padding-left: 250px; }
        .container-fluid > .navbar-collapse, .container-fluid > .navbar-header, .container > .navbar-collapse, .container > .navbar-header { margin-left: -15px; margin-right: -15px; }
        @media (max-width: 768px) {
          .navbar { padding-left: 0; }
          .navbar .navbar-header { width: auto; display: block; }
          .navbar .navbar-nav { width: auto; margin: 0; }
          .navbar .navbar-nav > li { display: inline-block; }
          .navbar .navbar-right { position: absolute;top: 0;right: -100%;height: 100%;width: 100%;-moz-transition: all 0.25s linear;-webkit-transition: all 0.25s linear; transition: all 0.25s linear; float: right!important; }
          .navbar .navbar-right /deep/ .open .dropdown-menu { position: absolute; box-shadow: 0 6px 12px rgba(0, 0, 0, .175); -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175); }
          .navbar .navbar-right.expanded { right: 0; }
          :host-context(.app-container) .navbar-top { min-width: 300px; }
          :host-context(.app-container.expanded) .navbar-top { min-width: 480px; padding-left: 0px; }
        }`,

        //
        // review styles below
        //
        `.navbar-top > .navbar-container { background-color: black !important; }
        .navbar .navbar-nav > li > a { color: white; }
        .navbar.navbar-default .navbar-nav > li > a { color: white; }
        .navbar .navbar-breadcrumb li a, .navbar.navbar-default .navbar-breadcrumb li a, .navbar .navbar-header .navbar-expand-toggle, .navbar.navbar-default .navbar-header .navbar-expand-toggle { color: white; }
        .navbar .navbar-nav > li, .navbar.navbar-default .navbar-nav > li { border-color: black; }
        .navbar.navbar-default .navbar-breadcrumb li, .navbar.navbar-default .navbar-breadcrumb li a, .navbar.navbar-default .navbar-header .navbar-expand-toggle, .navbar.navbar-default .navbar-header .navbar-right-expand-toggle, .navbar .navbar-header .navbar-expand-toggle, .navbar .navbar-header .navbar-right-expand-toggle { color: white !important; }
        .navbar.navbar-top .navbar-spacer { float: left; width: 25px; }
        @media (max-width: 768px) { .navbar.navbar-default .navbar-right { background-color: black !important; } }`
    ]
})
export class GlobalNav {
    private _leftNavContainerClass: string = ".app-container";
    private _showLeftNavToggle: boolean = true;
    private _showHero: boolean = true;
    private _showNotifications: boolean = true;
    private _showSubscriptions: boolean = true;

    @Input()
        public get LeftNavContainerClass(): string { return this._leftNavContainerClass; }
        public set LeftNavContainerClass(val: string) { this._leftNavContainerClass = val; }

    @Input()
        public get ShowLeftNavToggle(): boolean { return this._showLeftNavToggle; }
        public set ShowLeftNavToggle(val: boolean) { this._showLeftNavToggle = val; }

    @Input()
        public get ShowHero(): boolean { return this._showHero; }
        public set ShowHero(val: boolean) { this._showHero = val; }

    @Input()
        public get ShowNotifications(): boolean { return this._showNotifications; }
        public set ShowNotifications(val: boolean) { this._showNotifications = val; }

    @Input()
        public get ShowSubscriptions(): boolean { return this._showSubscriptions; }
        public set ShowSubscriptions(val: boolean) { this._showSubscriptions = val; }


    public ToggleSideMenu() {
        $(this._leftNavContainerClass).toggleClass("expanded");
        $(".navbar-expand-toggle").toggleClass("fa-rotate-90");
    }

    public ToggleTopMenu() {
        $(".navbar-right").toggleClass("expanded");
        return $(".navbar-right-expand-toggle").toggleClass("fa-rotate-90");
    }
}
