import { Component, Injectable } from '@angular/core';
import { Message } from '../models/message';


@Injectable()
export class NotificationsService {
    protected _messages: Array<Message> = null;

    public get Messages(): Promise<Array<Message>> {
        return new Promise<Array<Message>>((resolve, reject) => {
            try {
                if (this._messages == null) this.GetData();
                resolve(this._messages)
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

        if (this._messages == null) this._messages = new Array<Message>();
        else {
            this._messages.splice(0, this._messages.length);
        }
        for (let i = 0; i < 5; i++) {
            let m: Message = new Message("Some Message", new Date());
            this._messages.push(m);
        }

    }


}