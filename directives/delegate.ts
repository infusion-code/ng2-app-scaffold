import { Component, Directive, NgModule, Input, ViewContainerRef, Compiler, ComponentFactory, ModuleWithComponentFactories, ComponentRef, ReflectiveInjector, OnDestroy, Type} from '@angular/core';
import { DelegateService, DelegateControlMetadata } from '../services/delegateService';

export function createComponentFactory(compiler: Compiler, metadata: Component, imports: Array<Type<any> | any[]>): Promise<ComponentFactory<any>> {
    const componentClass = class DynamicComponent {};
    const decoratedComponent = Component(metadata)(componentClass);

    @NgModule({ 
      imports: imports, 
      declarations: [decoratedComponent] 
    })
    class DynamicHtmlModule { }

    return compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
       .then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
        return moduleWithComponentFactory.componentFactories.find(x => x.componentType === decoratedComponent);
      });
}

@Directive({ 
  selector: 'delegate-control' 
})
export class DelegateControl implements OnDestroy {
  @Input() id: string;
  componentReference: ComponentRef<any>;

  constructor(private viewContainer: ViewContainerRef, private compiler: Compiler, private delegates: DelegateService) { }

  ngOnChanges() {
    if (!this.id) return;

    let d:DelegateControlMetadata = this.delegates.GetDelegate(this.id);
    if (!d) return;
    if (this.componentReference)  this.componentReference.destroy();

    const compMetadata = new Component({
        selector: d.selector,
        template: d.template,
        styles: d.styles
    });

    createComponentFactory(this.compiler, compMetadata, d.imports)
      .then(factory => {
        const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainer.parentInjector);   
        this.componentReference = this.viewContainer.createComponent(factory, 0, injector, []);
      });
  }

  ngOnDestroy() {
    if(this.componentReference) this.componentReference.destroy(); 
  }
}