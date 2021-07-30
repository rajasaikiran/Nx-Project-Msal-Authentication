import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-common';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
  constructor(private msalservice: MsalService){

  }

isLoggedIn(): boolean {
  return this.msalservice.instance.getActiveAccount() != null;
}

// creating login 
  login()
  {
    this.msalservice.loginPopup().subscribe( (response: AuthenticationResult)=> {
    this.msalservice.instance.setActiveAccount(response.account)
    });
  }

// creating logout 
logout(){
  this.msalservice.logout();
}

}
