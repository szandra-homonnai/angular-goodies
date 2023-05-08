import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomMatFormFieldComponent } from '@app/components/custom-mat-form-field/custom-mat-form-field.component';

describe('CustomMatFormFieldComponent', () => {
  let component: CustomMatFormFieldComponent;
  let fixture: ComponentFixture<CustomMatFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomMatFormFieldComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomMatFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
