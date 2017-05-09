import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DelegateService } from '../services/delegateService';

@Component({
    selector: 'global-nav',
    template: `
        <md-toolbar color="primary" [ngClass]="{'expanded' : _topMenuToggled}">
            <div class="icon-title-container">
                <span *ngIf="!_hasNavHeaderDelegate" class="navbar-current-nav-toggle visible-xs" (click)="ToggleSideMenu()">
                    <md-icon class="icon">menu</md-icon>
                </span>
                <span class="icon-title hidden-xs" *ngIf="!_hasNavHeaderDelegate" routerLink="/">
                    <md-icon class="icon">{{HomeIcon}}</md-icon>
                    {{HomeLabel}}
                </span>
                <ng-container *ngIf="_hasNavHeaderDelegate">
                    <delegate-control [id]="_delegateNavHeaderId"></delegate-control>
                </ng-container>
            </div>
            <div class="nav-container">
                <div>
                    <ng-container *ngIf="!_hasBreadcrumbDelegate">
                        <breadcrumb></breadcrumb>
                    </ng-container>
                    <ng-container *ngIf="_hasBreadcrumbDelegate">
                        <delegate-control [id]="_breadcrumbDelegateId"></delegate-control>
                    </ng-container>
                    <span *ngIf="ShowSubscriptions || ShowHero || ShowNotifications" class="navbar-right-expand-toggle visible-xs" (click)="ToggleTopMenu()">
                        <md-icon>apps</md-icon>
                    </span>
                </div>
                <ul *ngIf="ShowSubscriptions || ShowHero || ShowNotifications" class="nav-right">
                    <ng-container *ngIf="!_hasDelegate">
                        <notificationBadge *ngIf="ShowNotifications"></notificationBadge>
                        <subscriptionBadge *ngIf="ShowSubscriptions == true"></subscriptionBadge>
                    </ng-container>
                    <ng-container *ngIf="_hasDelegate">
                        <delegate-control [id]="_delegateId"></delegate-control>
                    </ng-container>
                    <topnavhero *ngIf="ShowHero == true"></topnavhero>
                    <span *ngIf="ShowSubscriptions || ShowHero || ShowNotifications" class="navbar-right-collapse-toggle visible-xs" (click)="ToggleTopMenu()">
                        <md-icon>close</md-icon>
                    </span>
                </ul>
            </div>
        </md-toolbar>
    `,
    styles: [`
        .icon-title-container { position: absolute; left: 16px; -moz-transition: all 0.25s linear; -webkit-transition: all 0.25s linear; transition: all 0.25s linear; }
        .icon-title { cursor: pointer; }
        .icon { position: relative; top: 3px; }
        .nav-container { width: 100%; }
        .nav-right { float: right; margin: 0; }
        .navbar-current-nav-toggle { cursor: pointer; }
        .navbar-right-expand-toggle,
        .navbar-right-collapse-toggle { line-height: 70px; cursor: pointer; width: 64px; height: 64px; border: 0px; position: absolute; right: 0; -moz-transition: all 0.25s linear; -webkit-transition: all 0.25s linear; transition: all 0.25s linear; }
        @media (max-width: 768px) {
            .nav-right { position: absolute; top: 0; right: -100%; height: 100%; width: 100%; -moz-transition: all 0.25s linear; -webkit-transition: all 0.25s linear; transition: all 0.25s linear; float: right!important; }
            .expanded .icon-title-container { left: -100%; }
            .expanded .nav-right { right: 0; }
            .expanded .navbar-right-expand-toggle { right: 100%; }
            .visible-xs { display: block!important; }
        }
    `]
})
export class GlobalNav {
    private _homeLabel: string = "App Title";
    private _homeIcon: string = "domain";
    private _showHero: boolean = true;
    private _showNotifications: boolean = true;
    private _showSubscriptions: boolean = true;
    private _sideMenuToggled: boolean = false;
    private _topMenuToggled: boolean = false;
    private _hasDelegate: boolean = false;
    private _delegateId: string = "global-nav.notifications";

    @Input()
        public get HomeLabel(): string { return this._homeLabel; }
        public set HomeLabel(val: string) { this._homeLabel = val; }

    @Input()
        public get HomeIcon(): string { return this._homeIcon; }
        public set HomeIcon(val: string) { this._homeIcon = val; }

    @Input()
        public get ShowHero(): boolean { return this._showHero; }
        public set ShowHero(val: boolean) { this._showHero = val; }

    @Input()
        public get ShowNotifications(): boolean { return this._showNotifications; }
        public set ShowNotifications(val: boolean) { this._showNotifications = val; }

    @Input()
        public get ShowSubscriptions(): boolean { return this._showSubscriptions; }
        public set ShowSubscriptions(val: boolean) { this._showSubscriptions = val; }

    @Output()
        public SideMenuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(delegates: DelegateService){
        if(delegates.GetDelegate(this._delegateId)) this._hasDelegate = true;
    }

    public ToggleSideMenu() {
        this._sideMenuToggled = !this._sideMenuToggled;
        this.SideMenuToggled.emit(this._sideMenuToggled);
    }

    public ToggleTopMenu() {
        this._topMenuToggled = !this._topMenuToggled;
    }
}
