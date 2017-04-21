import { Component, Injectable, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { NavNode } from '../models/navNode';
import 'rxjs/add/operator/filter';

@Injectable()
export class BreadcrumbService implements OnDestroy {
    private readonly _navNodeIdPrefix: string = "breadcrumb_navNode_";
    private _router: Router;
    private _route: ActivatedRoute;
    private _subscription: Subscription;
    protected _breadcrumbNodes: Array<NavNode>;

    public get Nodes(): Array<NavNode> {
        return this._breadcrumbNodes;
    }

    constructor(router: Router, route: ActivatedRoute) {
        this._router = router;
        this._route = route;
        this._breadcrumbNodes = new Array<NavNode>();
        this.SubbscribeToRouteNotifications();
    }

    private SubbscribeToRouteNotifications() {
        let that: BreadcrumbService = this;
        this._router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {  // note, we don't use event                
                let currentRoute: ActivatedRoute = this._route.root;
                that.ProcessRouteNotification(currentRoute);
            })
    }

    protected ProcessRouteNotification(currentRoute: ActivatedRoute) {
        let url: string = '';
        let id: number = 0;

        this._breadcrumbNodes = new Array<NavNode>();
        do {
            let childrenRoutes = currentRoute.children;
            currentRoute = null;
            childrenRoutes.forEach(route => {
                if (route.outlet === 'primary') {
                    let routeSnapshot = route.snapshot;
                    let name:string;
                    console.log('snapshot:', routeSnapshot)
                    url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                    name = route.snapshot.data["breadcrumb"] ? route.snapshot.data["breadcrumb"] : url.substring(url.lastIndexOf("/")+1);
                    if (routeSnapshot.params != null && routeSnapshot.params["name"] != null) {
                        if(route.snapshot.data["hideinbreadcrumb"] !== true && route.snapshot.data["addafterparameternode"] !== true ) { 
                            this._breadcrumbNodes.push(new NavNode(name, null, this._navNodeIdPrefix + (id++).toString()));
                        }
                        this._breadcrumbNodes.push(new NavNode(routeSnapshot.params["name"], url, this._navNodeIdPrefix + (id++).toString()));
                        if(route.snapshot.data["hideinbreadcrumb"] !== true && route.snapshot.data["addafterparameternode"] === true ) { 
                            this._breadcrumbNodes.push(new NavNode(name, null, this._navNodeIdPrefix + (id++).toString()));
                        }
                    }
                    else {
                        if(route.snapshot.data["hideinbreadcrumb"] !== true) { 
                            this._breadcrumbNodes.push(new NavNode(name, url, this._navNodeIdPrefix + (id++).toString()));
                        }
                    }
                    currentRoute = route;
                }
            })
        } while (currentRoute);
    }

    public ngOnDestroy() {
        if (this._subscription) this._subscription.unsubscribe();
    }

}