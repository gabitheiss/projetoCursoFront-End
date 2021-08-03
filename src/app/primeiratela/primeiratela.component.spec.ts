import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiratelaComponent } from './primeiratela.component';

describe('PrimeiratelaComponent', () => {
  let component: PrimeiratelaComponent;
  let fixture: ComponentFixture<PrimeiratelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiratelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiratelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
