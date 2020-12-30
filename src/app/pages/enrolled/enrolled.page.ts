import { Component, OnInit } from '@angular/core';
import { ApprovedPage } from '../approved/approved.page';
import { PendingPage } from '../pending/pending.page';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.page.html',
  styleUrls: ['./enrolled.page.scss'],
})
export class EnrolledPage implements OnInit {

  pending = PendingPage;
  approved = ApprovedPage;

  constructor() { }

  ngOnInit() {
  }

}
