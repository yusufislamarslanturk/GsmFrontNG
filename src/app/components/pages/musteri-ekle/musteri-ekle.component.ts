import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Musteri } from 'src/app/models/entities/musteri';
import { MusteriService } from 'src/app/services/musteri.service';

@Component({
  selector: 'app-musteri-ekle',
  templateUrl: './musteri-ekle.component.html',
  styleUrls: ['./musteri-ekle.component.css']
})
export class MusteriEkleComponent implements OnInit {
  addFormGroup:FormGroup
  @Input() currentMusteriFromParent: Musteri;
  @Input() classFromParent: string;
  @Input() innerHTML: string;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private musteriService:MusteriService){
    this.innerHTML="Yeni Müşteri Ekle"
  }
  ngOnInit(): void {
    this.createAddFormGroup()
  }
  createAddFormGroup(){
    this.addFormGroup=this.formBuilder.group({
      ad:["",Validators.required],
      soyad: ["", Validators.required],
      tc: ["",Validators.required],
      gsMno: ["",Validators.required],
      email:["",Validators.required]
    })

    }
    add(){
      if(this.addFormGroup.valid){
        this.musteriService.add(this.addFormGroup.value)
        this.toastrService.success("Müşteri Başarıyla Eklendi")
      }
      else{
        this.toastrService.error("Form bilgilerini tekrar gözden geçirin")
      }
    }
  }


