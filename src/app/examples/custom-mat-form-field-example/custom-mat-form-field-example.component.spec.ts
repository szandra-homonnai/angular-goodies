import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomMatFormFieldExampleComponent } from '@app/examples/custom-mat-form-field-example/custom-mat-form-field-example.component';

describe('CustomMatFormFieldExampleComponent', () => {
  let component: CustomMatFormFieldExampleComponent;
  let fixture: ComponentFixture<CustomMatFormFieldExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomMatFormFieldExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomMatFormFieldExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
