import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BreadcrumbService } from '../services/breadcrumb';
import { NavNode } from '../models/navNode';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'breadcrumb',
    template: `
        <ol class="breadcrumb navbar-breadcrumb">
            <ng-container *ngFor="let node of Nodes; let isFirst = first; let isLast = last">
                <li [ngClass]="{'first': isFirst, 'last': isLast}">
                    <a *ngIf="node.Url" [routerLink]="node.Url" id={{node.Id}} title={{node.Title}}>{{node.Title}}</a>
                    <span *ngIf="(node.Url == null || node.Url == '')" id={{node.Id}} title={{node.Title}}>{{node.Title}}</span>
                </li>
                <li *ngIf="isFirst" class="ellipsis">
                    <span class=".dropdown-toggle" id="{{node.Id}}-ellipsis" title="Show more" data-toggle="dropdown">...</span>
                    <ul class="dropdown-menu">
                        <li *ngFor="let mn of Nodes">
                            <a *ngIf="mn.Url" [routerLink]="mn.Url" id={{mn.Id}} title={{mn.Title}}>{{mn.Title}}</a>
                            <span *ngIf="(mn.Url == null || mn.Url == '')" id={{mn.Id}} title={{mn.Title}}>{{mn.Title}}</span>                    
                        </li>
                    </ul>
                </li>
            </ng-container>
        </ol>
        `,
    styles: [`
        :host { float: left }
        * { color: white !Important ;}
        .breadcrumb.navbar-breadcrumb { margin-bottom: 0px; max-width: 100px; white-space: nowrap; position: relative; }
        .navbar-breadcrumb { margin-left: 0px; background-color: transparent; padding: 0px; }
        .navbar-breadcrumb > li { height: 60px; line-height: 60px; vertical-align: middle; font-size: 1.5em; padding-left: 10px; margin-left: -4px}
        .navbar-breadcrumb > li.ellipsis { display: none; cursor: pointer; }
        .navbar-breadcrumb > li:first-child { padding-left: 0px }
        .breadcrumb > li + li:before { margin-right: 0px; padding: 0px }
        .dropdown-menu { border-radius: 0; padding: 0; margin: -1px 0 0 -3px; background-color: black; }
        .dropdown-menu > li { padding-left: 0 !important; line-height: initial !important; }
        .dropdown-menu > li > a, .dropdown-menu > li > span  { font-size: 0.9em; padding: 5px 10px; display: block;  }
        .dropdown-menu > li > a:before, .dropdown-menu > li > span:before { font-family: FontAwesome; content: "\\f101"; padding-right: 5px;}
        .dropdown-menu > li:first-child > a:before, .dropdown-menu > li:first-child > span:before { display: none; }
        .dropdown-menu > li:nth-child(2){ padding-left: 10px !important; }
        .dropdown-menu > li:nth-child(3){ padding-left: 20px !important; }
        .dropdown-menu > li:nth-child(4){ padding-left: 30px !important; }
        .dropdown-menu > li:nth-child(5){ padding-left: 40px !important; }
        .dropdown-menu > li:nth-child(6){ padding-left: 50px !important; }
        .dropdown-menu > li:hover { background-color: #414141; }
        .dropdown-menu > li > a:hover { background-color: transparent; }
        @media (max-width: 900px) {
            .navbar-breadcrumb > li {display: none; }
            .navbar-breadcrumb > li.first {display: inline-block; }
            .navbar-breadcrumb > li.last {display: inline-block; }
            .navbar-breadcrumb > li.ellipsis {display: inline-block; }
        }
        @media (max-width: 850px) {
            .navbar-breadcrumb > li.first {display: none; }
            .navbar-breadcrumb > li.ellipsis:before {display: none; }
        }
        @media (max-width: 768px) {
            .navbar-breadcrumb > li.first {display: inline-block; }
            .navbar-breadcrumb > li {display: inline-block; }
            .navbar-breadcrumb > li.ellipsis {display: none; }            
        }
        @media (max-width: 650px) {
            .navbar-breadcrumb > li {display: none; }
            .navbar-breadcrumb > li.first {display: inline-block; }
            .navbar-breadcrumb > li.last {display: inline-block; }
            .navbar-breadcrumb > li.ellipsis {display: inline-block; }
            .navbar-breadcrumb > li.ellipsis:before {display: initial}
        }
        @media (max-width: 480px) {
            .navbar-breadcrumb > li.first {display: none; }
            .navbar-breadcrumb > li.ellipsis:before { display: none; }
        }
    `]
})
export class Breadcrumb {
    private _breadcrumbService: BreadcrumbService;

    public get Nodes(): Array<NavNode> {
        return this._breadcrumbService.Nodes;
    }

    constructor(breadcrumbService: BreadcrumbService) {
        this._breadcrumbService = breadcrumbService;
    }

}