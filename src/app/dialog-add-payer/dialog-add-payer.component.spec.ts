import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPayerComponent } from './dialog-add-payer.component';

describe('DialogAddPayerComponent', () => {
  let component: DialogAddPayerComponent;
  let fixture: ComponentFixture<DialogAddPayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddPayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddPayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
