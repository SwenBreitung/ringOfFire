import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartSreenComponent } from './start-sreen.component';

describe('StartSreenComponent', () => {
  let component: StartSreenComponent;
  let fixture: ComponentFixture<StartSreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartSreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartSreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
