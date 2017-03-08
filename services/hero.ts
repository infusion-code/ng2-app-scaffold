import { Component, Injectable } from '@angular/core';
import { Hero } from '../models/hero';


@Injectable()
export class HeroService {
    protected _postLogoutRedirectUrl = "/home";
    protected _supportsLogout = true;
    protected _hero: Hero = null;

    public get Hero(): Promise<Hero> {
        return new Promise<Hero>((resolve, reject) => {
            try {
                if (!this._hero) this.GetData();
                resolve(this._hero);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    public get SupportsLogout(): boolean { return this._supportsLogout; }
    public get PostLogoutRedirect(): string { return this._postLogoutRedirectUrl; }

    constructor() { }

    protected GetData() {
        if (this._hero) return;

        //
        // add payload to get user info from backend system.
        //
        this._hero = new Hero(
            'tschueler',
            'Thor Schueler',
            'tschueler@infusion.com',
            'https://media.licdn.com/media/AAEAAQAAAAAAAAT-AAAAJDdiZTQ3OTI3LTMzM2YtNDYzZi1iMzUxLTc5ZTY3NTY0OTFhNg.jpg',
            'https://www.linkedin.com/in/thorschueler/'
        );
    }

    public Logout():Promise<string> {

        return new Promise<string>((resolve, reject) => {
            let success: boolean = true;
            // 
            // implement payloadto facilitate logout
            //
            if (success) {
                resolve("You have been successfully logged out (actually, this is just a dummy message from a dummy service, so please implement a real one...)");
            }
            else {
                reject("There was an error...");
            }

        }); 
    }

}