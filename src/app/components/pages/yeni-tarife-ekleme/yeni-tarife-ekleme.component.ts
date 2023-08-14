import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { Tahsilat } from 'src/app/models/entities/tahsilat';
import { Tarife } from 'src/app/models/entities/tarife';
import { TarifeService } from 'src/app/services/tarife.service';
import { TemplatesService } from 'src/app/services/templates.service';

@Component({
  selector: 'app-yeni-tarife-ekleme',
  templateUrl: './yeni-tarife-ekleme.component.html',
  styleUrls: ['./yeni-tarife-ekleme.component.css'],
})
export class YeniTarifeEklemeComponent implements OnInit {
  addFormGroup:FormGroup
  @Input() currentTahsilatFromParent: Tarife;
  @Input() classFromParent: string;
  @Input() innerHTML: string;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private tarifeService: TarifeService,
    private templatesService: TemplatesService
  ) {
    this.innerHTML="Yeni Tarife Ekle"
  }
  ngOnInit(): void {
    this.createAddFormGroup()
  }

  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      tarifeAdi:["",Validators.required],
      tarifeUcreti:["",Validators.required],
      tarifeInternet: ["", Validators.required],
      tarifeSms: ["",Validators.required],
      tarifeDk: ["",Validators.required],
      tarifeSuresi:["",Validators.required]
    })
  }

  // createUpdateFormGroup() {
  //   this.updateFormGroup = this.formBuilder.group({
  //     tarifeId: [this.currentFaturaFromParent.tarifeId, Validators.required],
  //     faturaId: [this.currentFaturaFromParent.faturaId, Validators.required],
  //     tahsilTarihi: ['', Validators.required],
  //     tarifeUcreti: [
  //       this.currentFaturaFromParent.donemUcreti,
  //       Validators.required,
  //     ],
  //     TC: [this.currentFaturaFromParent.tc, Validators.required],
  //   });
  // }

  add(){
    if (this.addFormGroup.valid) {
      let tarife: Tarife = Object.assign({}, this.addFormGroup.value);
      this.tarifeService.add(tarife);
      this.toastrService.success("Tarife ekleme işlemi gerçekleşti.") 
    } else this.toastrService.error(FormIsMissing);
  }
}
