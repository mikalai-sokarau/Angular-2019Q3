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

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
  ) { }

  openModal(modalInstance): ComponentRef<any> {
    return this.attachComponentToBody(modalInstance);
  }

  closeModal(componentRef: ComponentRef<any>): void {
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
