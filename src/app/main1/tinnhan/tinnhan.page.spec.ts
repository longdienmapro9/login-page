import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TinnhanPage } from './tinnhan.page';

describe('TinnhanPage', () => {
  let component: TinnhanPage;
  let fixture: ComponentFixture<TinnhanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinnhanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TinnhanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
