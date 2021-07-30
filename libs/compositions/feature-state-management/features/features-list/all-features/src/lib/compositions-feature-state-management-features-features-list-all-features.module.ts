import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFeaturesComponent } from './all-features/all-features.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AllFeaturesComponent
      }
    ])

  
  ],
  declarations: [
    AllFeaturesComponent
  ],
})
export class CompositionsFeatureStateManagementFeaturesFeaturesListAllFeaturesModule {}
