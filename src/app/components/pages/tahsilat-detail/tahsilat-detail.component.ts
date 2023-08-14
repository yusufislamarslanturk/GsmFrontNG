import { Component, OnInit } from '@angular/core';
import { Tahsilat } from 'src/app/models/entities/tahsilat';
import { TahsilatService } from 'src/app/services/tahsilat.service';
import { AdminChildComponentBaseComponent } from '../../admin/bases/admin-child-component-base/admin-child-component-base.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tahsilat-detail',
  templateUrl: './tahsilat-detail.component.html',
  styleUrls: ['./tahsilat-detail.component.css']
})
export class TahsilatDetailComponent extends AdminChildComponentBaseComponent implements OnInit {
  tahsilatlar:Tahsilat[]
  constructor(private tahsilatService:TahsilatService,public override authService:AuthService){
    super(authService)
  }
  ngOnInit(): void {
    this.getTahsilatAll()
  }
  

  getTahsilatAll(){
    return this.tahsilatService.getAll().subscribe(response=>{
      this.tahsilatlar=response.data
    })
  }

}
