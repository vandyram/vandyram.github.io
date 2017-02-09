/**
 * @author Ramakrishnan Sathyavageeswaran
 */
(function () {
    app.controller('MainController', function ($scope, $location) {
        $scope.title = "Home";
        $scope.firstName = "Vandhana";
        $scope.lastName = "Ramamoorthy";
        $scope.siteName = "VANDYRAM PHOTOGRAPHY";
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });
}());