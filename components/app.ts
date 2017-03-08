import { Component } from '@angular/core';
import { ConfigService } from '../services/configService';

@Component({
    selector: 'app',
    template: `
        <div class='app-container'>
            <div class="row content-container">
                <global-nav [ShowLeftNavToggle]="ShowLeftNavToggle" [ShowSubscriptions]="ShowSubscriptions" [ShowHero]="ShowHero" [ShowNotifications]="ShowNotifications"></global-nav>
                <current-nav [HomeLabel]="Title" [HomeIcon]="AppIcon"></current-nav>
                <!-- Main Content -->
                <div class="container-fluid">
                    <router-outlet></router-outlet>
                </div>   
            </div>
            <app-footer [Copyright]="Copyright" [Version]="Version" [VersionNotes]="ReleaseNotes" ></app-footer>
        </div>
    `,
    styles: [
        "@media (max-width: 767px) { .body-content { padding-top: 50px; }}"
    ],
})
export class AppComponent {
    private _config: ConfigService;

    public get ShowLeftNavToggle(): boolean { return this._config.ShowLeftNavToggle; }
    public get ShowSubscriptions(): boolean { return this._config.ShowSubscriptions; }
    public get ShowHero(): boolean { return this._config.ShowHero; }
    public get ShowNotifications(): boolean { return this._config.ShowNotifications; }
    public get Title(): string { return this._config.Title; }
    public get AppIcon(): string { return this._config.AppIcon; }
    public get Copyright(): string { return this._config.Copyright; }
    public get Version(): string { return this._config.Version; }
    public get ReleaseNotes(): string { return this._config.ReleaseNotes; } 

    constructor(config: ConfigService) {
        this._config = config;
    }
}
