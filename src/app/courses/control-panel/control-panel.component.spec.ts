import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelComponent } from './control-panel.component';
import { FormsModule } from '@angular/forms';

describe('ControlPanelComponent', () => {
  let component: ControlPanelComponent;
  let fixture: ComponentFixture<ControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPanelComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input value should be synchronized', () => {
    const testText1 = 'consectetur irure deserunt';
    const testText2 = 'ut sit est reprehenderit';
    const input = fixture.debugElement.query(By.css('.search-input')).nativeElement;

    input.value = testText1;
    input.dispatchEvent(new Event('input'));
    expect(component.searchText).toEqual(testText1);

    input.value = testText2;
    input.dispatchEvent(new Event('input'));
    expect(component.searchText).toEqual(testText2);
  });
});
