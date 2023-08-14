import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { Fatura } from 'src/app/models/entities/fatura';
import { Musteri } from 'src/app/models/entities/musteri';
import { MusteriTarife } from 'src/app/models/entities/musteriTarife';
import { Tarife } from 'src/app/models/entities/tarife';
import { FaturaService } from 'src/app/services/fatura.service';
import { MusteriTarifeService } from 'src/app/services/musteri-tarife.service';
import { MusteriService } from 'src/app/services/musteri.service';
import { TarifeService } from 'src/app/services/tarife.service';
import { TemplatesService } from 'src/app/services/templates.service';

@Component({
  selector: 'app-fatura-ekle',
  templateUrl: './fatura-ekle.component.html',
  styleUrls: ['./fatura-ekle.component.css'],
})
export class FaturaEkleComponent implements OnInit {
  @Input()
  currentCarFromParent: Fatura;
  faturalar: Fatura[];
  musteriler: Musteri[];
  tarifeler:Tarife[];
  addFormGroup: FormGroup;
  filterText:string

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private tarifeService: TarifeService,
    private musteriService: MusteriService,
    private faturaService: FaturaService,
    private templatesService:TemplatesService,
    private musteriTarifeService:MusteriTarifeService
  ) {}

  ngOnInit(): void {
  
    this.getTarife();
    this.getMusteriAll();
    this.getTarifeAll();
    this.createAddFormGroup();
    
  }
 
  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      musteriId:["",Validators.required],
      tarifeId:["",Validators.required],
      baslangic: ["", Validators.required],
      bitis: ["",Validators.required],
    })
  }
  add() {
    if (this.addFormGroup.valid) {
      let musteriTarife: MusteriTarife = Object.assign({}, this.addFormGroup.value);
      this.musteriTarifeService.add(musteriTarife);
      this.toastrService.success("Tarife tanımlama işlemi gerçekleşti.") 
    } else this.toastrService.error(FormIsMissing);
  }
  getTarife() {
    this.faturaService.getAll().subscribe((response) => {
      this.faturalar = response.data;
    });
  }
  getMusteriAll() {
    this.musteriService.getAll().subscribe((response) => {
      this.musteriler = response.data;
    });
  }
  getTarifeAll() {
    this.tarifeService.getAll().subscribe((response) => {
      this.tarifeler = response.data;
    });
  }
  getByIdFromInMemory(id: number): Musteri {
    return this.musteriler.filter((c) => c.musteriId === id)[0];
  }
  faturaAtama() {
    if (this.addFormGroup.valid) {
      this.addFormGroup = this.formBuilder.group({
        brandId: ["", Validators.required],
        colorId: ["", Validators.required],
        name: ["", Validators.required],
        modelYear: ["", Validators.required],
        dailyPrice: ["", Validators.required],
        findeksPoint: ["", Validators.required],
        description: ["", Validators.required],
      })
    }else {
      this.toastrService.error(FormIsMissing)
    }
  }
  getById(id:number):Musteri{
    return this.musteriler.filter(c => c.musteriId === id)[0]
  }
}
