import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Fatura } from 'src/app/models/entities/fatura';
import { Tahsilat } from 'src/app/models/entities/tahsilat';
import { Tarife } from 'src/app/models/entities/tarife';
import { FaturaService } from 'src/app/services/fatura.service';
import { TahsilatService } from 'src/app/services/tahsilat.service';
import { TarifeService } from 'src/app/services/tarife.service';
import { Observable, timer } from 'rxjs';
import { AdminChildComponentBaseComponent } from '../../admin/bases/admin-child-component-base/admin-child-component-base.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-fatura-odeme-router',
  templateUrl: './fatura-odeme-router.component.html',
  styleUrls: ['./fatura-odeme-router.component.css'],
})
export class FaturaOdemeRouterComponent extends AdminChildComponentBaseComponent implements OnInit {
  @Input() currentFaturaFromParent: Fatura;
  updateFormGroup: FormGroup;
  tahsilatlar: Tahsilat;
  faturalar: Fatura[];
  tarifeler: Tarife[];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private faturaService: FaturaService,
    private tarifeService: TarifeService,
    private tahsilatService: TahsilatService,
    public override authService:AuthService
  ) {
    super(authService)
    this.innerHTML = 'ÖDEME BEKLİYOR';
  }
  ngOnInit(): void {
    this.getFatura();
    this.getTarife();
    this.createUpdateFormGroup();
  }
  createUpdateFormGroup() {
    this.updateFormGroup = this.formBuilder.group({
      tarifeId: [this.currentFaturaFromParent.tarifeId, Validators.required],
      faturaId: [this.currentFaturaFromParent.faturaId, Validators.required],
      tahsilTarihi: ['', Validators.required],
      tarifeUcreti: [
        this.currentFaturaFromParent.donemUcreti,
        Validators.required,
      ],
      TC: [this.currentFaturaFromParent.tc, Validators.required],
    });
  }
  getFatura() {
    this.faturaService.getAll().subscribe((response) => {
      this.faturalar = response.data;
    });
  }
  getTarife() {
    this.tarifeService.getAll().subscribe((response) => {
      this.tarifeler = response.data;
    });
  }
  update() {
    if (this.updateFormGroup.valid) {
      let tahsilat: Tahsilat = Object.assign(this.updateFormGroup.value);

      this.tahsilatService.add(tahsilat);
    } else this.toastrService.error('Form Bilgileri Eksik');
  }
  update2() {
    if (this.updateFormGroup.valid) {
      let fatura: Fatura = Object.assign({
        faturaId: this.currentFaturaFromParent.faturaId,
        odendiMi: (this.currentFaturaFromParent.odendiMi = true),
        donemAdi: this.currentFaturaFromParent.donemAdi,
        tarifeId: this.currentFaturaFromParent.tarifeId,
        musteriTarifeId: this.currentFaturaFromParent.musteriTarifeId,
        tc: this.currentFaturaFromParent.tc,
        donemUcreti: this.currentFaturaFromParent.donemUcreti,
      });
      this.faturaService.update(fatura);
    } else this.toastrService.error('Form Bilgileri Eksik');
  }
}
