import { UserProfileComponent } from '../business/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ViewAdsComponent } from '../business/view-ads.component';
import { PageNotFoundComponent } from '../business/page-not-found.component';
import { ViewAdInformationComponent } from '../business/view-ad-information.component';
import { AppComponent } from '../business/app.component';
import { HomeComponent } from '../business/home.component';
import { CreateAdComponent } from '../business/create-ad.component';
import { SearchComponent } from '../business/search.component';

import { VerifyEmailComponent } from '../business/verify-email.component';
import { EditComponent } from '../business/edit.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'view/ads', component: ViewAdsComponent},
  {path: 'view/ads/:id', component: ViewAdInformationComponent},
  {path: 'view/ads/user/:id', component: ViewAdsComponent},
  {path: 'callback', component: HomeComponent },
  {path: 'createAd', component: CreateAdComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'verifyEmail', component: VerifyEmailComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CreateAdComponent, AppComponent, ViewAdsComponent, ViewAdInformationComponent, PageNotFoundComponent, SearchComponent, UserProfileComponent, EditComponent];
export const routing = RouterModule.forRoot(routes);