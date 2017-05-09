import { Component, OnInit, Input } from '@angular/core';
import { NotificationsService } from '../services/notifications';
import { Message } from '../models/message';

@Component({
    selector: 'notification-sidePanel',
    template: `
        <md-list>
            <h3 md-subheader>
                <span md-line>{{Label}}</span>
                <md-chip-list class="chip-list">
                    <md-chip class="chip">{{MessageCount}}</md-chip>
                </md-chip-list>
            </h3>
            <md-list-item *ngIf="Messages == null || Messages.length == 0">
                No new notifications
            </md-list-item>
            <ng-container *ngIf="Messages != null && Messages.length > 0">
                <ng-container *ngFor="let m of _messages">
                    <md-list-item *ngIf="m.Detail == null || m.Detail == ''">
                        {{m.Title}}
                    </md-list-item>
                    <md-nav-list *ngIf="m.Detail != null && m.Detail != ''">
                        <a md-list-item [routerLink]=[m.Detail]>{{m.Title}}</a>
                    </md-nav-list>
                </ng-container>
            </ng-container>
        </md-list>
    `,
    styles: [`
        .chip-list { float: right; position: relative; top: -3px; }
        .chip-list .chip { padding: 4px 8px; }
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
