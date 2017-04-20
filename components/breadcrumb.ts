import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BreadcrumbService } from '../services/breadcrumb';
import { NavNode } from '../models/navNode';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'breadcrumb',
    template: `
        <ol class="breadcrumb navbar-breadcrumb">
            <li *ngFor="let node of Nodes; let last = last">
                <a *ngIf="node.Url" [routerLink]="node.Url" id={{node.Id}} title={{node.Title}}>{{node.Title}}</a>
                <span *ngIf="(node.Url == null || node.Url == '')" id={{node.Id}} title={{node.Title}}>{{node.Title}}</span>
            </li>
        </ol>`,
    styles: [`
        :host { float: left }
        * { color: white !Important ;}
        .breadcrumb.navbar-breadcrumb { margin-bottom: 0px; max-width: 100px; white-space: nowrap; }
        .navbar-breadcrumb { margin-left: 0px; background-color: transparent; padding: 0px; }
        .navbar-breadcrumb > li { height: 60px; line-height: 60px; vertical-align: middle; font-family: 'Roboto Condensed', sans-serif; font-size: 1.5em; padding-left: 10px; }
        .navbar-breadcrumb > li:first-child { padding-left: 0px }
        .breadcrumb > li + li:before { margin-right: 0px; padding: 0px }
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