import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MctManageComponent } from './mct-manage.component';

describe('MctManageComponent', () => {
  let component: MctManageComponent;
  let fixture: ComponentFixture<MctManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MctManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MctManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
