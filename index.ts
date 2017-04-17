﻿// core ng2 imports
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// model imports
import { NavNode } from './models/navNode';
import { Hero } from './models/hero';
import { Message } from './models/message';
import { Subscription } from './models/subscription';

// decorator imports
import { SessionStorage, LocalStorage } from './decorators/storage';

// directive imports
import { DelegateControl } from './directives/delegate';

// component imports
import { Breadcrumb } from './components/breadcrumb';
import { HeroComponent } from './components/hero';
import { NotificationBadge } from './components/notificationBadge';
import { SubscriptionBadge } from './components/subscriptionBadge';
import { GlobalNav } from './components/topMenu';
import { CurrentNav } from './components/currentNav';
import { VerticalNavBar } from './components/navBarVertical';
import { Footer } from './components/footer';
import { AppComponent } from './components/app';
import { GlobalCss} from './components/globalCss';

// service imports
import { BreadcrumbService } from './services/breadcrumb';
import { HeroService } from './services/hero';
import { NotificationsService } from './services/notifications';
import { SubscriptionService } from './services/subscriptions';
import { CurrentNavProvider } from './services/currentNavProvider';
import { ConfigService, Guid } from './services/configService';
import { LocalStorageService, SessionStorageService } from './services/storageService';
import { DelegateService } from './services/delegateService';

// global exports
export { NavNode, Hero, Message, Subscription, DelegateControl, AppComponent, Breadcrumb, CurrentNav, GlobalNav, Footer, HeroComponent, NotificationBadge, SubscriptionBadge, BreadcrumbService, HeroService, NotificationsService, SubscriptionService, CurrentNavProvider, ConfigService, DelegateService, SessionStorage, LocalStorage, SessionStorageService, LocalStorageService, Guid } 

// module definition
@NgModule({
    imports: [CommonModule, RouterModule ],
    declarations: [AppComponent, GlobalCss, Breadcrumb, CurrentNav, GlobalNav, Footer, HeroComponent, NotificationBadge, SubscriptionBadge, VerticalNavBar, DelegateControl ],
    exports: [AppComponent, Breadcrumb, CurrentNav, GlobalNav, Footer, HeroComponent, NotificationBadge, SubscriptionBadge, CommonModule, RouterModule, DelegateControl ],
    providers: [BreadcrumbService, HeroService, NotificationsService, SubscriptionService, CurrentNavProvider, ConfigService, DelegateService ]
})
export class AppScaffoldModule {

    static forRoot(breadcrumb: BreadcrumbService, hero: HeroService, notification: NotificationsService, subscriptions: SubscriptionService, currentNavProvider: CurrentNavProvider, configService: ConfigService, delegateService: DelegateService): ModuleWithProviders {
        return {
            ngModule: AppScaffoldModule,
            providers: [
                { provide: BreadcrumbService, useValue: breadcrumb },
                { provide: HeroService, useValue: hero },
                { provide: NotificationsService, useValue: notification },
                { provide: SubscriptionService, useValue: subscriptions },
                { provide: CurrentNavProvider, useValue: currentNavProvider },
                { provide: ConfigService, useValue: configService },
                { provide: DelegateService, useValue: delegateService }
            ]
        };
    }

}


