import { SidePanelService } from './../services/sidePanel';
import { Component, OnInit, Input } from '@angular/core';
import { NotificationsService } from '../services/notifications';
import { Message } from '../models/message';

@Component({
    selector: 'notificationBadge',
    template: `
        <li mdTooltip="{{Label}}" mdTooltipShowDelay="1000">
            <a href="#" (click)="ToggleNotification()">
                <md-icon class="icon">comment</md-icon>
                <span *ngIf="MessageCount > 0">{{MessageCount}}</span>
            </a>
        </li>
    `,
    styles: [`
        :host { float: left; }
        :host > li, :host > li > a {display: block }
        :host > li > a { font-family: 'Roboto Condensed', sans-serif; height: 60px; line-height: 60px; padding: 0px 20px 0px 20px; }
        :host > li > a { font-family: 'Roboto Condensed', sans-serif; height: 60px; line-height: 60px; padding: 0px 20px 0px 20px; color: #fff }
        .icon { font-size: 16px; position: relative; top: 4px; left: 4px; }
    `]
})
export class NotificationBadge implements OnInit {
    private _service: NotificationsService;
    private _sidePanel: SidePanelService;
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

    constructor(service: NotificationsService, sidePanel: SidePanelService) {
        this._service = service;
        this._sidePanel = sidePanel;
    }

    public ngOnInit() {
        this._service.Messages.then(m => {
            this._messages = m;
        });
    }

    private ToggleNotification() {
        this._sidePanel.toggle('notification');
    }
}
