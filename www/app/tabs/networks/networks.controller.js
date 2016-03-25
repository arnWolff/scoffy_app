angular.module('scoffy.controllers')

.controller('NetwsCtrl', NetwsCtrl);

function NetwsCtrl($scope, Netws, checkForParentViewLoaded) {
  checkForParentViewLoaded.setLoaded('tab.netws');
  $scope.netws = Netws.all();
  $scope.remove = function(netw) {
    Netws.remove(netw);
  };
}
NetwsCtrl.$inject = ['$scope', 'Netws', 'checkForParentViewLoaded'];


