angular.module('scoffy.controllers')

.controller('NetwDetailCtrl', NetwDetailCtrl);

function NetwDetailCtrl($scope, $stateParams, Netws) {
  $scope.netw = Netws.get($stateParams.netwId);
}
NetwDetailCtrl.$inject = ['$scope', '$stateParams', 'Netws'];