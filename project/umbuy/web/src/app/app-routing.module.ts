import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAdsComponent } from './view-ads/view-ads.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewAdInformationComponent } from './view-ad-information/view-ad-information.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateAdComponent } from './create-ad/create-ad.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'viewAdvertisements', component: ViewAdsComponent},
  {path: 'createAd', component: CreateAdComponent},
  {path: 'viewAdvertisement/:id', component: ViewAdInformationComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ViewAdsComponent, ViewAdInformationComponent, PageNotFoundComponent]
