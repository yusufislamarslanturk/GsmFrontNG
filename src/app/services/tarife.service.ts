import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TemplatesService } from './templates.service';
import{Observable,timer} from 'rxjs'
import { ListResponseModel } from '../models/result/list-response-model';
import { Tarife } from '../models/entities/tarife';
import { ApiUrl, BaseUrl } from '../models/constants/urls';
import { ResponseModel } from '../models/result/response_model';

@Injectable({
  providedIn: 'root'
})
export class TarifeService {
  url=ApiUrl+"tarife/"
  constructor(private httpClient:HttpClient,private toastrService:ToastrService,private templatesService:TemplatesService) { }
  getAll():Observable<ListResponseModel<Tarife>>{
    return this.httpClient.get<ListResponseModel<Tarife>>(this.url+"getall")
  }
  getById(id:number):Observable<ListResponseModel<Tarife>>{
    return this.httpClient.get<ListResponseModel<Tarife>>(this.url+"getallbyid?id="+id)
  }
  add(tarife : Tarife){
    return this.httpClient.post<ResponseModel>(this.url+"add",tarife).subscribe(response=>{
      timer(2000).subscribe(x => {window.location.reload()})
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }
  delete(tarife:Tarife){
    return this.httpClient.post<ResponseModel>(this.url+"delete",tarife).subscribe(response=>{
      timer(2000).subscribe(x => {window.location.reload()})
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }
  update(tarife:Tarife){
    return this.httpClient.post<ResponseModel>(this.url+"update",tarife).subscribe(response=>{
      timer(2000).subscribe(x => {window.location.reload()})
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }
}
