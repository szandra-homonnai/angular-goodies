import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomMatFormFieldComponent } from '@app/components/custom-mat-form-field/custom-mat-form-field.component';
import { CustomMatFormFieldExampleComponent } from '@app/examples/custom-mat-form-field-example/custom-mat-form-field-example.component';
import { ExamplesRoutingModule } from '@app/examples/examples-routing.module';

@NgModule({
  declarations: [
    CustomMatFormFieldExampleComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CustomMatFormFieldComponent
  ]
})
export class ExamplesModule { }
