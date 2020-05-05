import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Store';
  
  private openPayUrl:string = "sandbox-dashboard.openpay.mx";
  private clientId:string = "ppk_d1de50e52e2b484698b239217cf5dc4a";
  private secret:string = "psk_16104da17e09444ea78d3b39849ea59c";


  callOpenPay(){
    window.location.href=`https://${this.openPayUrl}/oauth/authorize?client_id=${this.clientId}&redirect_uri=http%3a%2f%2flocalhost%3a4200%2fregister-ok&response_type=code&scope=read+write`;
  }
  //http://localhost:4200/register-ok
  //https%3a%2f%2flocalhost%3a4200%2fregister-ok
}
