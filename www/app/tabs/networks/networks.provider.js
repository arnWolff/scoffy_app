angular.module('scoffy.services')

.factory('Netws', networkFactory);

function networkFactory($localForage){
    // Might use a resource here that returns a JSON array
    /*
    // Some fake testing data
    var netws = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'assets/imgs/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'assets/imgs/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'assets/imgs/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'assets/imgs/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'assets/imgs/mike.png'
    }, {
      id: 5,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'assets/imgs/ben.png'
    }, {
      id: 6,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'assets/imgs/max.png'
    }, {
      id: 7,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'assets/imgs/adam.jpg'
    }, {
      id: 8,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'assets/imgs/perry.png'
    }, {
      id: 9,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'assets/imgs/mike.png'
    }, {
      id: 10,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'assets/imgs/mike.png'
    }, {
      id: 11,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'assets/imgs/mike.png'
    }, {
      id: 12,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream. LAST',
      face: 'assets/imgs/mike.png'
    }]; */

    //window.indexedDB.deleteDatabase("scoffy_APP");
    var lfNetworkTable = $localForage.createInstance({
        driver: localforage.INDEXEDDB, // force INDEXEDDB driver
        name: 'scoffyAPP', // name of the database and prefix for your data, it is "lf" by default
        version: 1.0, // version of the database, you shouldn't have to use this
        storeName: 'network', // name of the table
        description: 'network table'
    });
console.log(lfNetworkTable);
    return {
        all: function () {
            return netws;
        }
        , remove: function (netw) {
            netws.splice(netws.indexOf(netw), 1);
        }
        , get: function (netwId) {
            for (var i = 0; i < netws.length; i++) {
                if (netws[i].id === parseInt(netwId)) {
                    return netws[i];
                }
            }
            return null;
        }
    };
}

networkFactory.$inject = ['$localForage'];