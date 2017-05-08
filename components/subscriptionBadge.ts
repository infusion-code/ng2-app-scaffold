import { SidePanelService } from './../services/sidePanel';
import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionService } from '../services/subscriptions';
import { Subscription } from '../models/subscription';


@Component({
    selector: 'subscriptionBadge',
    template: `
        <li class="dropdown danger">
            <a href="#" (click)="ToggleSubscription()" role="button" aria-expanded="false">
                <md-icon class="icon">star_half</md-icon>
                <span *ngIf="Count > 0">{{Count}}</span>
            </a>
        </li>
    `,
    styles: [`
        :host { float: left; }
        :host > li, :host > li > a { display: block }
        :host > li > a { font-family: 'Roboto Condensed', sans-serif; height: 60px; line-height: 60px; padding: 0px 20px 0px 20px; }
        :host > li.danger > a { background-color: transparent; border-bottom: 4px solid #FA2A00; }
        :host > li.danger.open > a { background-color: #FA2A00; color: #FFF; }
        :host > li > a { font-family: 'Roboto Condensed', sans-serif; height: 60px; line-height: 60px; padding: 0px 20px 0px 20px; color: #fff }
        :host > li.danger.open .dropdown-menu.danger { border-color: #FA2A00; }
        :host > li.danger.open .dropdown-menu.danger .title { background-color: #FA2A00; color: #FFF; }
        :host > li.danger.open .dropdown-menu.danger .title .badge { background-color: #FFF; color: #FA2A00; }
        .icon { font-size: 20px; position: relative; top: 4px; left: 4px; }
    `]
})
export class SubscriptionBadge implements OnInit {
    private _service: SubscriptionService;
    private _sidePanel: SidePanelService;
    private _subscriptions: Array<Subscription>;

    public get Count(): number {
        if (this._subscriptions != null) {
            let c: number = 0;
            for (let i = 0; i < this._subscriptions.length; i++) c += this._subscriptions[i].Count;
            return c;
        }
        return 0;
    }

    constructor(service: SubscriptionService, sidePanel: SidePanelService) {
        this._service = service;
        this._sidePanel = sidePanel;
    }

    private ToggleSubscription() {
        this._sidePanel.toggle('subscription');
    }

    public ngOnInit() {
        this._service.Messages.then(s => {
            this._subscriptions = s;
        });
    }
}
