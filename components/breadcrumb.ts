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
                <a *ngIf="node.Url" [routerLink]="node.Url" id={{node.Id}}>{{node.Title}}</a>
                <span *ngIf="(node.Url == null || node.Url == '')" id={{node.Id}}>{{node.Title}}</span>
            </li>
        </ol>`,
    styles: ["* { color: white !Important ;}", ".navbar.navbar-breadcrumb li a {color: white !Important; }", ".navbar.navbar-default .navbar-breadcrumb li a {color: white !Important; }", ":host { float: left }"]
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