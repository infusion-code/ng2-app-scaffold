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
        ".navbar-top > .navbar-container { background-color: black !important; }",
        ".navbar .navbar-nav > li > a { color: white; }",
        ".navbar.navbar-default .navbar-nav > li > a { color: white; }",
        ".navbar .navbar-breadcrumb li a, .navbar.navbar-default .navbar-breadcrumb li a, .navbar .navbar-header .navbar-expand-toggle, .navbar.navbar-default .navbar-header .navbar-expand-toggle { color: white; }",
        ".navbar .navbar-nav .dropdown-menu .title, .navbar.navbar-default .navbar-nav .dropdown-menu .title { color: #444; }",
        ".navbar .navbar-nav .dropdown-menu .message, .navbar.navbar-default .navbar-nav .dropdown-menu .message { color: #444; }",
        ".navbar .navbar-nav > li, .navbar.navbar-default .navbar-nav > li { border-color: black; }",
        ".navbar.navbar-default .navbar-breadcrumb li, .navbar.navbar-default .navbar-breadcrumb li a, .navbar.navbar-default .navbar-header .navbar-expand-toggle, .navbar.navbar-default .navbar-header .navbar-right-expand-toggle, .navbar .navbar-header .navbar-expand-toggle, .navbar .navbar-header .navbar-right-expand-toggle { color: white !important; }",
        ".navbar.navbar-top .navbar-spacer { float: left; width: 25px; }",
        "@media (max-width: 768px) { .navbar.navbar-default .navbar-right { background-color: black !important; } }"
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
