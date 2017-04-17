import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../services/hero';
import { DelegateService } from '../services/delegateService';
import { DelegateControl } from '../directives/delegate'
import { Hero } from '../models/hero';
import * as $ from 'jquery';

@Component({
    selector: 'topnavhero',
    template: `
        <li class="dropdown profile">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span *ngIf="Hero">{{Hero.Name}}</span> <span class="caret"></span></a>
            <ul class="dropdown-menu animated fadeInDown">
                <li *ngIf="(_delegateMarkup == '' || _delegateMarkup == null) && Hero" class="profile-img">
                    <img src="{{Hero.Picture}}" class="profile-img">
                </li>
                <li *ngIf="_delegateMarkup == '' || _delegateMarkup == null">
                    <div class="profile-info">
                        <h4 class="username" *ngIf="Hero">{{Hero.Name}}</h4>
                        <p><span *ngIf="Hero">{{Hero.Email}}</span></p>
                        <div *ngIf="(Hero && Hero.Profile) || SupportsLogout" class="btn-group margin-bottom-2x" role="group">
                            <button *ngIf="Hero && Hero.Profile" type="button" class="btn btn-default" (click)="ShowProfile()"><i class="fa fa-user"></i> Profile</button>
                            <button *ngIf="SupportsLogout" type="button" data-toggle="modal" data-target="#logoutModal" class="btn btn-default" (click)="Logout()"><i class="fa fa-sign-out"></i> Logout</button>
                        </div>
                    </div>
                </li>
                <ng-container *ngIf="_delegateMarkup != '' && _delegateMarkup != null">
                    <delegate-control template="_delegateMarkup"></delegate-control>
                </ng-container>
            </ul>
        </li>
        <div class="modal fade" id="logoutModal" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Logout confirmation</h4>
                </div>
                <div class="modal-body">
                  <p>{{LogoutConfirmation}}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal" (click)="PostLogoutRedirect()">Close</button>
                </div>
              </div>
            </div>
        </div>
        `,
    styles: [`
        :host { float: left; }
        :host > li, :host > li > a {display: block }
        :host > li > a { font-family: 'Roboto Condensed', sans-serif; height: 60px; line-height: 60px; padding: 0px 20px 0px 20px; }
        .profile-info { color: #444; }
        .dropdown-menu { padding: 0; border: 0; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; animation-duration: 0.4s; -webkit-animation-duration: 0.4s; z-index: -1; position: absolute; }
        .dropdown-menu .notifications.list-group {list-style: none; padding: 0;margin: 0; }
        .dropdown-menu .notifications.list-group .list-group-item { min-width: 250px; padding: 8px; border: 0; border-bottom: 1px solid #EEE; }
        .dropdown-menu .notifications.list-group .list-group-item .icon { margin-right: 5px; }
        .dropdown-menu .notifications.list-group .badge { border-radius: 1em; }
        .dropdown-menu .notifications.list-group .list-group-item:last-child { border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; }
        .dropdown-menu .notifications.list-group .list-group-item:first-child { border-top-right-radius: 0px; border-top-left-radius: 0px; }
        .dropdown-menu .notifications.list-group a.list-group-item:hover { cursor: pointer; }
        .dropdown.profile .dropdown-menu { width: 305px; padding-bottom: 0px; text-align: center; }
        .dropdown.profile .dropdown-menu li.profile-img { padding: 0px; max - height: 300px; overflow: hidden;}
        .dropdown.profile .dropdown-menu li.profile-img img.profile-img { width: 100%; height: auto; margin: 0px; border: 0;}
        .dropdown.profile .dropdown-menu .profile-info { font-family: 'Roboto Condensed', sans-serif; padding: 15px; }
        .dropdown.profile .dropdown-menu .profile-info .username { font-size: 1.8em; }
        .dropdown.profile > a { font-family: 'Roboto Condensed', sans-serif; height: 60px; line-height: 60px; padding: 0px 20px 0px 20px; color: white; text-decoration: none; }
        .dropdown.profile > a:hover { text-decoration: none; color: #ddd}
        .dropdown.profile.open > a { background-color: #575F68; }
        .modal-dialog { color: #444; }
    `]
})
export class HeroComponent implements OnInit {
    private _heroService: HeroService;
    private _logoutConfirmation: string;
    private _router: Router;
    private _hero: Hero;
    private _delegateMarkup: string;

    public get Hero(): Hero { return this._hero; }
    public get SupportsLogout(): boolean { return this._heroService.SupportsLogout; }
    public get LogoutConfirmation(): string { return this._logoutConfirmation; }

    constructor(heroService: HeroService, router: Router, delegates: DelegateService) {
        this._heroService = heroService;
        this._router = router;
        this._delegateMarkup = delegates.GetDelegate("topnavhero.detail");
    }

    private Logout() {
        let that: HeroComponent = this;
        if (!this.SupportsLogout) return;

        // relocate the model dialog content below the body tag to prevent z-index issues 
        // with bootstrap
        $('#logoutModal').appendTo("body")

        this._heroService.Logout().then(s => {
            that._logoutConfirmation = s;
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
        let that: HeroComponent = this;
        this._heroService.Hero.then(h => {
            that._hero = h;
        });
    }

}
