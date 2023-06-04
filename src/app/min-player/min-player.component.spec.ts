import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinPlayerComponent } from './min-player.component';

describe('MinPlayerComponent', () => {
  let component: MinPlayerComponent;
  let fixture: ComponentFixture<MinPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinPlayerComponent]
    });
    fixture = TestBed.createComponent(MinPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
