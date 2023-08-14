import { Injectable } from '@angular/core';
import { TemplatesService } from './templates.service';
import { Observable, timer } from 'rxjs';
import { ApiUrl } from '../models/constants/urls';
import { ListResponseModel } from './../models/result/list-response-model';
import { HttpClient } from '@angular/common/http';
import { SingleResponseModel } from '../models/result/single-response-model';
import { ResponseModel } from '../models/result/response_model';
import { ToastrService } from 'ngx-toastr';
import { MusteriTarife } from '../models/entities/musteriTarife';



@Injectable({
  providedIn: 'root'
})
export class MusteriTarifeService {

  url = ApiUrl + "musteritarife/"
  constructor(private httpClient: HttpClient, private toastrService: ToastrService, private templatesService: TemplatesService) { }

  delete(MusteriTarife:MusteriTarife){
    this.httpClient.post<ResponseModel>(this.url +"delete",MusteriTarife).subscribe(response=>{
      this.toastrService.success(response.message)
      window.location.reload()
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }
   add(MusteriTarife:MusteriTarife){
    this.httpClient.post<ResponseModel>(this.url +"add",MusteriTarife).subscribe(response=>{
      this.toastrService.success(response.message)
      timer(2000).subscribe(x => {window.location.reload()})
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }
  update(MusteriTarife:MusteriTarife){
    this.httpClient.post<ResponseModel>(this.url +"update",MusteriTarife).subscribe(response=>{
      this.toastrService.success(response.message)
      window.location.reload()
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }
  getAll(): Observable<ListResponseModel<MusteriTarife>> {
    return this.httpClient.get<ListResponseModel<MusteriTarife>>(this.url + "getAll")
  }
  getById(id:number): Observable<ListResponseModel<MusteriTarife>> {
    return this.httpClient.get<ListResponseModel<MusteriTarife>>(this.url + "getallbyid?id="+id)
  }
}
