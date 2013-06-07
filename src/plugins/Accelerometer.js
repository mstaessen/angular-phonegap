'use strict';

angular.module('PhoneGap')
    .factory('Accelerometer', function ($q, $window, PhoneGap) {
        var idCounter = 0;
        var watchMap = {};

        return {
            getCurrentAcceleration: function (onSuccess, onError, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.accelerometer.getCurrentAcceleration(onSuccess, onError, options);
                });
            },
            watchAcceleration: function (onSuccess, onError, options) {
                var watchId = (++idCounter).toString(10);
                PhoneGap.ready().then(function () {
                    watchMap[watchId] = $window.navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
                });
                return watchId;
            },
            clearWatch: function (watchId) {
                if (watchMap[watchId]) {
                    PhoneGap.ready().then(function () {
                        $window.navigator.accelerometer.clearWatch(watchMap[watchId]);
                        delete watchMap[watchId];
                    });
                }
            }
        };
    });
