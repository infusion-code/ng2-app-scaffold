import { Component } from '@angular/core';
import { ConfigService } from '../services/configService';

@Component({
    selector: 'app',
    template: `
        <global-css *ngIf="UseGlobalCss == true"></global-css>
        <div class='app-container' [ngClass]="{'expanded': _sideMenuExpanded }">
            <div class="row content-container">
                <global-nav [HomeLabel]="Title" [HomeIcon]="AppIcon" [ShowLeftNavToggle]="ShowLeftNavToggle" [ToggleCurrentNav]="_sideMenuExpanded || _sideMenuHovered" [ShowSubscriptions]="ShowSubscriptions" [ShowHero]="ShowHero" [ShowNotifications]="ShowNotifications" (SideMenuToggled)="ToggleSideMenu($event)"></global-nav>
                <current-nav (SideMenuHoverChange)="HandleCurrentNavHoverChange($event)"></current-nav>
                <!-- Main Content -->
                <div class="container-fluid no-margin padding-top">
                    <router-outlet></router-outlet>
                </div>   
            </div>
            <app-footer [Copyright]="Copyright" [Version]="Version" [VersionNotes]="ReleaseNotes" ></app-footer>
        </div>
    `,
    styles: [`
        .app-container {  min-height: 100%; position: relative; padding-bottom: 60px; display: flex; flex-direction: column; align-items: stretch; }
        .app-container > .content-container { margin-right: 0; margin-left: 0; flex-grow: 1; display: flex; flex-direction: column; align-items: stretch; }
        .app-container > .content-container > .container-fluid { flex-grow: 1; display: flex; flex-direction: column; align-items: stretch; }
        .app-container > .content-container > .container-fluid > ng-component { flex-grow: 1; display: flex; flex-direction: column; align-items: stretch; }
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
    private _sideMenuToggled: boolean = true;
    private _sideMenuHovered: boolean = false;

    public get ShowLeftNavToggle(): boolean { return this._config.ShowLeftNavToggle; }
    public get ShowSubscriptions(): boolean { return this._config.ShowSubscriptions; }
    public get ShowHero(): boolean { return this._config.ShowHero; }
    public get ShowNotifications(): boolean { return this._config.ShowNotifications; }
    public get Title(): string { return this._config.Title; }
    public get AppIcon(): string { return this._config.AppIcon; }
    public get Copyright(): string { return this._config.Copyright; }
    public get Version(): string { return this._config.Version; }
    public get ReleaseNotes(): string { return this._config.ReleaseNotes; } 
    public get UseGlobalCss(): boolean { return this._config.UseGlobalCss; }

    constructor(config: ConfigService) {
        this._config = config;
        this._sideMenuExpanded = this._config.ExpandCurrentNavOnLoad;
        this._sideMenuToggled = this._sideMenuExpanded;
    }

    public ToggleSideMenu(state:boolean){
        this._sideMenuToggled = state;
        this._sideMenuExpanded = state;
    }

    private HandleCurrentNavHoverChange(state: boolean){
        this._sideMenuHovered = state;
        if(this._config.PushContentOnCurrentNavHover){
            if(this._sideMenuToggled) this._sideMenuExpanded = true;
            else{
                this._sideMenuExpanded = state;
            }
        }
    }
}
