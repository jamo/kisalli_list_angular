'use strict';

angular.module('kisallisApp')
  .controller('KisallisCtrl', ['$scope', 'Kisalli' , function($scope, Kisalli) {
    $scope.kisallis = Kisalli.query(function(data){
      console.log("asd");
    }, function(err){
      console.log("error:");
    });
}]);
