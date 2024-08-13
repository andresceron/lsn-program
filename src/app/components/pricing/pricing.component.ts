import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { PLANS_DETAIL } from '../../constants/plans.constants';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    FontAwesomeModule,
    JsonPipe,
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit {
  public activeTab: string = 'monthly';
  public isModalOpen: boolean = false;
  public selectedDetailPlan: string = 'rx';

  public test = ['red', 'blue', 'green']

  public detailedPlanData = PLANS_DETAIL;

  constructor(private library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  public ngOnInit(): void {
  }

  public changeTab(tabValue: string) {
    this.activeTab = tabValue;
  };

  public closePlanDetailModal() {
    this.isModalOpen = true;
  }

  public openPlanDetailModal(plan: string) {
    this.isModalOpen = true;
    this.selectedDetailPlan = plan;
  }
}
