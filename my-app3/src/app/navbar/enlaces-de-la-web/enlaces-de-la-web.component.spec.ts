import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesDeLaWebComponent } from './enlaces-de-la-web.component';

describe('EnlacesDeLaWebComponent', () => {
  let component: EnlacesDeLaWebComponent;
  let fixture: ComponentFixture<EnlacesDeLaWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacesDeLaWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlacesDeLaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
