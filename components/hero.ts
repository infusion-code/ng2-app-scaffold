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
        <li mdTooltip="{{Hero ? Hero.Name : 'Profile'}}" mdTooltipShowDelay="1000">
            <span href="#" (click)="ToggleHero()">
                <span *ngIf="Hero">{{Hero.Name}}</span>
                <span class="caret"></span>
            </span>
        </li>
    `,
    styles: [`
        :host { float: left; }
        :host > li, :host > li > a {display: block }
        :host > li > span { font-family: 'Roboto Condensed', sans-serif; height: 64px; line-height: 64px; padding: 0px 20px 0px 20px; }
        li { cursor: pointer; }
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
