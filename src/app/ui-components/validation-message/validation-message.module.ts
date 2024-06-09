import { NgModule } from '@angular/core';
import { ValidationMessageComponent } from './validation-message.component';
import { ValidationPipe } from './pipes/validation.pipe';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [ValidationMessageComponent, ValidationPipe],
  exports: [ValidationMessageComponent],
  imports: [NgIf],
})
export class ValidationMessageModule {}
