import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionService } from '../services/subscriptions';
import { Subscription } from '../models/subscription';

@Component({
    selector: 'subscription-sidePanel',
    template: `
        <md-list>
            <h3 md-subheader>
                <span md-line>{{Label}}</span>
                <md-chip-list class="chip-list">
                    <md-chip class="chip">{{Count}}</md-chip>
                </md-chip-list>
            </h3>
            <md-list-item *ngIf="Subscriptions == null || Subscriptions.length == 0">
                No new subscriptions
            </md-list-item>
            <ng-container *ngIf="Subscriptions != null && Subscriptions.length > 0">
                <ng-container *ngFor="let s of Subscriptions">
                    <md-list-item *ngIf="s.Detail == null || s.Detail == ''">
                        <md-icon md-list-icon class="icon">{{s.MDIcon}}</md-icon>
                        <span md-line>{{s.Label}}</span>
                        <md-chip-list class="chip-list">
                            <md-chip class="chip {{s.BadgeClass}}">{{s.Count}}</md-chip>
                        </md-chip-list>
                    </md-list-item>
                    <md-nav-list *ngIf="s.Detail != null && s.Detail != ''">
                        <a md-list-item [routerLink]=[s.Detail]>
                            <md-icon md-list-icon class="icon">{{s.MDIcon}}</md-icon>
                            <span md-line>{{s.Label}}</span>
                            <md-chip-list class="chip-list">
                                <md-chip class="chip {{s.BadgeClass}}">{{s.Count}}</md-chip>
                            </md-chip-list>
                        </a>
                    </md-nav-list>
                </ng-container>
                 <md-nav-list *ngIf="MoreLink != null && MoreLink != ''">
                    <a md-list-item [routerLink]=[MoreLink]>View More</a>
                </md-nav-list>
            </ng-container>
        </md-list>
    `,
    styles: [`
        h3 .chip-list { float: right; position: relative; top: -3px; }
        .chip-list .chip { padding: 4px 8px; }
        .success { background-color: green; }
        .danger { background-color: red; }
        .icon { padding: 0 !important; }
    `]
})
export class SubscriptionSidePanel implements OnInit {
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
