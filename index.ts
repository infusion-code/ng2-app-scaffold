// core ng2 imports
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
import { DelegateService, IDelegateControlMetadata } from './services/delegateService';
import { WindowRef } from './services/windowref';
import { DocumentRef } from './services/documentref';

// global exports
export { NavNode, Hero, Message, Subscription, DelegateControl, IDelegateControlMetadata, AppComponent, Breadcrumb, CurrentNav, GlobalNav, Footer, HeroComponent, NotificationBadge, SubscriptionBadge, WindowRef, DocumentRef, BreadcrumbService, HeroService, NotificationsService, SubscriptionService, CurrentNavProvider, ConfigService, DelegateService, SessionStorage, LocalStorage, SessionStorageService, LocalStorageService, Guid } 

// module definition
@NgModule({
    imports: [CommonModule, RouterModule ],
    declarations: [AppComponent, GlobalCss, Breadcrumb, CurrentNav, GlobalNav, Footer, HeroComponent, NotificationBadge, SubscriptionBadge, VerticalNavBar, DelegateControl ],
    exports: [AppComponent, Breadcrumb, CurrentNav, GlobalNav, Footer, HeroComponent, NotificationBadge, SubscriptionBadge, CommonModule, RouterModule, DelegateControl ],
})
export class AppScaffoldModule {

    static forRoot(breadcrumb?: BreadcrumbService, hero?: HeroService, notification?: NotificationsService, subscriptions?: SubscriptionService, currentNavProvider?: CurrentNavProvider, configService?: ConfigService, delegateService?: DelegateService): ModuleWithProviders {
        return {
            ngModule: AppScaffoldModule,
            providers: [
                breadcrumb ? { provide: BreadcrumbService, useValue: breadcrumb } : BreadcrumbService,
                hero ? { provide: HeroService, useValue: hero } : HeroService,
                notification ? { provide: NotificationsService, useValue: notification } : NotificationsService,
                subscriptions ? { provide: SubscriptionService, useValue: subscriptions } : SubscriptionService,
                currentNavProvider ? { provide: CurrentNavProvider, useValue: currentNavProvider } : CurrentNavProvider,
                configService ? { provide: ConfigService, useValue: configService } : ConfigService,
                delegateService ? { provide: DelegateService, useValue: delegateService } : DelegateService,
                WindowRef,
                DocumentRef
            ]
        };
    }

}


