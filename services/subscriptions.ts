import { Component, Injectable } from '@angular/core';
import { Subscription } from '../models/subscription';


@Injectable()
export class SubscriptionService {
    protected _subscriptions: Array<Subscription> = null;

    public get Messages(): Promise<Array<Subscription>> {
        return new Promise<Array<Subscription>>((resolve, reject) => {
            try {
                if (this._subscriptions == null) this.GetData();
                resolve(this._subscriptions);
            }
            catch (e) {
                reject(e);
            }
        });
    }


    constructor() {}

    protected GetData() {

        //
        // add payload to messages from backend system.
        //

        if (this._subscriptions == null) this._subscriptions = new Array<Subscription>();
        else {
            this._subscriptions.splice(0, this._subscriptions.length);
        }
        this._subscriptions.push(new Subscription("New Alerts", 5, "priority_hight", "", "/home"));
        this._subscriptions.push(new Subscription("New Tasks", 3, "check", "success"));
        this._subscriptions.push(new Subscription("Unread Messages", 18, "comment", "danger"));

   }


}