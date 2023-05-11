import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-mat-form-field-example',
  templateUrl: './custom-mat-form-field-example.component.html',
  styleUrls: ['./custom-mat-form-field-example.component.scss']
})
export class CustomMatFormFieldExampleComponent {
  public customValue: string = '';
  public customControl: FormControl<string> = new FormControl(null, Validators.required);
  public customControl2: FormControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  public customControl3: FormControl = new FormControl({ value: 'Test Value', disabled: true });
}
