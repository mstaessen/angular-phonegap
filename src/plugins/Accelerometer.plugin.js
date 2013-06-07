'use strict';

angular.module('Cordova')
    .factory('CordovaAccelerometer', function ($q, $window, Cordova) {
        var idCounter = 0;
        var watchMap = {};

        return {
            getCurrentAcceleration: function (onSuccess, onError, options) {
                Cordova.ready().then(function () {
                    $window.navigator.accelerometer.getCurrentAcceleration(onSuccess, onError, options);
                });
            },
            watchAcceleration: function (onSuccess, onError, options) {
                var watchId = (++idCounter).toString(10);
                Cordova.ready().then(function () {
                    watchMap[watchId] = $window.navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
                });
                return watchId;
            },
            clearWatch: function (watchId) {
                if (watchMap[watchId]) {
                    Cordova.ready().then(function () {
                        $window.navigator.accelerometer.clearWatch(watchMap[watchId]);
                        delete watchMap[watchId];
                    });
                }
            }
        };
    });
