'use strict';

describe('App config', function () {
    var $ionicConfigProvider;
    var APP_ENV;
    var FIREBASE_URL;
    // Load the App Module
    beforeEach(module('scoffy'));
    beforeEach(inject(function ($ionicConfig, _APP_ENV_, _FIREBASE_URL_) {
        $ionicConfigProvider = $ionicConfig;        
        APP_ENV = _APP_ENV_;
        FIREBASE_URL = _FIREBASE_URL_;
    }));

    it('>> APP_ENV should be defined', function () {
        expect(APP_ENV).toBeDefined();
    });

    it('>> FIREBASE_URL should be defined and a string', function () {
        expect(FIREBASE_URL).toBeDefined();
        expect(typeof FIREBASE_URL).toEqual('string');
    });
    
    it('>> ionic jsScrolling should be disabled if not on Mobile app, ionic lab test or touch device ', function(){
        expect($ionicConfigProvider.scrolling.jsScrolling()).toEqual(APP_ENV.isMobileApp || APP_ENV.isIonicLabTest || APP_ENV.isTouchDevice);
    });

});