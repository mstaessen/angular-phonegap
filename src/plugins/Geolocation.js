'use strict';

angular.module('PhoneGap')
    .factory('Geolocation', function ($q, $window, $rootScope, PhoneGap) {
        var idCounter = 0;
        var watchMap = {};
        var deferred = $q.defer();


        return {
            getCurrentPosition: function (onSuccess, onError, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.geolocation.getCurrentPosition(
                        function (position) {
                            if (onSuccess) {
                                onSuccess(position);
                            }
                            else {
                                $rootScope.$apply(deferred.resolve(position));
                            }
                        },
                        function (error) {
                            if (onError) {
                                onError(position);
                            }
                            else {
                                $rootScope.$apply(deferred.reject(error));
                            }
                        }, options);
                });
                return deferred.promise;
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
