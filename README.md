# angular-phonegap

angular-phonegap is a set of wrappers for Cordova/PhoneGap for a smooth integration with AngularJS. You can stop
worrying about `deviceready` and focus more on your application.

The API's in this library are identical to the PhoneGap/Cordova API's, so you should check the documentation there:
http://docs.phonegap.com. A little more information on how to handle information in callbacks is provided below.

## Usage

### Setup

In your application module, put

```javascript
angular.module('myApp', ['PhoneGap']);
```

This will make the wrappers available to your application and will register the required event listeners.

### Accelerometer

Adding `Accelerometer` as a dependency in your controller will enable you to use the methods of the `Accelerometer`
object. These methods are identical to the Cordova/PhoneGap methods but they will only trigger the callback when the
device is ready (`deviceready` event). Because the callback methods are invoked from outside Angular, you need to use
`$scope.$apply`.

```javascript
angular.module('myApp')
    .controller('MyController', function($scope, Accelerometer) {
        Accelerometer.getCurrentAcceleration(function(acceleration) {
            $scope.$apply(function() {
                $scope.acceleration = acceleration;
            });
        }, function(error) {
            $scope.$apply(function() {
                $scope.error = error;
            });
        }, {
            frequency: 1000
        });
    });
```

### Camera

Adding `Camera` as a dependency in your controller will enable you to use the methods of the `Camera` object. These
methods are identical to the Cordova/PhoneGap methods but they will only trigger the callback when the device is ready
(`deviceready` event). Because the callback methods are invoked from outside Angular, you need to use `$scope.$apply`.

Cordova/PhoneGap uses a couple of constants of a global `Camera` variable. These constants are literaly mirrored in the
Angular `Camera` wrapper, i.e. `[window.]Camera.EncodingType` (the global constant) is available as
`Camera.EncodingType` (a property in the Angular `Camera`). The same principle is applied to the other constants.

Example:
```javascript
angular.module('myApp')
    .controller('MyController', function($scope, Camera) {
        Camera.getPicture(function(image) {
            $scope.$apply(function() {
                $scope.imageData = image;
            });
        }, function(error) {
            $scope.$apply(function() {
                $scope.error = error;
            });
        }, {
            destinationType: Camera.DestinationType.FILE_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            quality: 50
        });
    });
```

### Capture

TODO

### Compass

Adding `Compass` as a dependency in your controller will enable you to use the methods of the `Compass` object. These
methods are identical to the Cordova/PhoneGap methods but they will only trigger the callback when the device is ready
(`deviceready` event). Because the callback methods are invoked from outside Angular, you need to use `$scope.$apply`.

Example:
```javascript
angular.module('myApp')
    .controller('MyController', function($scope, Compass) {
        Compass.getCurrentAcceleration(function(heading) {
            $scope.$apply(function() {
                $scope.heading = heading;
            });
        }, function(error) {
            $scope.$apply(function() {
                $scope.error = error;
            });
        }, {
            frequency: 1000
        });
    });
```

### Contacts

TODO

### Geolocation

Adding `Geolocation` as a dependency in your controller will enable you to use the methods of the `Geolocation` object.
These methods are identical to the Cordova/PhoneGap methods but they will only trigger the callback when the device is
ready (`deviceready` event). Because the callback methods are invoked from outside Angular, you need to use
`$scope.$apply`.

Example:
```javascript
angular.module('myApp')
    .controller('MyController', function($scope, Geolocation) {
        Geolocation.getCurrentPosition(function(position) {
            $scope.$apply(function() {
                $scope.position = position;
            });
        }, function(error) {
            $scope.$apply(function() {
                $scope.error = error;
            });
        }, {
            frequency: 1000
        });
    });
```

### Globalization

TODO

### Notification

TODO

### Splashscreen

TODO

### Storage

TODO


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mstaessen/angular-phonegap/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

