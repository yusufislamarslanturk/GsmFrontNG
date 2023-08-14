import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NaviComponent } from './components/layouts/navi/navi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShowPasswordOnHoverDirective } from './directives/show-password-on-hover.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaturaEkleComponent } from './components/pages/fatura-ekle/fatura-ekle.component';
import { FaturaOdemeComponent } from './components/pages/fatura-odeme/fatura-odeme.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MusterilerFilterPipe } from './pipes/musteriler-filter.pipe';
import { FaturaOdemeRouterComponent } from './components/pages/fatura-odeme-router/fatura-odeme-router.component';
import { FaturalarFilterPipe } from './pipes/faturalar-filter.pipe';
import { YeniTarifeEklemeComponent } from './components/pages/yeni-tarife-ekleme/yeni-tarife-ekleme.component';
import { TarifeDetailComponent } from './components/pages/tarife-detail/tarife-detail.component';
import { TarifeUpdateComponent } from './components/pages/tarife-update/tarife-update.component';
import { TarifeDeleteComponent } from './components/pages/tarife-delete/tarife-delete.component';
import { TarifelerFilterPipe } from './pipes/tarifeler-filter.pipe';
import { MusteriDetailComponent } from './components/pages/musteri-detail/musteri-detail.component';
import { MusteriEkleComponent } from './components/pages/musteri-ekle/musteri-ekle.component';
import { MusteriGuncelleComponent } from './components/pages/musteri-guncelle/musteri-guncelle.component';
import { MusteriDeleteComponent } from './components/pages/musteri-delete/musteri-delete.component';
import { TahsilatDetailComponent } from './components/pages/tahsilat-detail/tahsilat-detail.component';
import { AnasayfaComponent } from './components/pages/anasayfa/anasayfa.component';

import { LoginComponent } from './components/pages/login/login.component';
import { RouteToLoginPageButtonComponent } from './components/pages/router-buttons/route-to-login-page-button/route-to-login-page-button.component';
import { RouteToRegisterPageButtonComponent } from './components/pages/router-buttons/route-to-register-page-button/route-to-register-page-button.component';
import { AccountOptionsComponent } from './components/layouts/account-options/account-options.component';
import { AdministrationDropdownComponent } from './components/pages/administration-dropdown/administration-dropdown.component';
import { UpdatePasswordComponent } from './components/layouts/updates/update-password/update-password.component';
import { UpdateEmailComponent } from './components/layouts/updates/update-email/update-email.component';
import { UpdateFirstAndLastNameComponent } from './components/layouts/updates/update-first-and-last-name/update-first-and-last-name.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { FaturaKesComponent } from './components/pages/fatura-kes/fatura-kes.component';

@NgModule({
  declarations: [
    NaviComponent,
    AppComponent,
    FaturaEkleComponent,
    FaturaOdemeComponent,
    MusterilerFilterPipe,
    FaturaOdemeRouterComponent,
    FaturalarFilterPipe,
    YeniTarifeEklemeComponent,
    TarifeDetailComponent,
    TarifeUpdateComponent,
    TarifeDeleteComponent,
    TarifelerFilterPipe,
    MusteriDetailComponent,
    MusteriEkleComponent,
    MusteriGuncelleComponent,
    MusteriDeleteComponent,
    TahsilatDetailComponent,
    AnasayfaComponent,
    AdministrationDropdownComponent,
    LoginComponent,
    ShowPasswordOnHoverDirective,
    RouteToLoginPageButtonComponent,
    RouteToRegisterPageButtonComponent,
    AccountOptionsComponent,
    UpdatePasswordComponent,
    UpdateEmailComponent,
    UpdateFirstAndLastNameComponent,
    ProfileComponent,
    RegisterComponent,
    FaturaKesComponent
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
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
