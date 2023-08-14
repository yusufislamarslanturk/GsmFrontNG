
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/entities/dtos/user-dto';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';
import { UserChildComponentBaseComponent } from '../../public/bases/user-child-component-base/user-child-component-base.component';

@Component({
  selector: 'app-account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.css']
})
export class AccountOptionsComponent extends UserChildComponentBaseComponent implements OnInit {

  currenUserDTO: UserDTO
  constructor(public override authService: AuthService, private userService: UserService,private routerService:RouterService) {
    super(authService)
   }

  ngOnInit(): void {
    if (this.loggedIn())
      this.getCurrentUserDTO()
  }

  getCurrentUserDTO() {
    this.userService.getCurrentUserDTO().subscribe(response => {
      this.currenUserDTO = response.data
      console.log(response.data)
    })
  }
  routeToProfilePage() {
    this.routerService.profilePage()
  }
  logout(){
    this.authService.logout()
  }
}
