import { SidePanelService } from './../services/sidePanel';
import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionService } from '../services/subscriptions';
import { Subscription } from '../models/subscription';


@Component({
    selector: 'subscriptionBadge',
    template: `
        <li class="danger" mdTooltip="{{Label}}" mdTooltipShowDelay="1000">
            <span (click)="ToggleSubscription()">
                <md-icon class="icon">star_half</md-icon>
                <span *ngIf="Count > 0">{{Count}}</span>
            </span>
        </li>
    `,
    styles: [`
        :host { float: left; }
        :host > li, :host > li > span { display: block }
        :host > li > span { font-family: 'Roboto Condensed', sans-serif; height: 64px; line-height: 64px; padding: 0px 20px 0px 20px; }
        :host > li.danger > span { background-color: transparent; border-bottom: 4px solid #FA2A00; }
        :host > li > span { font-family: 'Roboto Condensed', sans-serif; height: 64px; line-height: 64px; padding: 0px 20px 0px 20px; }
        li { cursor: pointer; }
        .icon { font-size: 20px; position: relative; top: 4px; left: 4px; }
    `]
})
export class SubscriptionBadge implements OnInit {
    private _service: SubscriptionService;
    private _sidePanel: SidePanelService;
    private _subscriptions: Array<Subscription>;
    private _label: string = "Updates";

    @Input()
    public get Label(): string { return this._label; }
    public set Label(val: string) { this._label = val; }

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
