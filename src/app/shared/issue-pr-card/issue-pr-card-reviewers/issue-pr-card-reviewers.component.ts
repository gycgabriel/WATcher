import { Component, Input, OnInit } from '@angular/core';
import { PullrequestReview } from '../../../core/models/pullrequest-review.model';

@Component({
  selector: 'app-issue-pr-card-reviewers',
  templateUrl: './issue-pr-card-reviewers.component.html',
  styleUrls: ['./issue-pr-card-reviewers.component.css']
})
export class IssuePrCardReviewersComponent implements OnInit {
  @Input() reviews: PullrequestReview[];

  AVATAR_WIDTH = 22;
  containerWidth: number;

  constructor() {}

  ngOnInit(): void {
    if (this.reviews) {
      // Set container width to number of reviews * (width of avatar + 2 * border width)
      this.containerWidth = this.reviews.length * (this.AVATAR_WIDTH + 2 * 2);
    }
  }
}
