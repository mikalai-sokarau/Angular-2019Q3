import {
  Injectable,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  EmbeddedViewRef,
  ComponentRef
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public isActive = false;

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
  ) { }

  public openModal(modalInstance): ComponentRef<any> {
    this.isActive = true;
    return this.attachComponentToBody(modalInstance);
  }

  public closeModal(componentRef: ComponentRef<any>): void {
    this.isActive = false;
    this.removeComponentFromBody(componentRef);
  }

  private attachComponentToBody(component): ComponentRef<any> {
    const componentRef = this.resolver
      .resolveComponentFactory(component)
      .create(this.injector);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    this.appRef.attachView(componentRef.hostView);
    document.body.appendChild(domElement);

    return componentRef;
  }

  private removeComponentFromBody(componentRef: ComponentRef<any>): void {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
