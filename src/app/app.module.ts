import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NaviComponent } from './components/layouts/navi/navi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaturaDetailComponent } from './components/pages/fatura-detail/fatura-detail.component';
import { FaturaEkleComponent } from './components/pages/fatura-ekle/fatura-ekle.component';
import { FaturaOdemeComponent } from './components/pages/fatura-odeme/fatura-odeme.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MusterilerFilterPipe } from './pipes/musteriler-filter.pipe';

@NgModule({
  declarations: [
    NaviComponent,
    AppComponent,
    FaturaDetailComponent,
    FaturaEkleComponent,
    FaturaOdemeComponent,
    MusterilerFilterPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
