'use strict';

describe('Service: progressBarService', function () {

  // load the service's module
  beforeEach(module('progressbarApp'));

  // instantiate service
  var progressBarService;
  beforeEach(inject(function (_progressBarService_) {
    progressBarService = _progressBarService_;
  }));

  it('should do something', function () {
    expect(!!progressBarService).toBe(true);
  });

});
