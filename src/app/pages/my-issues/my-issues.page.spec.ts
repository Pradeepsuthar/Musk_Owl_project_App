import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyIssuesPage } from './my-issues.page';

describe('MyIssuesPage', () => {
  let component: MyIssuesPage;
  let fixture: ComponentFixture<MyIssuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIssuesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyIssuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
