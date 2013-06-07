'use strict';

angular.module('PhoneGap')
    .factory('Camera', function ($q, $window, PhoneGap) {
        return {
            getPicture: function (onSuccess, onError, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.camera.getPicture(onSuccess, onError, options);
                });
            },
            cleanup: function (onSuccess, onError) {
                PhoneGap.ready().then(function () {
                    $window.navigator.camera.cleanup(onSuccess, onError);
                });
            }
        };
    });
