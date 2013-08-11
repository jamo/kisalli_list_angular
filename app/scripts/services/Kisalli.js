'use strict';

angular.module('kisallisApp')
  .factory('Kisalli', ['$resource', function($resource) {
  	return $resource('http://kysely.jamo.fi/kisallis.json',{api_key: "<insert api key here>"})
  }]);
