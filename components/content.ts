import { DelegateService } from './../services/delegateService';
import { PanelDetails } from './../models/panelDetails';
import { SidePanelService } from './../services/sidePanel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'content',
    template: `
        <md-sidenav-container class="sidenav-container">
            <md-sidenav class="sidenav" [mode]="sideNavMode" opened="true" align="start">
                <current-nav></current-nav>
            </md-sidenav>
            <div class="router-outlet">
                <router-outlet></router-outlet>
            </div>
            <md-sidenav class="sidepanel" #sidePanel mode="over" [opened]="sidePanelOpened" align="end">
                <delegate-control [id]="delegateId"></delegate-control>
            </md-sidenav>
            <app-footer [Copyright]="Copyright" [Version]="Version" [VersionNotes]="VersionNotes" ></app-footer>
        </md-sidenav-container>
    `,
    styles: [`
        .sidenav-container { height: 100%; }
        .sidenav { width: 60px; min-width: 60px; }
        .sidenav:hover { width: 250px; -webkit-transition: all 0.25s; transition: all 0.25s; }
        :host-context(.app-container.expanded .content-container) .sidenav { width: 250px; -webkit-transition: all 0.25s; transition: all 0.25s; }
        :host-context(.app-container.expanded .content-container) .sidepanel { width: 350px; -webkit-transition: all 0.25s; transition: all 0.25s; }
        .sidepanel.mat-sidenav-opened { width: 350px; }
        .router-outlet { padding: 15px; }
        @media (max-width: 768px) {
            
        }
        @media (max-width: 498px) {
            :host-context(.app-container.expanded .content-container) .sidepanel { width: 100%; -webkit-transition: all 0.25s; transition: all 0.25s; }
            .sidepanel.mat-sidenav-opened { width: 100%; }
        }
    `]
})
export class Content implements OnInit {
    private sidePanelOpened: boolean;
    private sideNavMode: string;
    private delegateId: string;
    private _copyright: string = "Copyright © 2017, Infusion.";
    private _version: string = "0.0.0";
    private _versionLink: string = "";

    @Input()
        public get Copyright(): string { return this._copyright; }
        public set Copyright(val: string) { this._copyright = val; }

    @Input()
        public get Version(): string { return this._version; }
        public set Version(val: string) { this._version = val; }

    @Input()
        public get VersionNotes(): string { return this._versionLink; }
        public set VersionNotes(val: string) { this._versionLink = val; }

    constructor(private sidePanel: SidePanelService, private delegate: DelegateService) {
        this.sidePanelOpened = false;
        this.sideNavMode = 'side';
    }

    ngOnInit() {
        this.sidePanel.getEmittedValue()
            .subscribe((panelDetails: PanelDetails) => {
                this.sidePanelOpened = panelDetails.opened;
                this.delegateId = panelDetails.id;
            });
    }
}
