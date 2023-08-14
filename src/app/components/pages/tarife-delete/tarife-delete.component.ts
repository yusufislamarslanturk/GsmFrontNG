import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Tarife } from 'src/app/models/entities/tarife';
import { TarifeService } from 'src/app/services/tarife.service';

@Component({
  selector: 'app-tarife-delete',
  templateUrl: './tarife-delete.component.html',
  styleUrls: ['./tarife-delete.component.css']
})
export class TarifeDeleteComponent implements OnInit{
  @Input() currentTarifeFromParent:Tarife;
  @Input() innerHTML: string;
  @Input() classFromParent: string;
  addFormGroup:FormGroup
  constructor(private toastrService:ToastrService,private tarifeService:TarifeService){
    this.innerHTML="Sil"
  }
  ngOnInit(): void {

  }
  sil(){
      this.tarifeService.delete(this.currentTarifeFromParent);
      this.toastrService.error("Tarife Silindi.")
  }
}
