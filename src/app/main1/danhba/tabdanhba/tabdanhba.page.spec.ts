import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabdanhbaPage } from './tabdanhba.page';

describe('TabdanhbaPage', () => {
  let component: TabdanhbaPage;
  let fixture: ComponentFixture<TabdanhbaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabdanhbaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabdanhbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
