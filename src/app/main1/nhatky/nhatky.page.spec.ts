import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NhatkyPage } from './nhatky.page';

describe('NhatkyPage', () => {
  let component: NhatkyPage;
  let fixture: ComponentFixture<NhatkyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhatkyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NhatkyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
