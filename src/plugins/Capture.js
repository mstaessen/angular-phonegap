'use strict';

angular.module('PhoneGap')
    .factory('Capture', function ($q, $window, PhoneGap) {
        return {
            captureAudio: function (onSuccess, onError, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.device.capture.captureAudio(onSuccess, onError, options);
                });
            },
            captureImage: function (onSuccess, onError, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.device.capture.captureAudio(onSuccess, onError, options);
                });
            },
            captureVideo: function (onSuccess, onError, options) {
                PhoneGap.ready().then(function () {
                    $window.navigator.device.capture.captureVideo(onSuccess, onError, options);
                });
            }
        };
    });
