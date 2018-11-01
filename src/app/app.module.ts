import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CarListComponent} from './components/car-list/car-list.component';
import {CarService} from './services/car.service';
import {FormsModule} from '@angular/forms';
import {CarInputComponent} from './components/car-input/car-input.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {CarDetailsComponent} from './components/car-details/car-details.component';
import {MdButtonModule, MdIconModule, MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TyreInputComponent } from './components/tyre-input/tyre-input.component';
import {TyreService} from './services/tyre.service';
import { TyreInfoComponent } from './components/tyre-info/tyre-info.component';
import { DetailsSelectorComponent } from './components/details-selector/details-selector.component';
import { EngineInputComponent } from './components/engine-input/engine-input.component';
import {EngineService} from './services/engine.service';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { PardavimaiComponent } from './components/pardavimai/pardavimai.component';
import { DarbaiComponent } from './components/darbai/darbai.component';
import { RemontasComponent } from './components/remontas/remontas.component';
import { NaudotojaiComponent } from './components/naudotojai/naudotojai.component';
import { TiekejaiComponent } from './components/tiekejai/tiekejai.component';
import { PrekiuSarasasComponent } from './components/prekiu-sarasas/prekiu-sarasas.component';
import { UzsakymaiComponent } from './components/uzsakymai/uzsakymai.component';
import { ApmokejimasComponent } from './components/apmokejimas/apmokejimas.component';
import { PridetiDarbaComponent } from './components/prideti-darba/prideti-darba.component';
import { PasalintiDarbaComponent } from './components/pasalinti-darba/pasalinti-darba.component';
import { RedaguotiDarbaComponent } from './components/redaguoti-darba/redaguoti-darba.component';
import { VykdomasDarbasComponent } from './components/vykdomas-darbas/vykdomas-darbas.component';
import { RedaguotiIvertiComponent } from './components/redaguoti-iverti/redaguoti-iverti.component';
import { PridetiUzrasaComponent } from './components/prideti-uzrasa/prideti-uzrasa.component';
import { IrankioRezervacijaComponent } from './components/irankio-rezervacija/irankio-rezervacija.component';
import { PridetiRemontoVeiksmaComponent } from './components/prideti-remonto-veiksma/prideti-remonto-veiksma.component';
import { PridetiDetalesUzsakymaComponent } from './components/prideti-detales-uzsakyma/prideti-detales-uzsakyma.component';
import { InstrukcijosComponent } from './components/instrukcijos/instrukcijos.component';
import { RemontoRezervacijaComponent } from './components/remonto-rezervacija/remonto-rezervacija.component';
import { PasikeistiSlaptazodiComponent } from './components/pasikeisti-slaptazodi/pasikeisti-slaptazodi.component';
import { NaudotojuSarasasComponent } from './components/naudotoju-sarasas/naudotoju-sarasas.component';
import { SusisiektiComponent } from './components/susisiekti/susisiekti.component';
import { VaztarasciaiComponent } from './components/vaztarasciai/vaztarasciai.component';
import { ReikiamosDetalesComponent } from './components/reikiamos-detales/reikiamos-detales.component';
import { PridetiTiekejaComponent } from './components/prideti-tiekeja/prideti-tiekeja.component';
import { RedaguotiTiekejaComponent } from './components/redaguoti-tiekeja/redaguoti-tiekeja.component';
import { NeapmoketiPavedimaiComponent } from './components/neapmoketi-pavedimai/neapmoketi-pavedimai.component';

const appRoutes: Routes = [
  {path: 'cars', component: CarListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'pardavimai', component: PardavimaiComponent},
  {path: 'darbai', component: DarbaiComponent},
  {path: 'remontas', component: RemontasComponent},
  {path: 'naudotojai', component: NaudotojaiComponent},
  {path: 'tiekejai', component: TiekejaiComponent},
  {path: 'perziuretiSarasa', component: PrekiuSarasasComponent},
  {path: 'uzsakymuPerziura', component: UzsakymaiComponent},
  {path: 'apmokejimas', component: ApmokejimasComponent},
  {path: 'pridetiDarba', component: PridetiDarbaComponent},
  {path: 'pasalintiDarba', component: PasalintiDarbaComponent},
  {path: 'redaguotiDarba', component: RedaguotiDarbaComponent},
  {path: 'redaguotiDarboIverti', component: RedaguotiIvertiComponent},
  {path: 'vykdomasDarbas', component: VykdomasDarbasComponent},
  {path: 'pridetiUzrasa', component: PridetiUzrasaComponent},
  {path: 'irankioRezervarcija', component: IrankioRezervacijaComponent},
  {path: 'pridetiRemontoVeiksma', component: PridetiRemontoVeiksmaComponent},
  {path: 'pridetiDetalesUzsakyma', component: PridetiDetalesUzsakymaComponent},
  {path: 'instrukcijos', component: InstrukcijosComponent},
  {path: 'remontoRezervacija', component: RemontoRezervacijaComponent},
  {path: 'pasikeistiSlaptazodi', component: PasikeistiSlaptazodiComponent},
  {path: 'naudotojuSarasas', component: NaudotojuSarasasComponent},
  {path: 'susisiekti', component: SusisiektiComponent},
  {path: 'vaztarasciai', component: VaztarasciaiComponent},
  {path: 'reikiamosDetales', component: ReikiamosDetalesComponent},
  {path: 'pridetiTiekeja', component: PridetiTiekejaComponent},
  {path: 'redaguotiTiekeja', component: RedaguotiTiekejaComponent},
  {path: 'neapmoketiPavedimai', component: NeapmoketiPavedimaiComponent},
  {path: '', redirectTo: 'pardavimai', pathMatch: 'full'}, // default page
  {path: '**', component: PageNotFoundComponent} // 404 page
];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarInputComponent,
    PageNotFoundComponent,
    AboutComponent,
    CarDetailsComponent,
    TyreInputComponent,
    TyreInfoComponent,
    DetailsSelectorComponent,
    EngineInputComponent,
    CarInfoComponent,
    PardavimaiComponent,
    DarbaiComponent,
    RemontasComponent,
    NaudotojaiComponent,
    TiekejaiComponent,
    PrekiuSarasasComponent,
    UzsakymaiComponent,
    ApmokejimasComponent,
    PridetiDarbaComponent,
    PasalintiDarbaComponent,
    RedaguotiDarbaComponent,
    VykdomasDarbasComponent,
    RedaguotiIvertiComponent,
    PridetiUzrasaComponent,
    IrankioRezervacijaComponent,
    PridetiRemontoVeiksmaComponent,
    PridetiDetalesUzsakymaComponent,
    InstrukcijosComponent,
    RemontoRezervacijaComponent,
    PasikeistiSlaptazodiComponent,
    NaudotojuSarasasComponent,
    SusisiektiComponent,
    VaztarasciaiComponent,
    ReikiamosDetalesComponent,
    PridetiTiekejaComponent,
    RedaguotiTiekejaComponent,
    NeapmoketiPavedimaiComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule
  ],
  providers: [
    CarService,
    TyreService,
    EngineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
