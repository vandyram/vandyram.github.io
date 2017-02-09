/**
 * @author Ramakrishnan Sathyavageeswaran
 */

(function () {
    app.controller('ServiceController', function ($scope,$location) {

        $scope.title = "Service";
        $scope.services = "Blah blah blah TBD";
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });
}());