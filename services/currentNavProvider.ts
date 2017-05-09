import { Component, Injectable } from '@angular/core';
import { NavNode } from '../models/navNode';


@Injectable()
export class CurrentNavProvider {
    protected _root: NavNode = null;

    public get Root(): Promise<NavNode> {
        return new Promise<NavNode>((resolve, reject) => {
            try {
                if (this._root == null) this.GetData();
                resolve(this._root);
            }
            catch (e) {
                reject(e);
            }
        });
    }


    constructor() {}

    protected GetData() {

        if (this._root != null) return;

        //
        // add payload retrieval from backend system.
        //

        let i: number = 0;
        let gc: Array<NavNode> = new Array<NavNode>();
        gc.push(new NavNode("Group 1.2 Item 1", "group1/group12/nav1", "curNavNode_" + (i++).toString(), "insert_chart"));
        gc.push(new NavNode("Group 1.2 Item 2 with long title to show nav item line break", "group1/group12/nav2", "curNavNode_" + (i++).toString(), "pie_chart"));

        let c: Array<NavNode> = new Array<NavNode>();
        c.push(new NavNode("Group 1 Item 1", "group1/nav1", "curNavNode_" + (i++).toString(), "insert_chart"));
        c.push(new NavNode("Group 1 Item 2 with long title to show nav item line break", "group1/nav2", "curNavNode_" + (i++).toString(), "pie_chart", gc));

        this._root = new NavNode("root", "/", "curNavNode_" + (i++).toString());
        this._root.Children.push(new NavNode("Home", "/home", "curNavNode_" + (i++).toString(), "home"));
        this._root.Children.push(new NavNode("Nav Group 1", "", "curNavNode_" + (i++).toString(), "dashboard", c));
        this._root.Children.push(new NavNode("Nav Item 1", "nav1", "curNavNode_" + (i++).toString(), "insert_drive_file"));

   }


}