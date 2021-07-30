import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFeaturesComponent } from './my-features/my-features.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        // pathMatch: 'full',
        component: MyFeaturesComponent
      }
    ])
  ],
  declarations: [
    MyFeaturesComponent
  ],
})
export class CompositionsFeatureStateManagementFeaturesFeaturesListMyFeaturesModule {}
