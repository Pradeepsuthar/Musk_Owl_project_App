import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrolledPage } from './enrolled.page';

describe('EnrolledPage', () => {
  let component: EnrolledPage;
  let fixture: ComponentFixture<EnrolledPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrolledPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
