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

Include `Accelerometer` as a dependency in your controller and use the Cordova/PhoneGap methods. Because the callback
methods are invoked from outside Angular, you need to use `$scope.$apply`. The method will trigger the callback whenever
the device is ready.

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

TODO

### Capture

TODO

### Compass

Include `Compass` as a dependency in your controller and use the Cordova/PhoneGap methods. Because the callback
methods are invoked from outside Angular, you need to use `$scope.$apply`. The method will trigger the callback whenever
the device is ready.

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

Include `Geolocation` as a dependency in your controller and use the Cordova/PhoneGap methods. Because the callback
methods are invoked from outside Angular, you need to use `$scope.$apply`. The method will trigger the callback whenever
the device is ready.

```javascript
angular.module('myApp')
    .controller('MyController', function($scope, Geolocation) {
        Accelerometer.getCurrentAcceleration(function(position) {
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