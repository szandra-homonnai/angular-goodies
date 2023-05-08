import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-mat-form-field-example',
  templateUrl: './custom-mat-form-field-example.component.html',
  styleUrls: ['./custom-mat-form-field-example.component.scss']
})
export class CustomMatFormFieldExampleComponent {
  public value1: string = 'test value';
  public value2: string = 'other value';
  public testControl: FormControl = new FormControl(null, Validators.required);
  public customControl: FormControl = new FormControl(null, Validators.required);
  public customControl2: FormControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  public customControl3: FormControl = new FormControl({ value: 'Test Value', disabled: true });
}
