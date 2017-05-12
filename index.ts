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
import { PanelDetails } from './models/panelDetails';

// decorator imports
import { SessionStorage, LocalStorage } from './decorators/storage';

// directive imports
import { DelegateControl } from './directives/delegate';

// component imports
import { Breadcrumb } from './components/breadcrumb';
import { HeroComponent } from './components/hero';
import { NotificationBadge } from './components/notificationBadge';
import { SubscriptionBadge } from './components/subscriptionBadge';
import { GlobalNav } from './components/globalNav';
import { CurrentNav } from './components/currentNav';
import { VerticalNavBar } from './components/navBarVertical';
import { Footer } from './components/footer';
import { AppComponent } from './components/app';
import { GlobalCss} from './components/globalCss';
import { Content } from './components/content';

// delegate controls imports
import { NotificationSidePanel } from './delegates/notificationSidePanel';
import { SubscriptionSidePanel } from './delegates/subscriptionSidePanel';
import { HeroSidePanel } from './delegates/heroSidePanel';

// service imports
import { BreadcrumbService } from './services/breadcrumb';
import { HeroService } from './services/hero';
import { NotificationsService } from './services/notifications';
import { SubscriptionService } from './services/subscriptions';
import { CurrentNavProvider } from './services/currentNavProvider';
import { ConfigService, Guid } from './services/configService';
import { LocalStorageService, SessionStorageService } from './services/storageService';
import { DelegateService, IDelegateControlMetadata } from './services/delegateService';
import { SideNavService } from './services/sideNav';
import { SidePanelService } from './services/sidePanel';

// module imports
import { AppMaterialModule } from './modules/app-material';

// global exports
export { NavNode, Hero, Message, Subscription, DelegateControl, IDelegateControlMetadata, AppComponent, Breadcrumb, CurrentNav, GlobalNav, Footer, HeroComponent, NotificationBadge, SubscriptionBadge, BreadcrumbService, HeroService, NotificationsService, SubscriptionService, CurrentNavProvider, ConfigService, DelegateService, SessionStorage, LocalStorage, SessionStorageService, LocalStorageService, Guid, Content, SidePanelService, PanelDetails, NotificationSidePanel, SubscriptionSidePanel, HeroSidePanel, SideNavService }

// module definition
@NgModule({
    imports: [CommonModule, RouterModule, AppMaterialModule],
    declarations: [AppComponent, GlobalCss, Breadcrumb, CurrentNav, GlobalNav, Footer, HeroComponent, NotificationBadge, SubscriptionBadge, VerticalNavBar, DelegateControl, Content, NotificationSidePanel, HeroSidePanel, SubscriptionSidePanel],
    exports: [AppComponent, Breadcrumb, CurrentNav, GlobalNav, Footer, HeroComponent, NotificationBadge, SubscriptionBadge, CommonModule, AppMaterialModule, RouterModule, DelegateControl, Content, NotificationSidePanel, HeroSidePanel, SubscriptionSidePanel],
})
export class AppScaffoldModule {

    constructor(private delegates: DelegateService) {
        delegates.RegisterDelegate(<IDelegateControlMetadata>{ controlId: 'notification', selector: '', template: '<notification-sidePanel></notification-sidePanel>', imports: [ AppScaffoldModule ] });
        delegates.RegisterDelegate(<IDelegateControlMetadata>{ controlId: 'hero', selector: '', template: '<hero-sidePanel></hero-sidePanel>', imports: [ AppScaffoldModule ] });
        delegates.RegisterDelegate(<IDelegateControlMetadata>{ controlId: 'subscription', selector: '', template: '<subscription-sidePanel [MoreLink]="\'/home\'"></subscription-sidePanel>', imports: [ AppScaffoldModule ] });
    }

    static forRoot(breadcrumb?: BreadcrumbService, hero?: HeroService, notification?: NotificationsService, subscriptions?: SubscriptionService, currentNavProvider?: CurrentNavProvider, configService?: ConfigService, delegateService?: DelegateService, sidePanelService?: SidePanelService, sideNavService?: SideNavService): ModuleWithProviders {
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
                sidePanelService ? { provide: SidePanelService, useValue: sidePanelService } : SidePanelService,
                sideNavService ? { provide: SideNavService, useValue: sideNavService } : SideNavService
            ]
        };
    }

}


