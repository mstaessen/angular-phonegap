'use strict';

angular.module('Cordova')
    .factory('CordovaGeolocation', function ($q, $window, Cordova) {
        var idCounter = 0;
        var watchMap = {};

        return {
            getCurrentPosition: function (onSuccess, onError, options) {
                Cordova.ready().then(function () {
                    $window.navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
                });
            },
            watchPosition: function (onSuccess, onError, options) {
                var watchId = (++idCounter).toString(10);
                Cordova.ready().then(function () {
                    watchMap[watchId] = $window.navigator.geolocation.watchPosition(onSuccess, onError, options);
                });
                return watchId;
            },
            clearWatch: function (watchId) {
                if (watchMap[watchId]) {
                    Cordova.ready().then(function () {
                        $window.navigator.geolocation.clearWatch(watchMap[watchId]);
                        delete watchMap[watchId];
                    });
                }
            }
        };
    });
