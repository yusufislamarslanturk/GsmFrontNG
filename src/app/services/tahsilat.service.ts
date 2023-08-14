import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TemplatesService } from './templates.service';
import { Tahsilat } from '../models/entities/tahsilat';
import { ListResponseModel } from '../models/result/list-response-model';
import { BaseUrl } from '../models/constants/urls';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TahsilatService {
  url= BaseUrl+"tahsilat/"
  constructor(private httpClient:HttpClient,private toastrService:ToastrService,private templatesService:TemplatesService) { }
  add(tahsilat:Tahsilat){
    this.httpClient.post<ListResponseModel<Tahsilat>>(this.url+"add",tahsilat).subscribe(response=>{
      window.location.reload()
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }
  delete(tahsilat:Tahsilat){
    this.httpClient.post<ListResponseModel<Tahsilat>>(this.url+"delete",tahsilat).subscribe(response=>{
      window.location.reload()
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }
  update(tahsilat:Tahsilat){
    this.httpClient.post<ListResponseModel<Tahsilat>>(this.url+"update",tahsilat).subscribe(response=>{
      window.location.reload()
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }
  getAll():Observable<ListResponseModel<Tahsilat>>{
    return this.httpClient.get<ListResponseModel<Tahsilat>>(this.url+"getall")
    }
  getById(id:number):Observable<ListResponseModel<Tahsilat>>{
    return this.httpClient.get<ListResponseModel<Tahsilat>>(this.url+"getallbyid?id="+id)
  }
}
