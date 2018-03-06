import { UserProfileComponent } from '../business/components/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ViewAdsComponent } from '../business/components/view-ads.component';
import { PageNotFoundComponent } from '../business/components/page-not-found.component';
import { ViewAdInformationComponent } from '../business/components/view-ad-information.component';
import { AppComponent } from '../business/components/app.component';
import { HomeComponent } from '../business/components/home.component';
import { CreateAdComponent } from '../business/components/create-ad.component';
import { SearchComponent } from '../business/components/search.component';

import { VerifyEmailComponent } from '../business/components/verify-email.component';
import { EditComponent } from '../business/components/edit.component';

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