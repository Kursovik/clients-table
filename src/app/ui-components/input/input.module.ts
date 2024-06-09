import {NgModule} from "@angular/core";
import { InputComponent } from './input/input.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {ValidationMessageModule} from "../validation-message/validation-message.module";

@NgModule({
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ],
  imports: [
    NzInputModule,
    ValidationMessageModule,
  ]
})
export class InputModule{}
