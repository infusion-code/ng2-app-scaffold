import { Component, Input, OnInit } from '@angular/core';
import { CurrentNavProvider } from '../services/currentNavProvider';
import { NavNode } from '../models/navNode';

@Component({
    selector: "navbar-vertical",
    template: `
        <ul class="nav navbar-nav" *ngIf="_root != null" id="parent-{{_root.Id}}">
                <ng-container *ngFor="let n of _root.Children">
                    <li *ngIf="n.Children.length==0" class="{{n.Title.length > 25 ? 'multiline' : ''}}" [routerLinkActive]="['active']">
                        <a [routerLink]="[n.Url]" id="{{n.Id}}">
                            <span class="icon fa {{n.FAIcon}} {{n.Title.length > 25 ? 'multiline' : ''}}"></span><span class="title {{n.Title.length > 25 ? 'multiline' : ''}}">{{n.Title}}</span>
                        </a>
                    </li>
                    <li *ngIf="n.Children.length>0" class="panel panel-default dropdown {{n.Title.length > 25 ? 'multiline' : ''}}" [routerLinkActive]="['active']">
                        <a *ngIf="n.Url.length==0" data-toggle="collapse" id="{{n.Id}}" href="#{{n.Id}}_dropdown" [attr.data-parent]="'#parent-' + _root.Id">
                            <span class="icon fa {{n.FAIcon}} {{n.Title.length > 25 ? 'multiline' : ''}}"></span><span class="title {{n.Title.length > 25 ? 'multiline' : ''}}">{{n.Title}}</span>
                        </a>
                        <div *ngIf="n.Url.length>0">
                            <a [routerLink]="[n.Url]" id="{{n.Id}}">
                                <span class="icon fa {{n.FAIcon}} {{n.Title.length > 25 ? 'multiline' : ''}}"></span><span class="title {{n.Title.length > 25 ? 'multiline' : ''}}">{{n.Title}}</span>
                            </a>
                            <a class="expander" data-toggle="collapse" [attr.data-target]="'#' + n.Id + '_dropdown'" [attr.data-parent]="'#parent-' + _root.Id">
                                <span class="icon fa fa-angle-down"></span>
                            </a>
                        </div>
                        <!-- Dropdown -->
                        <div id="{{n.Id}}_dropdown" class="panel-collapse collapse">
                            <div class="panel-body">
                                <navbar-vertical [Node]="n"></navbar-vertical>
                            </div>
                        </div>
                    </li>
                </ng-container>
        </ul>
    `,
    styles: [`
        :host .nav.navbar-nav > li > a:hover, :host .nav.navbar-nav > li.dropdown > div > a:hover { color: #22A7F0; }
        :host .nav.navbar-nav li.multiline > a, :host .nav.navbar-nav li..dropdown.multiline > div > a { }
        :host .nav.navbar-nav li > a, :host .nav.navbar-nav li.dropdown > div > a { height: auto; }
        :host .nav.navbar-nav li > a > span.icon.fa, :host .nav.navbar-nav li.dropdown > div > a > span.icon.fa { height: 14px; }
        :host .nav.navbar-nav li > a > span.icon.fa.multiline, :host .nav.navbar-nav li.dropdown > div > a > span.icon.fa.multiline { vertical-align: top; margin-top: 15px;  }
        :host .nav.navbar-nav li > a > span.title, :host .nav.navbar-nav li.dropdown > div > a > span.title { white-space: normal; box-sizing: border-box; width: 192px;  }
        :host .nav.navbar-nav li.dropdown > div > .expander { position: absolute; padding: 0px; top: 0px; right: 0px; z-index:1; }
        :host .nav.navbar-nav li.dropdown.active > div > .expander { border: none; }
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
