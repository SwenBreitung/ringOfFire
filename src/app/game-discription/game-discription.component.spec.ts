import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDiscriptionComponent } from './game-discription.component';

describe('GameDiscriptionComponent', () => {
  let component: GameDiscriptionComponent;
  let fixture: ComponentFixture<GameDiscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameDiscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameDiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
