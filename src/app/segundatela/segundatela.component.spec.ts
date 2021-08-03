import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundatelaComponent } from './segundatela.component';

describe('SegundatelaComponent', () => {
  let component: SegundatelaComponent;
  let fixture: ComponentFixture<SegundatelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundatelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundatelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
