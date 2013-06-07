'use strict';

angular.module('Cordova')
    .factory('CordovaCamera', function ($q, $window, Cordova) {
        return {
            getPicture: function (onSuccess, onError, options) {
                Cordova.ready().then(function () {
                    $window.navigator.camera.getPicture(onSuccess, onError, options);
                });
            },
            cleanup: function (onSuccess, onError) {
                Cordova.ready().then(function () {
                    $window.navigator.camera.cleanup(onSuccess, onError);
                });
            }
        };
    });
