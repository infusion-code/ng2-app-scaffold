import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../services/hero';
import { DelegateService } from '../services/delegateService';
import { Hero } from '../models/hero';

@Component({
    selector: 'hero-sidePanel',
    template: `
        <ng-container *ngIf="!_hasDelegate">
            <md-card>
                <img md-card-image *ngIf="Hero" src="{{Hero.Picture}}">
                <md-card-content>
                    <h4 *ngIf="Hero">{{Hero.Name}}</h4>
                    <p><span *ngIf="Hero">{{Hero.Email}}</span></p>
                </md-card-content>
                <md-card-actions>
                    <button md-button *ngIf="Hero && Hero.Profile" (click)="ShowProfile()"><md-icon>account_circle</md-icon> Profile</button>
                    <button md-button *ngIf="SupportsLogout" (click)="Logout()"><md-icon>exit_to_app</md-icon> Logout</button>
                </md-card-actions>
            </md-card>
        </ng-container>
        <ng-container *ngIf="_hasDelegate">
            <delegate-control [id]="_delegateId"></delegate-control>
        </ng-container>
    `,
    styles: [`
    `]
})
export class HeroSidePanel implements OnInit {
    private _heroService: HeroService;
    private _logoutConfirmation: string;
    private _router: Router;
    private _hero: Hero;
    private _hasDelegate: boolean = false;
    private _delegateId: string = "topnavhero.detail";

    public get Hero(): Hero { return this._hero; }
    public get SupportsLogout(): boolean { return this._heroService.SupportsLogout; }
    public get LogoutConfirmation(): string { return this._logoutConfirmation; }

    constructor(heroService: HeroService, router: Router, delegates: DelegateService) {
        this._heroService = heroService;
        this._router = router;
        if(delegates.GetDelegate(this._delegateId)) this._hasDelegate = true;
    }

    private Logout() {
        if (!this.SupportsLogout) return;

        // TODO: Implement logout using Material Design

        this._heroService.Logout().then(s => {
            this._logoutConfirmation = s;
        });
    }

    private PostLogoutRedirect() {
        if (!this.SupportsLogout) return;

        let u: string = this._heroService.PostLogoutRedirect;
        if (u.startsWith('/')) this._router.navigateByUrl(u);
        else window.location.href = u;
    }

    private ShowProfile() {
        let u: string = this._hero.Profile;
        if (u.startsWith('/')) this._router.navigateByUrl(u);
        else window.location.href = u;
    }

    public ngOnInit() {
        this._heroService.Hero.then(h => {
            this._hero = h;
        });
    }

}
