/* specific tab providers are defined in respective folder */
angular.module('scoffy.services', ['LocalForageModule'])

.service('rootRef', ['FIREBASE_URL', Firebase])

// used to check if not direct access from adress bar in browser is done to network detail
// otherwise it would bring issue on none mobile app
.service('checkForParentViewLoaded', function () {
    this.tabsLoaded = {};
    var _self = this;
    return {
        get: function (tabName) {
            return _self.tabsLoaded[tabName];
        }
        , setLoaded: function (tabName) {
            _self.tabsLoaded[tabName] = true;
        }
    };
});