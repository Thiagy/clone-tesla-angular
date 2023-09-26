import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricpowertrainComponent } from './electricpowertrain.component';

describe('ElectricpowertrainComponent', () => {
  let component: ElectricpowertrainComponent;
  let fixture: ComponentFixture<ElectricpowertrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricpowertrainComponent]
    });
    fixture = TestBed.createComponent(ElectricpowertrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
