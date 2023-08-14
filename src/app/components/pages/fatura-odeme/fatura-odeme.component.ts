import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { Fatura } from 'src/app/models/entities/fatura';
import { Musteri } from 'src/app/models/entities/musteri';
import { FaturaService } from 'src/app/services/fatura.service';
import { AdminChildComponentBaseComponent } from '../../admin/bases/admin-child-component-base/admin-child-component-base.component';
import { setupTestingRouter } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { MusteriService } from 'src/app/services/musteri.service';
import { Tahsilat } from 'src/app/models/entities/tahsilat';
import { TahsilatService } from 'src/app/services/tahsilat.service';

@Component({
  selector: 'app-fatura-odeme',
  templateUrl: './fatura-odeme.component.html',
  styleUrls: ['./fatura-odeme.component.css'],
})
export class FaturaOdemeComponent
  extends AdminChildComponentBaseComponent
  implements OnInit
{
  @Input() currentCarFromParent: Musteri;
  currentCarFromId: number;
  faturalar: Fatura[];
  musteriler: Musteri[];
  updateFormGroup: FormGroup;
  filterText:string
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    public override authService: AuthService,
    private faturaService: FaturaService,
    private musteriService:MusteriService,
    private tahsilatService:TahsilatService
  ) {
    super(authService);
  }

  ngOnInit(): void {
    this.createUpdateFormGroup();
    this.getFatura();
    this.getMusteri();
    
  }

  createUpdateFormGroup() {
    this.updateFormGroup = this.formBuilder.group({
        // tc: [this.currentCarFromParent.tc, Validators.required],
        // ad: [this.currentCarFromParent.ad, Validators.required],
        // soyad: [this.currentCarFromParent.soyad, Validators.required],
        // gsMno: [this.currentCarFromParent.gsMno, Validators.required],
        // musteriId: [this.currentCarFromParent.musteriId ,Validators.required],
        // email: [this.currentCarFromParent.email, Validators.required],
       
    });
  }
  add() {
    if (this.updateFormGroup.valid) {
      let tahsilat: Tahsilat = Object.assign({}, this.updateFormGroup.value);
      this.tahsilatService.add(tahsilat);
      this.toastrService.success("fatura ödeme işlemi gerçekleşti.") 
    } else this.toastrService.error(FormIsMissing);
  }
  update() {
    if (this.updateFormGroup.valid) {
      let fatura: Fatura = Object.assign(
        { id: this.currentCarFromParent.musteriId },
        this.updateFormGroup.value
      );
      this.faturaService.update(fatura);
    } else this.toastrService.error("hata");
  }

  getFatura() {
    this.faturaService.getAll().subscribe((response) => {
      this.faturalar = response.data;
    });
  }

  getMusteri() {
    this.musteriService.getAll().subscribe((response) => {
      this.musteriler = response.data;
    });
  }

}
