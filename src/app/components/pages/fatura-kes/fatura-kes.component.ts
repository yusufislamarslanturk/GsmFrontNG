import { Component, Input, OnInit } from '@angular/core';
import { AdminChildComponentBaseComponent } from '../../admin/bases/admin-child-component-base/admin-child-component-base.component';
import { AuthService } from 'src/app/services/auth.service';
import { FaturaService } from 'src/app/services/fatura.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MusteriService } from 'src/app/services/musteri.service';
import { TarifeService } from 'src/app/services/tarife.service';
import { Tarife } from 'src/app/models/entities/tarife';
import { Fatura } from 'src/app/models/entities/fatura';
import { Musteri } from 'src/app/models/entities/musteri';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { ToastrService } from 'ngx-toastr';
import { MusteriTarifeService } from 'src/app/services/musteri-tarife.service';
import { MusteriTarife } from 'src/app/models/entities/musteriTarife';
import { MusteriTarifeDto } from 'src/app/models/entities/dtos/musteri-tarife-dto';

@Component({
  selector: 'app-fatura-kes',
  templateUrl: './fatura-kes.component.html',
  styleUrls: ['./fatura-kes.component.css'],
})
export class FaturaKesComponent
  extends AdminChildComponentBaseComponent
  implements OnInit
{
  @Input()
  currentCarFromParent: Fatura;
  faturalar: Fatura[];
  musteriler: Musteri[];
  tarifeler: Tarife[];
  MusteriTarifeDto:MusteriTarifeDto[]
  musteriTarifeler:MusteriTarife[]
  addFormGroup: FormGroup;
  filterText: string;

  constructor(
    public override authService: AuthService,
    private faturaService: FaturaService,
    private formBuilder: FormBuilder,
    private musteriService: MusteriService,
    private tarifeService: TarifeService,
    private toastrService: ToastrService,
    private musteriTarifeService:MusteriTarifeService
  ) {
    super(authService);
  }

  ngOnInit(): void {
    this.getFatura();
    this.getTarife();
    this.getMusteriAll();
    this.getMusteriTarifeAll();
    this.createAddFormGroup();

  }
  getFatura() {
    this.faturaService.getAll().subscribe((response) => {
      this.faturalar = response.data;

    });
  }
  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      tc: ['', Validators.required],
      donemAdi:['',Validators.required]
    });
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

  getMusteriTarifeAll() {
    this.musteriTarifeService.getDetails().subscribe((response) => {
      this.MusteriTarifeDto = response.data;
    });
  }
  add() {
    if (this.addFormGroup.valid) {
      let fatura1:Fatura = this.getByIdFromInMemory(this.addFormGroup.value.tc)
      let tarife:Tarife=this.getByIdFromInMemory2(fatura1.tarifeId)
      let fatura: Fatura = Object.assign({
        faturaId:this.addFormGroup.value.faturaId,
        tc:this.addFormGroup.value.tc,
        odendiMi:false,
        donemAdi:this.addFormGroup.value.donemAdi,
        tarifeId:tarife.tarifeId,
        musteriTarifeId:fatura1.musteriTarifeId,
        donemUcreti:fatura1.donemUcreti,
      });
      this.faturaService.add(fatura);
    } else this.toastrService;
  }
  getByIdFromInMemory(id: string): Fatura {
    return this.faturalar.filter(c => c.tc === id)[0]
  }
  getByIdFromInMemory2(id: number): Tarife {
    return this.tarifeler.filter(c => c.tarifeId === id)[0]
  }
}
