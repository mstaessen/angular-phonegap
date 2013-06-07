'use strict';

angular.module('Cordova')
    .factory('CordovaCompass', function ($q, $window, Cordova) {
        var idCounter = 0;
        var watchMap = {};

        return {
            getCurrentHeading: function (onSuccess, onError, options) {
                Cordova.ready().then(function () {
                    $window.navigator.compass.getCurrentHeading(onSuccess, onError, options);
                });
            },
            watchHeading: function (onSuccess, onError, options) {
                var watchId = (++idCounter).toString(10);
                Cordova.ready().then(function () {
                    watchMap[watchId] = $window.navigator.compass.watchHeading(onSuccess, onError, options);
                });
                return watchId;
            },
            clearWatch: function (watchId) {
                if (watchMap[watchId]) {
                    Cordova.ready().then(function () {
                        $window.navigator.compass.clearWatch(watchMap[watchId]);
                        delete watchMap[watchId];
                    });
                }
            }
        };
    });