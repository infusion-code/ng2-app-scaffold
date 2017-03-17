import { Component, Input, OnInit } from '@angular/core';
import { CurrentNavProvider } from '../services/currentNavProvider';
import { NavNode } from '../models/navNode';

@Component({
    selector: "navbar-vertical",
    template: `
        <ul class="nav navbar-nav">
            <ng-container *ngIf="_root != null">
                <ng-container *ngFor="let n of _root.Children">
                    <li *ngIf="n.Children.length==0" class="{{n.Title.length > 25 ? 'multiline' : ''}}" [routerLinkActive]="['active']">
                        <a [routerLink]="[n.Url]" id="{{n.Id}}">
                            <span class="icon fa {{n.FAIcon}} {{n.Title.length > 25 ? 'multiline' : ''}}"></span><span class="title {{n.Title.length > 25 ? 'multiline' : ''}}">{{n.Title}}</span>
                        </a>
                    </li>
                    <li *ngIf="n.Children.length>0" class="panel panel-default dropdown {{n.Title.length > 25 ? 'multiline' : ''}}" [routerLinkActive]="['active']">
                        <a data-toggle="collapse" id="{{n.Id}}" href="#{{n.Id}}_dropdown">
                            <span class="icon fa {{n.FAIcon}} {{n.Title.length > 25 ? 'multiline' : ''}}"></span><span class="title {{n.Title.length > 25 ? 'multiline' : ''}}">{{n.Title}}</span>
                        </a>
                        <!-- Dropdown -->
                        <div id="{{n.Id}}_dropdown" class="panel-collapse collapse">
                            <div class="panel-body">
                                <navbar-vertical [Node]="n"></navbar-vertical>
                            </div>
                        </div>
                    </li>
                </ng-container>
            </ng-container>
        </ul>
    `,
    styles: [`
        :host .nav.navbar-nav > li > a:hover { color: #22A7F0; }
        :host .nav.navbar-nav ul  li.multiline { padding-bottom: 60px; }
        :host .nav.navbar-nav ul  li > a { height: auto; }
        :host .nav.navbar-nav ul  li > a > span.icon.fa { float: left; display: block; height: 14px; padding-top: 15px; }
        :host .nav.navbar-nav ul  li > a > span.icon.fa.multiline { vertical-align: top; margin-top: 15px;  }
        :host .nav.navbar-nav ul  li > a > span.title { white-space: normal; padding-left: 38px; display: block; box-sizing: border-box; width: 100%; }
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

    public ngOnInit() {
        if (this._root == null)
            this._provider.Root.then(n => {
                this._root = n;
            });
    }

}
