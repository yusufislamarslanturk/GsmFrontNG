import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Musteri } from 'src/app/models/entities/musteri';
import { MusteriService } from 'src/app/services/musteri.service';

@Component({
  selector: 'app-musteri-guncelle',
  templateUrl: './musteri-guncelle.component.html',
  styleUrls: ['./musteri-guncelle.component.css']
})
export class MusteriGuncelleComponent implements OnInit{
  
  @Input() currentMusteriFromParent: Musteri;
  @Input() classFromParent: string;
  @Input() innerHTML: string;
  addFormGroup:FormGroup


  constructor(private formBuilder:FormBuilder,private musteriService:MusteriService,private toastrService:ToastrService){
    this.innerHTML="Güncelle"
  }
  
  ngOnInit(): void {
   this.createAddFormGroup() 
  }


  createAddFormGroup(){
    this.addFormGroup=this.formBuilder.group({
      musteriId:[this.currentMusteriFromParent.musteriId,Validators.required],
      ad:[this.currentMusteriFromParent.ad,Validators.required],
      soyad: [this.currentMusteriFromParent.soyad, Validators.required],
      tc: [this.currentMusteriFromParent.tc,Validators.required],
      gsMno: [this.currentMusteriFromParent.gsMno,Validators.required],
      email:[this.currentMusteriFromParent.email,Validators.required]
    })

}
update(){
  if(this.addFormGroup.valid){
    let musteri:Musteri=Object.assign(this.addFormGroup.value)
    this.musteriService.update(musteri)
    this.toastrService.success("Müşteri Güncellendi")
  }
  else{
    this.toastrService.error("Lütfen Form Bilgilerini Gözden Geçirin")
  }
}
}