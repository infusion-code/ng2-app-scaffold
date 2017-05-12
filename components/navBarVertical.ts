import { Component, Input, OnInit } from '@angular/core';
import { CurrentNavProvider } from '../services/currentNavProvider';
import { NavNode } from '../models/navNode';

@Component({
    selector: "navbar-vertical",
    template: `
        <md-nav-list *ngIf="_root != null" id="{{_root.Id}}_parent_node">
            <ng-container *ngFor="let n of _root.Children">
                <md-list-item mdTooltip="{{n.Title}}" mdTooltipShowDelay="1000">
                    <md-icon md-list-icon class="icon">{{n.MDIcon}}</md-icon>
                    <a md-line [routerLink]="[n.Url]" *ngIf="n.Children.length == 0 || n.Url.length > 0">{{n.Title}}</a>
                    <a md-line *ngIf="n.Children.length > 0 && n.Url.length == 0" (click)="ExpandChildren(n.Id)">{{n.Title}}</a>
                    <ng-container *ngIf="n.Children.length > 0">
                        <md-icon (click)="ExpandChildren(n.Id)">arrow_drop_down</md-icon>
                    </ng-container>
                </md-list-item>
                <div class="collapsed child_nodes" id="{{n.Id}}_child_nodes">
                    <navbar-vertical [Node]="n"></navbar-vertical>
                </div>
            </ng-container>
        </md-nav-list>
    `,
    styles: [`
        .collapsed { display: none; }
        .child_nodes { padding-left: 40px; }
        .icon { position: relative; top: -2px; font-size: 19px; }
    `]
})
export class VerticalNavBar implements OnInit {

    private _provider: CurrentNavProvider;
    private _root: NavNode;

    @Input()
        private get Node(): NavNode { return this._root; }
        private set Node(val: NavNode) { this._root = val; }


    constructor(provider: CurrentNavProvider){
        this._provider = provider;
    }

    public ExpandChildren(id: string) {
        if(document.getElementById(id + '_child_nodes').style.display == 'block') {
            document.getElementById(id + '_child_nodes').style.display = 'none';
        } else {
            document.getElementById(id + '_child_nodes').style.display = 'block';
        }
    }

    public ngOnInit() {
        if (this._root == null)
            this._provider.Root.then(n => {
                this._root = n;
            });
    }

}
