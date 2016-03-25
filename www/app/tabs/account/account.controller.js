angular.module('scoffy.controllers')

.controller('AccountCtrl', AccountCtrl);

function AccountCtrl($scope, userAccountService) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.userData = userAccountService.getUserData();
  console.log($scope.userData);    
}
AccountCtrl.$inject = ['$scope','UserAccountService'];