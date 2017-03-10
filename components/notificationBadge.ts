import { Component, OnInit, Input } from '@angular/core';
import { NotificationsService } from '../services/notifications';
import { Message } from '../models/message';


@Component({
    selector: 'notificationBadge',
    template: `
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-comments-o"></i> <span *ngIf="MessageCount > 0">{{MessageCount}}</span></a>
            <ul class="dropdown-menu animated fadeInDown">
                <li class="title">
                    {{Label}} <span class="badge pull-right">{{MessageCount}}</span>
                </li>
                <li *ngIf="Messages == null || Messages.length == 0" class="message">
                    No new notifications
                </li>
                <ng-container *ngIf="Messages != null && Messages.length > 0">
                    <li *ngFor="let m of Messages" class="message">
                        {{m.Title}}
                    </li>
                </ng-container>
            </ul>
        </li>
    `,
    styles: [`
        :host { float: left; }
        :host > li, :host > li > a {display: block }
        :host > li > a { font-family: 'Roboto Condensed', sans-serif; height: 60px; line-height: 60px; padding: 0px 20px 0px 20px; }
        :host > li > a { font-family: 'Roboto Condensed', sans-serif; height: 60px; line-height: 60px; padding: 0px 20px 0px 20px; color: #fff }
        .dropdown-menu { padding: 0; border: 0; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; animation-duration: 0.4s; -webkit-animation-duration: 0.4s; z-index: -1; position: absolute; }
        .dropdown-menu .notifications.list-group {list-style: none; padding: 0;margin: 0; }
        .dropdown-menu .notifications.list-group .list-group-item { min-width: 250px; padding: 8px; border: 0; border-bottom: 1px solid #EEE; }
        .dropdown-menu .notifications.list-group .list-group-item .icon { margin-right: 5px; }
        .dropdown-menu .notifications.list-group .badge { border-radius: 1em; }
        .dropdown-menu .notifications.list-group .list-group-item:last-child { border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; }
        .dropdown-menu .notifications.list-group .list-group-item:first-child { border-top-right-radius: 0px; border-top-left-radius: 0px; }
        .dropdown-menu .notifications.list-group a.list-group-item:hover { cursor: pointer; }
        .dropdown-menu .title { font-family: 'Roboto Condensed', sans-serif; padding: 5px 10px; -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); color: #444}
        .dropdown-menu .message { font-family: 'Roboto Condensed', sans-serif; text-align: center; padding: 10px 20px; color: #444; text-decoration: none; }
        .dropdown > a:hover { text-decoration: none; color: #ddd}
        .dropdown.open > a { background-color: transparent; }
    `]
})
export class NotificationBadge implements OnInit {
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
