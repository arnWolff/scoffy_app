angular.module('scoffy')

.constant('FIREBASE_URL', 'https://shining-fire-666.firebaseio.com/')
.constant('APP_ENV', {
    isMobileApp: ionic.Platform.isWebView()
    // TO DO: for electron app
    //, isDesktopApp: ...
    , isTouchDevice: (function () { // this fails during unit-testing with PhantomJS, see: https://github.com/ariya/phantomjs/issues/10375
        return !!('ontouchstart' in window // works on most browsers 
            || navigator.maxTouchPoints); // works on IE10/11 and Surface
    })()
    , isIonicLabTest: (function(){
        var referrer = document.referrer;
        return referrer.substr(referrer.lastIndexOf('/') + 1) === "ionic-lab"; 
    })()
})
.constant('DEFAULT_USER_SETTINGS', {
    userPrefix: 'anon-',
    emailSuffix: '@yopmail.com',
    emailInboxPrefix: 'http://www.yopmail.com?',
    avatar: './assets/imgs/adam.jpg'
})

.config(ApplicationConfig);

function ApplicationConfig($ionicConfigProvider, APP_ENV) {
    // on desktop browser and not touch device, use native browser scrolling behaviour
    // we skip it if using ionic-lab test
    // note: for android platform on ionic-lab test, we need to specifically set jsScrolling to true, letting it as default value doesn't work as expected ::BUG::??? 
    //if (!APP_ENV.isMobileApp && !APP_ENV.isIonicLabTest && !APP_ENV.isTouchDevice) {
        
    $ionicConfigProvider.scrolling.jsScrolling = function () {
        return APP_ENV.isMobileApp || APP_ENV.isIonicLabTest || APP_ENV.isTouchDevice;
    };
    //}

}
ApplicationConfig.$inject = ['$ionicConfigProvider', 'APP_ENV'];