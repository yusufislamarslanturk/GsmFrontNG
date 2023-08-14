import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Tarife } from 'src/app/models/entities/tarife';
import { TarifeService } from 'src/app/services/tarife.service';

@Component({
  selector: 'app-tarife-update',
  templateUrl: './tarife-update.component.html',
  styleUrls: ['./tarife-update.component.css'],
})
export class TarifeUpdateComponent implements OnInit {
  @Input() 
  currentTarifeFromParent:Tarife;
  @Input() innerHTML: string;
  @Input() classFromParent: string;
  addFormGroup:FormGroup
 
  constructor(private formBuilder:FormBuilder,private tarifeService:TarifeService,private toastrService:ToastrService) { this.innerHTML = 'Tarife Güncelle';}
  ngOnInit(): void {
  this.createAddFormGroup()
  }


  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      tarifeId:[this.currentTarifeFromParent.tarifeId],
      tarifeAdi:[this.currentTarifeFromParent.tarifeAdi,Validators.required],
      tarifeUcreti:[this.currentTarifeFromParent.tarifeUcreti,Validators.required],
      tarifeInternet: [this.currentTarifeFromParent.tarifeInternet, Validators.required],
      tarifeSms: [this.currentTarifeFromParent.tarifeSms,Validators.required],
      tarifeDk: [this.currentTarifeFromParent.tarifeDk,Validators.required],
      tarifeSuresi:[this.currentTarifeFromParent.tarifeSuresi,Validators.required]
    })
  }
  update(){
    if (this.addFormGroup.valid) {
       let tarife: Tarife = Object.assign(this.addFormGroup.value);
      this.tarifeService.update(tarife);
    } else this.toastrService.error('Form Bilgileri Eksik');
  }
}
