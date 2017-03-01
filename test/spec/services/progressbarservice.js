'use strict';

describe('Service: progressBarService', function () {

  var ENDPOINT = 'http://pb-api.herokuapp.com/bars';
  var progressBarData = { "buttons": [6,19,-22,-41], "bars": [47,23], "limit": 110 };
  var progressBar = [{
    "id":"progressbar1",
    "value":6,
    "isLimitReached": false
  },{
    "id":"progressbar2",
    "value":19,
    "isLimitReached": false
  },{
    "id":"progressbar3",
    "value":-22,
    "isLimitReached": false
  },{
    "id":"progressbar4",
    "value":-41,
    "isLimitReached": false
  }
  ];


  // load the service's module
  beforeEach(module('progressbarApp'));

  // instantiate service
  var progressBarService, $httpBackend;
  beforeEach(inject(function (_progressBarService_, _$httpBackend_) {
    progressBarService = _progressBarService_;
    $httpBackend = _$httpBackend_;
  }));

  it('should do something', function () {
    expect(!!progressBarService).toBe(true);
  });

  it('getProgressBar data', function () {
    $httpBackend.expectGET(ENDPOINT).respond(progressBarData);
    progressBarService.getProgressBarData().then(function(data) {
      expect(data.buttons).toContain(6);
      expect(data.bars).toContain(23);
      expect(data.limit).toEqual(110);
    });
    $httpBackend.flush();
  });


  it('Create progress bar', function () {
    progressBarService.createProgressBars()
  });





});
