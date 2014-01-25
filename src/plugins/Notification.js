'use strict';

angular.module('PhoneGap')
    .factory('Notification', function ($q, $window, PhoneGap) {
        return {
            alert: function (message, alertCallback, title, buttonName) {
                PhoneGap.ready().then(function () {
                    $window.navigator.notification.alert(message, alertCallback, title, buttonName);
                });
            },
            confirm: function (message, confirmCallback, title, buttonLabels) {
                PhoneGap.ready().then(function () {
                    $window.navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
                });
            },
            prompt: function (message, promptCallback, title, buttonLabels, defaultText) {
                PhoneGap.ready().then(function () {
                    $window.navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);
                }); 
            },
            beep: function (times) {
                PhoneGap.ready().then(function () {
                    $window.navigator.notification.beep(times);
                }); 
            },
            vibrate: function (milliseconds) {
                PhoneGap.ready().then(function () {
                    $window.navigator.notification.vibrate(milliseconds);
                }); 
            }
        };
    });
