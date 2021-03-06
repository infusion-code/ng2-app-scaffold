﻿import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { DelegateService } from '../services/delegateService';
import { ConfigService } from '../services/configService';
import 'rxjs/add/observable/timer';

@Component({
    selector: 'global-nav',
    template: `
        <nav class="navbar navbar-default navbar-fixed-top navbar-top">
            <div class="container-fluid navbar-container">
                <div class="navbar-header">
                    <button *ngIf="ShowLeftNavToggle"  type="button" [ngClass]="{'fa-rotate-90': _sideMenuToggled }" class="navbar-expand-toggle" (click)="ToggleSideMenu()">
                        <i class="fa fa-bars icon"></i>
                    </button>
                    <div class="navbar-top-brand">
                        <a *ngIf="!_hasBrandDelegate" class="navbar-brand" routerLink="/">
                            <div class="icon {{HomeIcon}}"></div>
                            <div class="title hidden-xs">{{HomeLabel}}</div>
                        </a>
                        <ng-container *ngIf="_hasBrandDelegate">
                            <delegate-control [id]="_brandDelegateId"></delegate-control>
                        </ng-container>
                    </div>
                    <ng-container *ngIf="!_hasBreadcrumbDelegate">
                        <breadcrumb></breadcrumb>
                    </ng-container>
                    <ng-container *ngIf="_hasBreadcrumbDelegate">
                        <delegate-control [id]="_breadcrumbDelegateId"></delegate-control>
                    </ng-container>
                    <button *ngIf="ShowSubscriptions || ShowHero || ShowNotifications" type="button" class="navbar-right-expand-toggle pull-right visible-xs" (click)="ToggleTopMenu()">
                        <div><i class="fa fa-th icon"></i></div>
                    </button>
                </div>
                <ul *ngIf="ShowSubscriptions || ShowHero || ShowNotifications" [ngClass]="{'expanded' : _topMenuToggled}"  class="nav navbar-nav navbar-right">
                    <button *ngIf="ShowSubscriptions || ShowHero || ShowNotifications" type="button" [ngClass]="{'fa-rotate-90': _topMenuToggled}" class="navbar-right-expand-toggle pull-right visible-xs" (click)="ToggleTopMenu()">
                        <i class="fa fa-times icon"></i>
                    </button>
                    <ng-container *ngIf="!_hasNotificationDelegate">
                        <notificationBadge *ngIf="ShowNotifications"></notificationBadge>
                        <subscriptionBadge [MoreLink]="'/home'" *ngIf="ShowSubscriptions == true"></subscriptionBadge>
                    </ng-container>
                    <ng-container *ngIf="_hasNotificationDelegate">
                        <delegate-control [id]="_notificationDelegateId"></delegate-control>
                    </ng-container>
                    <topnavhero *ngIf="ShowHero == true"></topnavhero>
                </ul>
            </div>
        </nav>
    `,
    styles: [`
        .navbar { z-index: 10001; padding-left: 0px; -webkit-transition: all 0.25s; transition: all 0.25s; }
        .navbar.navbar-fixed-top { border-bottom: 0px solid black; }
        .navbar > .container, .navbar > .container-fluid { z-index: 10001; }
        .navbar > .container .navbar-expand-toggle, .navbar > .container-fluid .navbar-expand-toggle { width: 61px; height: 60px; background-color: transparent; border: 0px; float: left; -moz-transition: all 0.25s linear; -webkit-transition: all 0.25s linear; transition: all 0.25s linear; opacity: 0.75;}
        .navbar > .container .navbar-expand-toggle .icon, .navbar > .container-fluid .navbar-expand-toggle .icon { font-size: 1.4em; }
        .navbar > .container .navbar-right-expand-toggle, .navbar > .container-fluid .navbar-right-expand-toggle { width: 60px; height: 60px; background-color: #000; border: 0px; position: absolute; right: 0; -moz-transition: all 0.25s linear; -webkit-transition: all 0.25s linear; transition: all 0.25s linear;  color: #fff; }
        .navbar > .container .navbar-right-expand-toggle > div, .navbar > .container-fluid .navbar-right-expand-toggle > div { opacity: 0.75}
        .navbar > .container .navbar-right-expand-toggle .icon, .navbar > .container-fluid .navbar-right-expand-toggle .icon { font-size: 1.4em; }
        .navbar .navbar-nav /deep/ .dropdown-menu, .navbar.navbar-default .navbar-nav /deep/ .dropdown-menu { background-color: #F9F9F9; border-color: #E4E4E4 }
        .navbar .navbar-right { background-color: #000;}
        .navbar-default .navbar-top-brand { float: left; padding: 0 10px 0 10px; background-color: #444; margin-right: 10px; color: #fff }
        .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus { color: #fff }
        .navbar-default .navbar-brand { height: 60px; line-height: 60px; margin-left: 0px; font-family: 'Roboto Condensed', sans-serif; font-weight: 500; padding: 0; font-size: 1.5em; color: #fff; }
        .navbar-default .navbar-brand .icon { text-align: center; display: inline-block; padding: 0 15px }
        .navbar-default .navbar-brand .title { margin-left: 0px; display: inline-block; padding: 0 10px 0 0; }
        .container-fluid > .navbar-collapse, .container-fluid > .navbar-header, .container > .navbar-collapse, .container > .navbar-header { margin-left: -15px; margin-right: -15px; }
        @media (max-width: 768px) {
          .navbar { padding-left: 0; }
          .navbar .navbar-header { width: auto; display: block; }
          .navbar .navbar-nav { width: auto; margin: 0; }
          .navbar .navbar-nav > li { display: inline-block; }
          .navbar .navbar-right { position: absolute;top: 0;right: -100%;height: 100%;width: 100%;-moz-transition: all 0.25s linear;-webkit-transition: all 0.25s linear; transition: all 0.25s linear; float: right!important; }
          .navbar .navbar-right /deep/ .open .dropdown-menu { position: absolute; box-shadow: 0 6px 12px rgba(0, 0, 0, .175); -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175); left: 0!Important; }
          .navbar .navbar-right.expanded { right: 0; }
          .visible-xs { display: block!important; }
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
        @media (max-width: 768px) { .navbar.navbar-default .navbar-right { background-color: black !important; }  }
        `
    ]
})
export class GlobalNav {
    private _showLeftNavToggle: boolean = true;
    private _showHero: boolean = true;
    private _showNotifications: boolean = true;
    private _showSubscriptions: boolean = true;
    private _sideMenuToggled: boolean = true;
    private _topMenuToggled: boolean = false;
    private _hasNotificationDelegate: boolean = false;
    private _hasBrandDelegate:boolean = false;
    private _hasBreadcrumbDelegate: boolean = false;
    private _brandDelegateId:string = "global-nav.brand";
    private _notificationDelegateId: string = "global-nav.notifications";
    private _breadcrumbDelegateId: string = "global-nav.breadcrumb"
    private _homeLabel: string = "Home";
    private _homeIcon: string = "fa fa-paper-plane";

    @Input()
        public get HomeLabel(): string { return this._homeLabel; }
        public set HomeLabel(val: string) { this._homeLabel = val; }

    @Input()
        public get HomeIcon(): string { return this._homeIcon; }
        public set HomeIcon(val: string) { this._homeIcon = val; }

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

    @Input()
        public get ToggleCurrentNav(): boolean { return this._sideMenuToggled; }
        public set ToggleCurrentNav(val: boolean) {  this._sideMenuToggled = val;  }

    @Output()
        public SideMenuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private _config: ConfigService, delegates: DelegateService){
        if(delegates.GetDelegate(this._notificationDelegateId)) this._hasNotificationDelegate = true;
        if(delegates.GetDelegate(this._breadcrumbDelegateId)) this._hasBreadcrumbDelegate = true;
        if(delegates.GetDelegate(this._brandDelegateId)) this._hasBrandDelegate = true;
    }

    public ToggleSideMenu() {
        this._sideMenuToggled = !this._sideMenuToggled;
        this.SideMenuToggled.emit(this._sideMenuToggled);
        
        if(this._config.CloseCurrentNavWhenNoAction){
            // automatically close the sidemenu after a while if not closed by action.
            let s: Subscription = Observable.timer(5000).subscribe((i:number) => {
                if(this._sideMenuToggled) {
                    this._sideMenuToggled = false;
                    this.SideMenuToggled.emit(this._sideMenuToggled);
                }
                s.unsubscribe();
            });
        }
    }

    public ToggleTopMenu() { this._topMenuToggled = !this._topMenuToggled;  }
}
