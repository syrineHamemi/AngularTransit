import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournissuerComponent } from './fournissuer.component';

describe('FournissuerComponent', () => {
  let component: FournissuerComponent;
  let fixture: ComponentFixture<FournissuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournissuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournissuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
