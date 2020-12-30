import { Component, OnInit } from '@angular/core';
import { CompletedPage } from '../completed/completed.page';
import { InProgressPage } from '../in-progress/in-progress.page';
import { MyIssuesPage } from '../my-issues/my-issues.page';
import { NewIssuesPage } from '../new-issues/new-issues.page';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.page.html',
  styleUrls: ['./issues.page.scss'],
})
export class IssuesPage implements OnInit {

  myIssues = MyIssuesPage
  newIssues = NewIssuesPage
  inProgress = InProgressPage
  completed = CompletedPage

  constructor() { }

  ngOnInit() {
  }

}
