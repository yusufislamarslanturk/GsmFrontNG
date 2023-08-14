import { Injectable } from '@angular/core';
import { TemplatesService } from './templates.service';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/urls';
import { ListResponseModel } from './../models/result/list-response-model';
import { HttpClient } from '@angular/common/http';
import { SingleResponseModel } from '../models/result/single-response-model';
import { ResponseModel } from '../models/result/response_model';
import { ToastrService } from 'ngx-toastr';
import { Fatura } from '../models/entities/fatura';

@Injectable({
  providedIn: 'root'
})
export class FaturaService {
  url = ApiUrl + "fatura/"
  constructor(private httpClient: HttpClient, private toastrService: ToastrService, private templatesService: TemplatesService) { }

  add(fatura:Fatura) {
    this.httpClient.post<ResponseModel>(this.url + "add", fatura).subscribe(response => {
      this.toastrService.success(response.message)
      window.location.reload()
    }, errorResponse => this.templatesService.errorResponse(errorResponse));
  }
  update(fatura:Fatura){
    this.httpClient.post<ResponseModel>(this.url +"update",fatura).subscribe(response=>{
      this.toastrService.success(response.message)
      window.location.reload()
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }
  delete(fatura:Fatura){
    this.httpClient.post<ResponseModel>(this.url +"delete",fatura).subscribe(response=>{
      this.toastrService.success(response.message)
      window.location.reload()
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }
  getAll(): Observable<ListResponseModel<Fatura>> {
    return this.httpClient.get<ListResponseModel<Fatura>>(this.url + "getAll")
  }
  getById(id:number): Observable<SingleResponseModel<Fatura>> {
    return this.httpClient.get<SingleResponseModel<Fatura>>(this.url + "getallById?id="+id)
  }

}
