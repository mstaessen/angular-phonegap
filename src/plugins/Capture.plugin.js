'use strict';

angular.module('Cordova')
    .factory('CordovaCapture', function ($q, $window, Cordova) {
        return {
            captureAudio: function (onSuccess, onError, options) {
                Cordova.ready().then(function () {
                    $window.navigator.device.capture.captureAudio(onSuccess, onError, options);
                });
            },
            captureImage: function (onSuccess, onError, options) {
                Cordova.ready().then(function () {
                    $window.navigator.device.capture.captureAudio(onSuccess, onError, options);
                });
            },
            captureVideo: function (onSuccess, onError, options) {
                Cordova.ready().then(function () {
                    $window.navigator.device.capture.captureVideo(onSuccess, onError, options);
                });
            }
        };
    });
