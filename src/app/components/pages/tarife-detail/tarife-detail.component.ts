import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Tahsilat } from 'src/app/models/entities/tahsilat';
import { Tarife } from 'src/app/models/entities/tarife';
import { TarifeService } from 'src/app/services/tarife.service';
import { AdminChildComponentBaseComponent } from '../../admin/bases/admin-child-component-base/admin-child-component-base.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tarife-detail',
  templateUrl: './tarife-detail.component.html',
  styleUrls: ['./tarife-detail.component.css'],
})
export class TarifeDetailComponent extends AdminChildComponentBaseComponent implements OnInit {
  tarifeler: Tarife[];
  @Input()
  currentTarifeFromParent: Tarife;

  filterText: string;

  constructor(
    private tarifeService: TarifeService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    public override authService:AuthService,
  ) {
    super(authService)
  }
  ngOnInit(): void {
    this.getTarife();
  }

  getTarife() {
    this.tarifeService.getAll().subscribe((response) => {
      this.tarifeler = response.data;
    });
  }
  getByIdFromInMemory(id: number): Tarife {
    return this.tarifeler.filter((c) => c.tarifeId === id)[0];
  }
}
