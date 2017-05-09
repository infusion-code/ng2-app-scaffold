import { SidePanel } from './sidePanel';
import { SidePanelService } from './../services/sidePanel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../services/hero';
import { DelegateService } from '../services/delegateService';
import { Hero } from '../models/hero';
import * as $ from 'jquery';

@Component({
    selector: 'topnavhero',
    template: `
        <li class="dropdown profile" mdTooltip="{{Hero ? Hero.Name : 'Profile'}}" mdTooltipShowDelay="1000">
            <a href="#" (click)="ToggleHero()" role="button" aria-expanded="false">
                <span *ngIf="Hero">{{Hero.Name}}</span>
                <span class="caret"></span>
            </a>
        </li>
    `,
    styles: [`
        :host { float: left; }
        :host > li, :host > li > a {display: block }
        :host > li > a { font-family: 'Roboto Condensed', sans-serif; height: 60px; line-height: 60px; padding: 0px 20px 0px 20px; }
        .dropdown.profile > a { font-family: 'Roboto Condensed', sans-serif; height: 60px; line-height: 60px; padding: 0px 20px 0px 20px; color: white; text-decoration: none; }
        .dropdown.profile > a:hover { text-decoration: none; color: #ddd}
        .dropdown.profile.open > a { background-color: #575F68; }
    `]
})
export class HeroComponent implements OnInit {
    private _heroService: HeroService;
    private _sidePanel: SidePanelService;
    private _hero: Hero;

    public get Hero(): Hero { return this._hero; }
    public get SupportsLogout(): boolean { return this._heroService.SupportsLogout; }

    constructor(heroService: HeroService, sidePanel: SidePanelService) {
        this._heroService = heroService;
        this._sidePanel = sidePanel;
    }

    private ToggleHero() {
        this._sidePanel.toggle('hero');
    }

    public ngOnInit() {
        this._heroService.Hero.then(h => {
            this._hero = h;
        });
    }

}
