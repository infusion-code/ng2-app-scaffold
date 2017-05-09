import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DelegateService } from '../services/delegateService';

@Component({
    selector: 'global-nav',
    template: `
        <md-toolbar color="primary">
            <div>
                <span class="icon-title" *ngIf="!_hasNavHeaderDelegate" routerLink="/">
                    <md-icon class="icon">{{HomeIcon}}</md-icon>
                    {{HomeLabel}}
                </span>
                <ng-container *ngIf="_hasNavHeaderDelegate">
                    <delegate-control [id]="_delegateNavHeaderId"></delegate-control>
                </ng-container>
            </div>
            <div class="container-fluid nav-container">
                <div class="">
                    <breadcrumb></breadcrumb>
                    <button *ngIf="ShowSubscriptions || ShowHero || ShowNotifications" type="button" class="visible-xs" (click)="ToggleTopMenu()">
                        <div>
                            <md-icon>apps</md-icon>
                        </div>
                    </button>
                </div>
                <ul *ngIf="ShowSubscriptions || ShowHero || ShowNotifications" [ngClass]="{'expanded' : _topMenuToggled}"  class="">
                    <button *ngIf="ShowSubscriptions || ShowHero || ShowNotifications" type="button" class="visible-xs" (click)="ToggleTopMenu()">
                        <md-icon>close</md-icon>
                    </button>
                    <ng-container *ngIf="!_hasDelegate">
                        <notificationBadge *ngIf="ShowNotifications"></notificationBadge>
                        <subscriptionBadge *ngIf="ShowSubscriptions == true"></subscriptionBadge>
                    </ng-container>
                    <ng-container *ngIf="_hasDelegate">
                        <delegate-control [id]="_delegateId"></delegate-control>
                    </ng-container>
                    <topnavhero *ngIf="ShowHero == true"></topnavhero>
                </ul>
            </div>
        </md-toolbar>
    `,
    styles: [`
        .icon-title { cursor: pointer; }
        .icon { position: relative; top: 3px; }
        .nav-container { margin-right: 0px; }
    `]
})
export class GlobalNav {
    private _homeLabel: string = "App Title";
    private _homeIcon: string = "domain";
    private _showHero: boolean = true;
    private _showNotifications: boolean = true;
    private _showSubscriptions: boolean = true;
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

    // public ToggleSideMenu() {
    //     this._sideMenuToggled = !this._sideMenuToggled;
    //     this.SideMenuToggled.emit(this._sideMenuToggled);
    // }

    public ToggleTopMenu() { this._topMenuToggled = !this._topMenuToggled;  }
}
