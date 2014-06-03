'use strict';

angular.module('PhoneGap')
    .factory('FileTransfer', function (PhoneGap, $q, $window) {

        var ngFileTransfer = function () {
            var self = this;

            this.$deferred = $q.defer();
            this.$dirty = false;

            PhoneGap.ready().then(function () {
                self.$ft = new $window.FileTransfer();
                self.$ft.onprogress = angular.bind(self.$deferred, self.$deferred.notify);
            });

        };

        angular.forEach([ 'upload', 'download' ], function (action) {
            ngFileTransfer.prototype[action] = function (src, dst, options, trustAllHosts) {
                var self = this,
                    onSuccess = angular.bind(this.$deferred, this.$deferred.resolve),
                    onError = angular.bind(this.$deferred, this.$deferred.reject);

                // The internal state of the PhoneGap FileTransfer object is not
                // documented. Better safe than sorry
                if (this.$dirty) {
                    throw new Error('FileTransfer object already used!');
                }

                this.$dirty = true;

                if (arguments.length < 4) {
                    trustAllHosts = false;
                }

                options = options || {};

                return PhoneGap.ready().then(function () {
                    self.$ft[action](src, dst, onSuccess, onError, options, trustAllHosts);
                    return self.$deferred.promise;
                });
            };
        });

        ngFileTransfer.prototype.abort = function () {
            var self = this;

            PhoneGap.ready().then(function () {
                self.$ft.abort();
            });
        };

        return ngFileTransfer;
    });

angular.module('PhoneGap').factory('FileTransferError', function (PhoneGap, $window, $log) {

    var FileTransferError = {};

    PhoneGap.ready().then(function() {
        if (!$window.FileTransferError) {
            $log.error(new Error('FileTransferError not loaded!'));
            return;
        }

        angular.extend(FileTransferError, {
            FILE_NOT_FOUND_ERR: $window.FileTransferError.FILE_NOT_FOUND_ERR,
            INVALID_URL_ERR: $window.FileTransferError.INVALID_URL_ERR,
            CONNECTION_ERR: $window.FileTransferError.CONNECTION_ERR,
            ABORT_ERR: $window.FileTransferError.ABORT_ERR,
        });
    });

    return FileTransferError;
});