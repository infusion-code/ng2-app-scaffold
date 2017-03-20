import { Component } from '@angular/core';
import { ConfigService } from '../services/configService';

@Component({
    selector: 'app',
    template: `
        <global-css *ngIf="UseGlobalCss == true"></global-css>
        <div class='app-container' [ngClass]="{'expanded': _sideMenuExpanded }">
            <div class="row content-container">
                <global-nav [ShowLeftNavToggle]="ShowLeftNavToggle" [ExpandCurrentNavOnLoad]="ExpandCurrentNavOnLoad" [ShowSubscriptions]="ShowSubscriptions" [ShowHero]="ShowHero" [ShowNotifications]="ShowNotifications" (SideMenuToggled)="ToggleSideMenu($event)"></global-nav>
                <current-nav [HomeLabel]="Title" [HomeIcon]="AppIcon"></current-nav>
                <!-- Main Content -->
                <div class="container-fluid padding-top">
                    <router-outlet></router-outlet>
                </div>   
            </div>
            <app-footer [Copyright]="Copyright" [Version]="Version" [VersionNotes]="ReleaseNotes" ></app-footer>
        </div>
    `,
    styles: [`
        .app-container {  min-height: 100%; position: relative; padding-bottom: 60px; }
        .app-container .content-container { margin-right: 0; margin-left: 0; }
        .container-fluid > .navbar-collapse, .container-fluid > .navbar-header, .container > .navbar-collapse, .container > .navbar-header { margin-left: -15px; margin-right: -15px; }
        .page-title { font-family: 'Roboto Condensed', sans-serif;margin-left: -10px;margin-right: -10px; padding: 15px 10px; margin-bottom: 0px; height: auto; }
        .page-title .title { font-size: 2em; }
        .page-title .page-action {float: right;height: 40px; line-height: 40px; vertical-align: middle; }
        .sub-title { font-family: 'Roboto Condensed', sans-serif; }
        .sub-title > * { display: inline-block; }
        .sub-title h3 { margin-right: 10px; }
        .sub-title .description { font-family: 'Roboto Condensed', sans-serif; font-size: 0.9em; }
        .sub-title .action .btn { padding: 0 0.5em; }
        @media (max-width: 768px) {
          .body-content { padding-top: 50px; }
          .app-container /deep/ .content-container .side-body { margin-left: 10px; }
          .app-container.expanded /deep/ .side-body { margin-left: 10px; }
        }
    `],
})
export class AppComponent {
    private _config: ConfigService;
    private _sideMenuExpanded:boolean = true;

    public get ShowLeftNavToggle(): boolean { return this._config.ShowLeftNavToggle; }
    public get ShowSubscriptions(): boolean { return this._config.ShowSubscriptions; }
    public get ShowHero(): boolean { return this._config.ShowHero; }
    public get ShowNotifications(): boolean { return this._config.ShowNotifications; }
    public get ExpandCurrentNavOnLoad(): boolean { return this._config.ExpandCurrentNavOnLoad; }
    public get Title(): string { return this._config.Title; }
    public get AppIcon(): string { return this._config.AppIcon; }
    public get Copyright(): string { return this._config.Copyright; }
    public get Version(): string { return this._config.Version; }
    public get ReleaseNotes(): string { return this._config.ReleaseNotes; } 
    public get UseGlobalCss(): boolean { return this._config.UseGlobalCss; }

    constructor(config: ConfigService) {
        this._config = config;
    }

    public ToggleSideMenu(state:boolean){
        this._sideMenuExpanded = state;
    }
}
