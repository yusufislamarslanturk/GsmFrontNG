import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Musteri } from 'src/app/models/entities/musteri';
import { MusteriService } from 'src/app/services/musteri.service';
import { AdminChildComponentBaseComponent } from 'src/app/components/admin/bases/admin-child-component-base/admin-child-component-base.component';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-musteri-detail',
  templateUrl: './musteri-detail.component.html',
  styleUrls: ['./musteri-detail.component.css']
})
export class MusteriDetailComponent  extends AdminChildComponentBaseComponent implements OnInit{
  @Input()
  currentMusteriFromParent: Musteri;

  musteriler:Musteri[]
  filterText:string
  constructor(private musteriService:MusteriService,private toastrService:ToastrService,public override authService:AuthService){
super(authService)
  }
  ngOnInit(): void {
    this.getMusteriAll()
  }


  getMusteriAll(){
    return this.musteriService.getAll().subscribe(response=>{
      this.musteriler=response.data
    })
  }
  getByIdFromInMemory(id: number): Musteri {
    return this.musteriler.filter((c) => c.musteriId === id)[0];
  }

}
