var component = require("../views/view-ads/view-ads.component");
var adsService = require("../services/advertisement.service");
var filService = require("../services/filterResult.service");
var allService = require("../services/allResult.service");
var ad = require("../api/advertisement");

describe('ViewAdsComponent(M) Unit Tests', () => {
  var viewAdsComponent;
  var advertisementService;
  var filterResultService;
  var allResultService;
  var tempAd;

  beforeEach(function(){
    advertisementService = new adsService.AdvertisementService(null);
    allResultService = new allService.AllResultService();
    filterResultService = new filService.FilterResultService();
    viewAdsComponent = new component.ViewAdsComponent(advertisementService, allResultService, filterResultService);
    
    tempAd = [{ 
      "advertisementId": 1,
      "userId": 1,
      "title": 'iphone',
      "description": 'A great iphone for a great price',
      "price": 75,
      "created_on": '2018-01-01',
      "last_updated": '2018-01-01',
      "deleted_on": null,
      "imageUrl": 'http://alink.com',
      "category": 'electronics'
    }, {
      "advertisementId": 2,
      "userId": 1,
      "title": 'Galaxy',
      "description": 'A great Galaxy for a great price',
      "price": 75,
      "created_on": '2018-01-01',
      "last_updated": '2018-01-01',
      "deleted_on": null,
      "imageUrl": 'http://alink.com',
      "category": 'electronics'
    }];
  });

  it("When ViewAdComponent is initiated, advertisements should be defined.", () => {
    let spy=spyOn(advertisementService, "getAllAdvertisements").and.callFake(t => {
      return Observable.from([tempAd]);
    });
    viewAdsComponent.advertisements = tempAd;

      // we should be able to retrieve the advertisementId by calling getAdvertisementId() in the component.
    expect(viewAdsComponent.advertisements[0].title).toMatch("iphone");
    //});
  });
});