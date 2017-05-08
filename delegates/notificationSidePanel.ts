import { Component, OnInit, Input } from '@angular/core';
import { NotificationsService } from '../services/notifications';
import { Message } from '../models/message';

@Component({
    selector: 'notification-sidePanel',
    template: `
        <ul>
            <li class="title">
                {{Label}} <span class="badge pull-right">{{MessageCount}}</span>
            </li>
            <li *ngIf="Messages == null || Messages.length == 0" class="message">
                No new notifications
            </li>
            <ng-container *ngIf="Messages != null && Messages.length > 0">
                <ul class="list-group notifications">
                    <ng-container *ngFor="let m of _messages">
                        <a *ngIf="m.Detail == null || m.Detail == ''">
                            <li class="list-group-item message">
                                {{m.Title}}
                            </li>
                        </a>
                        <a *ngIf="m.Detail != null && m.Detail != ''" [routerLink]=[m.Detail]>
                            <li class="list-group-item message">
                                {{m.Title}}
                            </li>
                        </a>
                    </ng-container>
                </ul>
            </ng-container>
        </ul>
    `,
    styles: [`
        .notifications.list-group {list-style: none; padding: 0;margin: 0; }
        .notifications.list-group .list-group-item { min-width: 175px; padding: 8px; border: 0; border-bottom: 1px solid #EEE; }
        .notifications.list-group > a .list-group-item { cursor: default }
        .notifications.list-group > a[href] .list-group-item { cursor: pointer !important; }
        .notifications.list-group > a[href] .list-group-item:hover { background-color: rgba(100,100,100,0.1); }
        .title { font-family: 'Roboto Condensed', sans-serif; padding: 5px 10px; -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); color: #444}
        .message { font-family: 'Roboto Condensed', sans-serif; text-align: center; padding: 10px 20px; color: #444; text-decoration: none; }
        a:hover { text-decoration: none; color: #ddd}
        a { background-color: #575F68; }
        .title { cursor: default; }
        .icon { font-size: 16px; position: relative; top: 4px; left: 4px; }
    `]
})
export class NotificationSidePanel implements OnInit {
    private _service: NotificationsService;
    private _label: string = "Notifications";
    private _messages: Array<Message>;

    @Input()
    public get Label(): string { return this._label; }
    public set Label(val: string) { this._label = val; }

    public get Messages(): Array<Message> { return this._messages; }
    public get MessageCount(): number {
        if (this._messages != null) return this._messages.length;
        return 0;
    }

    constructor(service: NotificationsService) {
        this._service = service;
    }

    public ngOnInit() {
        this._service.Messages.then(m => {
            this._messages = m;
        });
    }
}
