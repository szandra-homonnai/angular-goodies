import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, DoCheck, ElementRef, HostBinding, Inject, Input, OnDestroy, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-custom-mat-form-field',
  templateUrl: './custom-mat-form-field.component.html',
  styleUrls: ['./custom-mat-form-field.component.scss'],
  standalone: true,
  providers: [{
    provide: MatFormFieldControl, useExisting: CustomMatFormFieldComponent
  }]
})
export class CustomMatFormFieldComponent implements ControlValueAccessor, MatFormFieldControl<string>, DoCheck, OnDestroy {
  private static _nextId: number = 0;
  private _value: string = null;
  private _placeholder: string = null;
  private _required: boolean = false;
  private _disabled: boolean = false;

  public focused: boolean = false;
  public errorState: boolean = false;
  public stateChanges: Subject<void> = new Subject<void>();
  public controlType: string = 'custom-mat-form-field';

  public get empty(): boolean {
    return !this.value;
  }

  @Input()
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
    this.handleOnChange(value);
    this.stateChanges.next();
  }

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(required: boolean) {
    this._required = coerceBooleanProperty(required);
    this.stateChanges.next();
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(placeholder: string) {
    this._placeholder = placeholder;
    this.stateChanges.next();
  }

  @HostBinding('id') public id: string = `app-custom-mat-form-field-${CustomMatFormFieldComponent._nextId++}`;
  @HostBinding('attr.aria-describedby') public describedBy: string = '';
  @HostBinding('attr.aria-labelledby') public labelledBy: string = this.parentFormField?.getLabelId();
  @HostBinding('class.floating') get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    @Optional() @Inject(MAT_FORM_FIELD) public parentFormField: MatFormField,
    private focusMonitor: FocusMonitor,
    private elementRef: ElementRef<HTMLElement>,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.focusMonitor.monitor(this.elementRef.nativeElement, true)
      .subscribe((origin: FocusOrigin) => {
        this.focused = !!origin;
        this.stateChanges.next();
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public handleOnChange: (v: unknown) => void = (v: unknown) => { };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public handleOnTouched: () => void = () => { };

  public writeValue(value: unknown): void {
    this.value = typeof value === 'string' ? value : null;
  }

  public registerOnChange(fn: (v: unknown) => void): void {
    this.handleOnChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.handleOnTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elementRef.nativeElement.querySelector('input')?.focus();
    }
  }

  public setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  public onInputChange(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    this.value = target.value;
  }

  public ngDoCheck(): void {
    if (this.ngControl) {
      this.errorState = this.ngControl.invalid && this.ngControl.touched;
      this.stateChanges.next();
    }
  }

  public ngOnDestroy(): void {
    this.stateChanges.complete();
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
}
