import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabofficialaccountPage } from './tabofficialaccount.page';

describe('TabofficialaccountPage', () => {
  let component: TabofficialaccountPage;
  let fixture: ComponentFixture<TabofficialaccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabofficialaccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabofficialaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
