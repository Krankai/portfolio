import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'work-collection-details',
  templateUrl: './work-collection-details.component.html',
  styleUrls: ['./work-collection-details.component.scss']
})
export class WorkCollectionDetailsComponent implements OnInit, OnDestroy {

  projectName: string;
  subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.projectName = params['name'];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
