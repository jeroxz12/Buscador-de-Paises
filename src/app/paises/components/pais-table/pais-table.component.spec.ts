import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisTableComponent } from './pais-table.component';

describe('PaisTableComponent', () => {
  let component: PaisTableComponent;
  let fixture: ComponentFixture<PaisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
