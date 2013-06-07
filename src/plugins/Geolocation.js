'use strict';

angular.module('PhoneGap')
    .factory('Geolocation', function ($q, $window, PhoneGap) {
        var idCounter = 0;
        var watchMap = {};

        return {
            getCurrentPosition: function (onSuccess, onError, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
                });
            },
            watchPosition: function (onSuccess, onError, options) {
                var watchId = (++idCounter).toString(10);
                PhoneGap.ready().then(function () {
                    watchMap[watchId] = $window.navigator.geolocation.watchPosition(onSuccess, onError, options);
                });
                return watchId;
            },
            clearWatch: function (watchId) {
                if (watchMap[watchId]) {
                    PhoneGap.ready().then(function () {
                        $window.navigator.geolocation.clearWatch(watchMap[watchId]);
                        delete watchMap[watchId];
                    });
                }
            }
        };
    });
