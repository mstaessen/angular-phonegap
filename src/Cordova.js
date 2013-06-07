'use strict';
/* jshint unused:false */

angular.module('Cordova', [])
    .factory('Cordova', function ($q, $rootScope, $document) {
        var deferred = $q.defer();

        $document.bind('deviceready', function () {
            console.log('Device is ready!');
            $rootScope.$apply(deferred.resolve);
        });
        console.log('Waiting for device...');

        return {
            ready: function () {
                return deferred.promise;
            }
        };
    })
    .run(function (Cordova) {});

