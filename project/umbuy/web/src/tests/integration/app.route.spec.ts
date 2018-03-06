//to test in the app-routing.module.ts, we have route for proper page
import { routes } from '../../app/shared/app-routing.module'
import { ViewAdsComponent } from '../../app/business/components/view-ads.component';
import { ViewAdInformationComponent } from '../../app/business/components/view-ad-information.component';
import { CreateAdComponent } from '../../app/business/components/create-ad.component';
import { HomeComponent } from '../../app/business/components/home.component';
import { PageNotFoundComponent } from '../../app/business/components/page-not-found.component';

describe('routes testing',()=>{
   it('should contain routes for /ads',()=>{
      expect(routes).toContain({path: 'view/ads', component:ViewAdsComponent});
   });
   it('should contain routes for view/ads/:id',()=>{
      expect(routes).toContain({path: 'view/ads/:id', component:ViewAdInformationComponent});
   });
   it('should contain routes for createAd',()=>{
      expect(routes).toContain({path: 'createAd', component:CreateAdComponent});
   });
   it('should contain routes for homeComponent',()=>{
      expect(routes).toContain({path: '', component:HomeComponent});
   });
   it('should contain routes for PageNotFoundComponent',()=>{
      expect(routes).toContain({path: '**', component:PageNotFoundComponent});
   });

});