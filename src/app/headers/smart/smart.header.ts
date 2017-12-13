/**
 * Created by SerhiiTsymbaliuk on 12/11/17.
 */
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from "../../login/authentication.service";

@Component({
  selector: 'smart-header',
  templateUrl: './smart.header.html',
})

export class SmartHeaderComponent{
  constructor(private route: ActivatedRoute, private service: AuthenticationService) {}

  logout() : void{
    this.service.logout();
  }

}
