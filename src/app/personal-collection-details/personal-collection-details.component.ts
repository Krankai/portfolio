import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'personal-collection-details',
  templateUrl: './personal-collection-details.component.html',
  styleUrls: ['./personal-collection-details.component.scss']
})
export class PersonalCollectionDetailsComponent implements OnInit, OnDestroy {

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
