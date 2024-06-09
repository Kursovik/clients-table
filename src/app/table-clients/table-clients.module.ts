import { NgModule } from '@angular/core';
import { TableClientsComponent } from './table-clients/table-clients.component';
import { TableClientsViewComponent } from './pages/table-clients-view/table-clients-view.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RouterModule } from '@angular/router';
import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { TableClientsButtonsComponent } from './pages/table-clients-buttons/table-clients-buttons.component';
import { CreateEditFormComponent } from './pages/create-edit-form/create-edit-form.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ValidationMessageModule } from '../ui-components/validation-message/validation-message.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { InputModule } from '../ui-components/input/input.module';
import { FacadeService } from './services/facade.service';
import { ApiService } from './services/api.service';
import { LocalStorageService } from './services/local-storage.service';
import {StoreService} from "./services/store.service";
import {SubmitButtonsModule} from "../ui-components/submit-buttons/submit-buttons.module";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";

@NgModule({
  declarations: [
    TableClientsComponent,
    TableClientsViewComponent,
    TableClientsButtonsComponent,
    CreateEditFormComponent,
  ],
  imports: [
    NzTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: TableClientsComponent,
      },
    ]),
    AsyncPipe,
    NgForOf,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzToolTipModule,
    JsonPipe,
    NgIf,
    ValidationMessageModule,
    NzFormModule,
    InputModule,
    SubmitButtonsModule,
    NzDropDownModule,
    FormsModule,
  ],
  providers: [NzModalService, FacadeService, ApiService, LocalStorageService,StoreService],
})
export class TableClientsModule {}
