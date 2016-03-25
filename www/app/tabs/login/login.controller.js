angular.module('scoffy.controllers', ['firebase'])

.controller('LoginCtrl', LoginCtrl);

function LoginCtrl(Auth, $state) {

    this.loginWith = function loginWith(provider) {
        // if no provider, use anonymous authentification
        var methodToCall = provider ? '$authWithOAuthPopup' : '$authAnonymously';
        var arg = provider ? provider : {};
        var options = provider ? { scope: 'email' } : {};
        Auth[methodToCall](arg, options).then(function (authData) {
            $state.go('tab.dash');
        }, function (error) {
            console.log("error", error);
        });
    };

}
LoginCtrl.$inject = ['Auth', '$state'];