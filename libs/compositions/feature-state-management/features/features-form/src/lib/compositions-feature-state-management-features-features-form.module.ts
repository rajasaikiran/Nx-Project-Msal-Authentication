import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        // pathMatch: 'full',
        component: EditComponent
      }
    ])
  ],
  declarations: [
    EditComponent
  ],
})
export class CompositionsFeatureStateManagementFeaturesFeaturesFormModule {}
