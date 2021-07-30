import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';


import { AppComponent } from './app.component';


export function MsalInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth:{
      clientId:'04598431-79dc-4033-8867-b56337c41939',
      redirectUri:'http://localhost:4200'
    },
  });
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    MsalModule,
    RouterModule.forRoot([
      {
      path: 'allfeatures',
      // pathMatch: 'full',
      loadChildren: () =>
        import('@workspace/compositions/feature-state-management/features/features-list/all-features').then(
          (module) => module.CompositionsFeatureStateManagementFeaturesFeaturesListAllFeaturesModule
        ),
      },

      {
      path: 'myfeatures',
      // pathMatch: 'full',
      loadChildren: () =>
        import('@workspace/compositions/feature-state-management/features/features-list/my-features').then(
          (module) => module.CompositionsFeatureStateManagementFeaturesFeaturesListMyFeaturesModule
        ),
      },
      {
      path: 'formedit',
      // pathMatch: 'full',
      loadChildren: () =>
        import('@workspace/compositions/feature-state-management/features/features-form').then(
          (module) => module.CompositionsFeatureStateManagementFeaturesFeaturesFormModule
        ),
      },




    ])
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MsalInstanceFactory
    },
    MsalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
