'use strict';

angular.module('PhoneGap')
    .factory('Compass', function ($q, $window, PhoneGap) {
        var idCounter = 0;
        var watchMap = {};

        return {
            getCurrentHeading: function (onSuccess, onError, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.compass.getCurrentHeading(onSuccess, onError, options);
                });
            },
            watchHeading: function (onSuccess, onError, options) {
                var watchId = (++idCounter).toString(10);
                PhoneGap.ready().then(function () {
                    watchMap[watchId] = $window.navigator.compass.watchHeading(onSuccess, onError, options);
                });
                return watchId;
            },
            clearWatch: function (watchId) {
                if (watchMap[watchId]) {
                    PhoneGap.ready().then(function () {
                        $window.navigator.compass.clearWatch(watchMap[watchId]);
                        delete watchMap[watchId];
                    });
                }
            }
        };
    });