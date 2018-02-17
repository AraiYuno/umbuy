import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ViewAdsComponent } from './view-ads/view-ads.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewAdInformationComponent } from './view-ad-information/view-ad-information.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'view/ads', component: ViewAdsComponent},
  {path: 'view/ads/:id', component: ViewAdInformationComponent},
  {path: 'callback', component:HomeComponent },
  {path: 'createAd', component: CreateAdComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CreateAdComponent, AppComponent, ViewAdsComponent, ViewAdInformationComponent, PageNotFoundComponent, SearchComponent]
export const routing = RouterModule.forRoot(routes);