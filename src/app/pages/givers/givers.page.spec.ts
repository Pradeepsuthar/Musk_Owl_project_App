import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiversPage } from './givers.page';

describe('GiversPage', () => {
  let component: GiversPage;
  let fixture: ComponentFixture<GiversPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiversPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
