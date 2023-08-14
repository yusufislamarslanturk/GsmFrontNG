import { Injectable } from '@angular/core';
import { ApiUrl } from '../models/constants/urls';
import { Observable,timer } from 'rxjs';
import { ListResponseModel } from '../models/result/list-response-model';
import { ResponseModel } from '../models/result/response_model';
import { Musteri } from '../models/entities/musteri';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root',
})
export class MusteriService {
  url = ApiUrl + 'musteri/';
  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private templatesService: TemplatesService
  ) {}

  add(musteri: Musteri) {
    this.httpClient.post<ResponseModel>(this.url + 'add', musteri).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        timer(2000).subscribe(x => {window.location.reload()})
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }
  delete(musteri: Musteri) {
    this.httpClient.post<ResponseModel>(this.url + 'delete', musteri).subscribe(
      (response) => {
       
        timer(2000).subscribe(x => {window.location.reload()})
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }
  update(musteri: Musteri) {
    this.httpClient.post<ResponseModel>(this.url + 'update', musteri).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        timer(2000).subscribe(x => {window.location.reload()})
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  getAll(): Observable<ListResponseModel<Musteri>> {
    return this.httpClient.get<ListResponseModel<Musteri>>(this.url + 'getall');
  }
  getById(id:number): Observable<ListResponseModel<Musteri>> {
    return this.httpClient.get<ListResponseModel<Musteri>>(this.url + 'getallbyid?id='+id);
  }
}
