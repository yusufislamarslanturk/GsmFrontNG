import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Musteri } from 'src/app/models/entities/musteri';
import { Tarife } from 'src/app/models/entities/tarife';
import { MusteriService } from 'src/app/services/musteri.service';

@Component({
  selector: 'app-musteri-delete',
  templateUrl: './musteri-delete.component.html',
  styleUrls: ['./musteri-delete.component.css']
})
export class MusteriDeleteComponent implements OnInit{
  @Input() currentMusteriFromParent: Musteri;
  @Input() classFromParent: string;
  @Input() innerHTML: string;
  addFormGroup:FormGroup

constructor(private formBuilder:FormBuilder,private musteriService:MusteriService,private toastrService:ToastrService){
this.innerHTML="Sil" 
}
ngOnInit(): void {}
sil(){
  this.musteriService.delete(this.currentMusteriFromParent);
  this.toastrService.error("Müşteri Silindi.")
}
}
