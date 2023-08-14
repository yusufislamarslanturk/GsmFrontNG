import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaturaEkleComponent } from './components/pages/fatura-ekle/fatura-ekle.component';
import { FaturaOdemeComponent } from './components/pages/fatura-odeme/fatura-odeme.component';

const routes: Routes = [
  { path: "fatura-ata", component: FaturaEkleComponent },
  { path: "fatura-ode", component: FaturaOdemeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
