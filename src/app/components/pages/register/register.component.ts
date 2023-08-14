import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterDTO } from 'src/app/models/entities/dtos/register-dto';
import { FormIsMissing } from 'src/app/models/constants/messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup:FormGroup
  constructor(private authService:AuthService, private formBuilder:FormBuilder, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createRegisterFormGroup()
  }

  createRegisterFormGroup(){
    this.registerFormGroup=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }

  register(){
    if(this.registerFormGroup.valid){
      let registerDTO:RegisterDTO=Object.assign({},this.registerFormGroup.value)
      this.authService.register(registerDTO)
    }
    else this.toastrService.error(FormIsMissing)
  }
}
