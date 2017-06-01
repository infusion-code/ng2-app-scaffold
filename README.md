[![npm version](https://badge.fury.io/js/ng2-app-scaffold.svg)](https://www.npmjs.com/package/ng2-app-scaffold) ![ng2-app-scaffold](https://img.shields.io/npm/dm/ng2-app-scaffold.svg) [![Code Climate](https://codeclimate.com/github/infusion-code/angular-maps/badges/gpa.svg)](https://codeclimate.com/github/infusion-code/ng2-app-scaffold) [![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

# Overview
Angular2 scaffold that provides a set of components to create a repsonsive, modern application shell, including top nav with bread crumb, notifications, user info; current nav and footer. The components are service driven, so information can be fully customized by providing service overloads. In the preferred usage scenario, users would simple use the app component in the root application component and then use the router to manage the application content. This frees up developers on focusing on the actual app components.





# Install
Install via npm:

```
    npm install --save ng2-app-scaffold
```

# Use
Import AppScaffoldModule and AppComponent in your main app module (usually app.module.ts). Note that the scaffold comes with a predefined AppComponent for bootstrapping, there is not need to create a AppComponent in your ng2 project. That is the whole point. 

```
    import { AppComponent, AppScaffoldModule } from 'ng2-app-scaffold'
```

Add the AppComponent as the bootstrap for your ng2 module and import the AppScaffoldModule (note: the module must be listed prior to the route configuration. Inject any concrete implementations for providers to configure navigation, profile service, breadcrumb service, etc.

```
    @NgModule({
        bootstrap: [ AppComponent ],
        declarations: [
            ...
        ],
        imports: [
            UniversalModule,
            AppScaffoldModule.forRoot(),
            RouterModule.forRoot([
                ...
            ])
        ],
        providers: [
            {
                provide: CurrentNavProvider, deps: [...], useFactory: NavProviderFactory
            },
            {
                provide: ConfigService, deps: [], useFactory: ConfigProviderFactory
            }
        ]
    })

    export function NavProviderFactory(...){
        return new CurrentNavService(...); 
            // this is your implementation of the current navigation provider.  
    }

    export function ConfigProviderFactory(){
        return new AppConfigService(); 
                  // this is your implementation of the configuration service. 
    }

```
> Note: The provider factory was moved into an exported method to accomodate Angular 4 requirements to no have lambda functions in the provider loading. 

#Advanced
Check out the [Wiki](../../wiki) for detailed documentation on components, models and providers. 
