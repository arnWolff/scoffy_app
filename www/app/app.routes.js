angular.module('scoffy')

.config(ApplicationRouter);

function ApplicationRouter($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('login', {
        url: '/login'
        , templateUrl: 'app/tabs/login/login.view.html'
        , controller: 'LoginCtrl as ctrl'
        , resolve: {
            checkUserIsLogged: loggedResolver
        }
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab'
        , abstract: true
        , templateUrl: 'app/tabs/tabs.view.html'
        , resolve: {
            authData: authDataResolver
        }
    })

    // Each tab has its own nav history stack:
    .state('tab.dash', {
        url: '/dash'
        , views: {
            'tab-dash': {
                templateUrl: 'app/tabs/dashboard/dashboard.view.html'
                , controller: 'DashCtrl'
            }
        }
    })

    .state('tab.netws', {
            url: '/netws'
            , views: {
                'tab-netws': {
                    templateUrl: 'app/tabs/networks/networks.view.html'
                    , controller: 'NetwsCtrl'
                }
            }
        })
        .state('tab.netw-detail', {
            url: '/netws/:netwId'
            , views: {
                'tab-netws': {
                    templateUrl: 'app/tabs/networks/network.detail.view.html'
                    , controller: 'NetwDetailCtrl'
                }
            }
            , resolve: {
                parentViewLoaded: parentViewLoadedResolver
            }
            // custom property of state used on error
            
            , parentView: 'tab.netws'
        })

    .state('tab.account', {
        url: '/account'
        , views: {
            'tab-account': {
                templateUrl: 'app/tabs/account/account.view.html'
                , controller: 'AccountCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

}
ApplicationRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function authDataResolver(Auth, userAccountService) {
    return Auth.$requireAuth().then(function (authData) {
        userAccountService.setUserData(authData);
    });
}
authDataResolver.$inject = ['Auth', 'UserAccountService'];

function parentViewLoadedResolver($q, checkForParentViewLoaded) {
    if (!this.self.parentView || checkForParentViewLoaded.get(this.self.parentView)) {
        return $q.resolve();
    } else {
        return $q.reject('PARENT_TAB_LOAD_REQUIRED');
    }
}
parentViewLoadedResolver.$inject = ['$q', 'checkForParentViewLoaded'];

function loggedResolver($q, Auth, $state) {
    if (Auth.$getAuth()) {
        return $q.resolve().then(function () {
            $state.go('tab.dash');
        })
    }
}
loggedResolver.$inject = ['$q', 'Auth', '$state'];