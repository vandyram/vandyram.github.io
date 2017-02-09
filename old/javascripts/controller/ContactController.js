/**
 * @author Ramakrishnan Sathyavageeswaran
 */

(function () {
    app.controller('ContactController', function ($scope,  $location) {
        $scope.title = "Contact";
        $scope.phone = "3182439758";
        $scope.twitter = "https://twitter.com/idlyupma";
        $scope.facebook = "https://www.facebook.com/vandhana.ramamoorthy";
        $scope.flickr = "";
        $scope.fivehunpix = "";
        $scope.googleplus = "";
        $scope.mail = "";
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });
}());