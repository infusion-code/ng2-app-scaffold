import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionService } from '../services/subscriptions';
import { Subscription } from '../models/subscription';


@Component({
    selector: 'subscriptionBadge',
    template: `
        <li class="dropdown danger">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-star-half-o"></i> <span *ngIf="Count > 0">{{Count}}</span></a>
            <ul class="dropdown-menu danger  animated fadeInDown">
                <li class="title">
                    {{Label}} <span class="badge pull-right">{{Count}}</span>
                </li>
                <li *ngIf="Subscriptions != null && Subscriptions.length > 0">
                    <ul class="list-group notifications">
                        <ng-container *ngFor="let s of Subscriptions">
                            <a *ngIf="s.Detail == null || s.Detail == ''">
                                <li class="list-group-item">
                                    <span class="badge {{s.BadgeClass}}">{{s.Count}}</span> <i class="fa {{s.FAIcon}} icon"></i> {{s.Label}}
                                </li>
                            </a>
                            <a *ngIf="s.Detail != null && s.Detail != ''" [routerLink]=[s.Detail]>
                                <li class="list-group-item">
                                    <span class="badge {{s.BadgeClass}}">{{s.Count}}</span> <i class="fa {{s.FAIcon}} icon"></i> {{s.Label}}
                                </li>
                            </a>
                        </ng-container>
                        <a *ngIf="MoreLink != null && MoreLink != ''" [routerLink]=[MoreLink]>
                            <li class="list-group-item message">
                                view more
                            </li>
                        </a>
                    </ul>
                </li>
            </ul>
        </li>
    `,
    styles: [`
        :host { float: left; }
        :host > li, :host > li > a { display: block }
        :host > li > a { font-family: 'Roboto Condensed', sans-serif; height: 60px; line-height: 60px; padding: 0px 20px 0px 20px; }
        :host > li.danger > a { background-color: transparent; border-bottom: 4px solid #FA2A00; }
        :host > li.danger.open > a { background-color: #FA2A00; color: #FFF; }
        :host > li > a { font-family: 'Roboto Condensed', sans-serif; height: 60px; line-height: 60px; padding: 0px 20px 0px 20px; color: #fff }
        .dropdown-menu { padding: 0; border: 0; border-radius: 0px; animation-duration: 0.4s; -webkit-animation-duration: 0.4s; z-index: -1; position: absolute; }
        .dropdown-menu .notifications.list-group {list-style: none; padding: 0;margin: 0; }
        .dropdown-menu .notifications.list-group .list-group-item { min-width: 250px; padding: 8px; border: 0; border-bottom: 1px solid #EEE; cursor: default; }
        .dropdown-menu .notifications.list-group .list-group-item .icon { margin-right: 5px; }
        .dropdown-menu .notifications.list-group .badge { border-radius: 1em; }
        .dropdown-menu .notifications.list-group > a[href] .list-group-item { cursor: pointer !important; }
        .dropdown-menu .notifications.list-group > a[href] .list-group-item:hover { background-color: rgba(100,100,100,0.1); }
        .dropdown-menu .title { font-family: 'Roboto Condensed', sans-serif; padding: 5px 10px; -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }
        .dropdown-menu .message { font-family: 'Roboto Condensed', sans-serif; text-align: center; padding: 10px 20px; color: #444; text-decoration: none; }
        .dropdown > a:hover, :host > li.danger.open > a { text-decoration: none; color: #ddd}
        .dropdown-menu > .title { cursor: default; }
        .dropdown.open > a { background-color: #575F68; }
        :host > li.danger.open .dropdown-menu.danger { border-color: #FA2A00; }
        :host > li.danger.open .dropdown-menu.danger .title { background-color: #FA2A00; color: #FFF; }
        :host > li.danger.open .dropdown-menu.danger .title .badge { background-color: #FFF; color: #FA2A00; }
        :host .badge.success { background-color: green }
        :host .badge.danger { background-color: red }
    `]
})
export class SubscriptionBadge implements OnInit {
    private _service: SubscriptionService;
    private _label: string = "Updates";
    private _moreLink: string;
    private _subscriptions: Array<Subscription>;

    @Input()
        public get Label(): string { return this._label; }
        public set Label(val: string) { this._label = val; }

    @Input()
        public get MoreLink(): string { return this._moreLink; }
        public set MoreLink(val: string) { this._moreLink = val; }

    public get Subscriptions(): Array<Subscription> { return this._subscriptions; }
    public get Count(): number {
        if (this._subscriptions != null) {
            let c: number = 0;
            for (let i = 0; i < this._subscriptions.length; i++) c += this._subscriptions[i].Count;
            return c;
        }
        return 0;
    }

    constructor(service: SubscriptionService) {
        this._service = service;
    }

    public ngOnInit() {
        this._service.Messages.then(s => {
            this._subscriptions = s;
        });
    }

}
