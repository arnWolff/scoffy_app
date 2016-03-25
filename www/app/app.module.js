// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'scoffy' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'scoffy.services' is found in app.services.js
// 'scoffy.controllers' is found in app.controllers.js
angular.module('scoffy', ['ionic', 'scoffy.controllers', 'scoffy.services', 'firebase'])

.run(ApplicationRun)

function ApplicationRun($ionicPlatform, $rootScope, $state, $window, $timeout, $location) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $requireAuth promise is rejected
        // and redirect the user back to the home page
        if (error === 'AUTH_REQUIRED') {
            $state.go('login');
        }
        else if(error === 'PARENT_TAB_LOAD_REQUIRED') {
            $state.go(toState.parentView).then(function(a){
                //$window.history.replaceState({},'',$location.$$absUrl);
                $timeout(function(){$window.history.back()});
            });
        }
    });
    /*$rootScope.$on('$stateChangeStart', function(evt, to, params) {
        console.log("1",evt, to, params);
        /*if (to.redirectTo) {
            evt.preventDefault();
            $state.go(to.redirectTo, params)
        }*/
    /*});
    /*$rootScope.$on("$locationChangeStart", function(event, next, current) {
        console.log("2",event, next, current);
    });*/

}
ApplicationRun.$inject = ['$ionicPlatform', '$rootScope', '$state', '$window', '$timeout', '$location'];



