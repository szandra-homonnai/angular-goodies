import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomMatFormFieldExampleComponent } from '@app/examples/custom-mat-form-field-example/custom-mat-form-field-example.component';

const routes: Routes = [
  { path: '', component: CustomMatFormFieldExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
