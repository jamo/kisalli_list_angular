'use strict';

describe('Service: Kisalli', function () {

  // load the service's module
  beforeEach(module('kisallisApp'));

  // instantiate service
  var Kisalli;
  beforeEach(inject(function (_Kisalli_) {
    Kisalli = _Kisalli_;
  }));

  it('should do something', function () {
    expect(!!Kisalli).toBe(true);
  });

});
