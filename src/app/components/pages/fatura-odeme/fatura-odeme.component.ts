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
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fatura-odeme',
  templateUrl: './fatura-odeme.component.html',
  styleUrls: ['./fatura-odeme.component.css'],
})
export class FaturaOdemeComponent
  extends AdminChildComponentBaseComponent
  implements OnInit
{
  @Input() 
  currentCarFromParent: Musteri;
  currentFaturaFromParent:Tahsilat;
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
    private tahsilatService:TahsilatService,
    private routerModule:RouterModule
  ) {
    super(authService);
  }

  ngOnInit(): void {
    
    this.getFatura();
    this.getMusteri();
    
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
  getByIdFromInMemory(id: number): Fatura {
    return this.faturalar.filter(c => c.faturaId === id)[0]
  }

}
