import { SideNavDetails } from './../models/sideNavDetails';
import { SideNavService } from './../services/sideNav';
import { DelegateService } from './../services/delegateService';
import { PanelDetails } from './../models/panelDetails';
import { SidePanelService } from './../services/sidePanel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'content',
    template: `
        <md-sidenav-container class="sideNav-container" [ngClass]="{ 'expandSideNav': sideNavDetails.opened }">
            <md-sidenav class="sideNav" [mode]="sideNavDetails.mode" opened="true" align="start" (mouseenter)="toggleSideNav(true)" (mouseleave)="toggleSideNav(false)">
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
        .sideNav-container { height: 100%; }
        .sideNav { width: 60px; min-width: 60px; -webkit-transition: all 0.25s; transition: all 0.25s; }
        .sideNav-container.expandSideNav .sideNav { width: 250px; -webkit-transition: all 0.25s; transition: all 0.25s; overflow: hidden; }
        .sidepanel { width: 350px; }
        .router-outlet { padding: 15px; }

        @media (max-width: 498px) {
            .sideNav { width: 0px; min-width: 0px; }
            .sideNav-container.expandSideNav .sideNav { width: 100%; }
            .sideNav-container.expandSideNav .mat-sidenav-content { margin-left: 0px; }
            .sidepanel { width: 100%; }
        }
    `]
})
export class Content implements OnInit {
    private sideNavDetails: SideNavDetails;
    private sidePanelOpened: boolean;
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

    constructor(private sidePanel: SidePanelService, private delegate: DelegateService, private sideNav: SideNavService) {
        this.sideNavDetails = new SideNavDetails();
    }

    ngOnInit() {
        this.sideNav.getEmittedValue()
            .subscribe((sideNavDetails: SideNavDetails) => {
                this.sideNavDetails = sideNavDetails;
            });
        this.sideNavDetails = this.sideNav.getCurrentValue();

        this.sidePanel.getEmittedValue()
            .subscribe((panelDetails: PanelDetails) => {
                this.sidePanelOpened = panelDetails.opened;
                this.delegateId = panelDetails.id;
            });
    }

    toggleSideNav(open: boolean) {
        if (!this.sideNavDetails.pinned) {
            open ? this.sideNav.open('over') : this.sideNav.close();
        }
    }
}
