/**
 * @author Ramakrishnan Sathyavageeswaran
 */

(function () {
    app.controller('GalleryController', function ($scope,$location) {

        $scope.title = "Gallery";
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });
}());