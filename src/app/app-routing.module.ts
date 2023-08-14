import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaturaEkleComponent } from './components/pages/fatura-ekle/fatura-ekle.component';
import { FaturaOdemeComponent } from './components/pages/fatura-odeme/fatura-odeme.component';
import { YeniTarifeEklemeComponent } from './components/pages/yeni-tarife-ekleme/yeni-tarife-ekleme.component';
import { TarifeDetailComponent } from './components/pages/tarife-detail/tarife-detail.component';
import { MusteriDetailComponent } from './components/pages/musteri-detail/musteri-detail.component';
import { AnasayfaComponent } from './components/pages/anasayfa/anasayfa.component';
import { LoginPath, ProfilePath, RegisterPath } from './models/constants/paths';
import { LoginComponent } from './components/pages/login/login.component';
import { AccountOptionsComponent } from './components/layouts/account-options/account-options.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { TahsilatDetailComponent } from './components/pages/tahsilat-detail/tahsilat-detail.component';
import { FaturaKesComponent } from './components/pages/fatura-kes/fatura-kes.component';

const routes: Routes = [
  { path: 'tarife-ata', component: FaturaEkleComponent },
  { path: 'fatura-ode', component: FaturaOdemeComponent },
  { path: 'tarife-detail', component: TarifeDetailComponent },
  { path: 'musteri-detail', component: MusteriDetailComponent },
  { path: ProfilePath, component: ProfileComponent },
  { path: '', component: AnasayfaComponent },
  {path:RegisterPath,component:RegisterComponent},
  { path: LoginPath, component: LoginComponent },
  {path:"tahsilat-detail",component:TahsilatDetailComponent},
  {path:"fatura-kes",component:FaturaKesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
