import { Component, Directive, NgModule, Input, ViewContainerRef, Compiler, ComponentFactory, ModuleWithComponentFactories, ComponentRef, ReflectiveInjector, OnDestroy} from '@angular/core';
import { RouterModule }  from '@angular/router';
import { CommonModule } from '@angular/common';

export function createComponentFactory(compiler: Compiler, metadata: Component): Promise<ComponentFactory<any>> {
    const componentClass = class DynamicComponent {};
    const decoratedComponent = Component(metadata)(componentClass);

    @NgModule({ imports: [CommonModule, RouterModule], declarations: [decoratedComponent] })
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
  @Input() template: string;
  componentReference: ComponentRef<any>;

  constructor(private viewContainer: ViewContainerRef, private compiler: Compiler) { }

  ngOnChanges() {
    const html = this.template;
    if (!html) return;
    if(this.componentReference) {
      this.componentReference.destroy();
    }

    const compMetadata = new Component({
        selector: 'dynamic-html',
        template: this.template,
    });

    createComponentFactory(this.compiler, compMetadata)
      .then(factory => {
        const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainer.parentInjector);   
        this.componentReference = this.viewContainer.createComponent(factory, 0, injector, []);
      });
  }

  ngOnDestroy() {
    if(this.componentReference) this.componentReference.destroy(); 
  }
}