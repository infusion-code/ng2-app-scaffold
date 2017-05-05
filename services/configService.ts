import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class ConfigService {
    protected _storageKey: string;
    protected _expandCurrentNavOnLoad: boolean;
    protected _pushContentOnCurrentNavHover: boolean;
    protected _showLeftNavToggle: boolean;
    protected _showSubscriptions: boolean;
    protected _showHero: boolean;
    protected _showNotifications: boolean;
    protected _useGlobalCss: boolean;
    protected _title: string;
    protected _faIcon: string;
    protected _copyright: string;
    protected _version: string;
    protected _releaseNotes: string;

    public get ShowLeftNavToggle(): boolean { return this._showLeftNavToggle; }
    public get ShowSubscriptions(): boolean { return this._showSubscriptions; }
    public get ShowHero(): boolean { return this._showHero; }
    public get ShowNotifications(): boolean { return this._showNotifications; }
    public get ExpandCurrentNavOnLoad(): boolean { return this._expandCurrentNavOnLoad; }
    public get PushContentOnCurrentNavHover(): boolean { return this._pushContentOnCurrentNavHover; }
    public get Title(): string { return this._title; }
    public get AppIcon(): string { return this._faIcon; }
    public get Copyright(): string { return this._copyright; }
    public get Version(): string { return this._version; }
    public get ReleaseNotes(): string { return this._releaseNotes; }
    public get UseGlobalCss(): boolean { return this._useGlobalCss; }
    public get StorageKey(): string { return this._storageKey; }

    constructor() {
        this._title = "App Title";
        this._faIcon = "fa-paper-plane-o";
        this._showLeftNavToggle = true;
        this._showSubscriptions = true;
        this._showHero = true;
        this._showNotifications = true;
        this._expandCurrentNavOnLoad = true;
        this._pushContentOnCurrentNavHover = true;
        this._useGlobalCss = true;
        this._copyright = "Copyright © 2010-2017, Infusion.";
        this._version = "0.0.1";
        this._releaseNotes = ""; 
        this._storageKey = "appStorage";
    }
}

export function Guid() {
  function s4() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +  s4() + '-' + s4() + s4() + s4();
}