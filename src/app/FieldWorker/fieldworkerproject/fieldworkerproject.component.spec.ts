import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldworkerprojectComponent } from './fieldworkerproject.component';

describe('FieldworkerprojectComponent', () => {
  let component: FieldworkerprojectComponent;
  let fixture: ComponentFixture<FieldworkerprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldworkerprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldworkerprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
