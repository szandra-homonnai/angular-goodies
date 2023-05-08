import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '@app/app.component';
import { CustomMatFormFieldComponent } from '@app/components/custom-mat-form-field/custom-mat-form-field.component';
import { CustomMatFormFieldExampleComponent } from '@app/examples/custom-mat-form-field-example/custom-mat-form-field-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomMatFormFieldComponent,
    CustomMatFormFieldExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
