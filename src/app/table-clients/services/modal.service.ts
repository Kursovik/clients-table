import {inject, Injectable, TemplateRef, Type} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {ModalButtonOptions} from "ng-zorro-antd/modal/modal-types";

@Injectable()
export class ModalService<T> {
  private modalService = inject(NzModalService);

  public openModal( title: string, component: Type<any> | string,data?: T, ngFooter?: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null) {
   return  this.modalService.create({
      nzTitle: title,
      nzContent: component,
      nzData: data,
      nzFooter: ngFooter || null,
      nzClosable: false
    })
  }
}
