/**
 * Angular App Module
 *
 * @author Ramakrishnan Sathyavgeeswaran.
 */

var app = angular.module("VandyPhotography", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/nature", {
            templateUrl: "nature.html",
            controller: "AboutController",

        })
        .when("/moment", {
            templateUrl: "moments.html",
            controller: "ContactController",
        })
        .when("/portraits", {
            templateUrl: "portraits.html",
            controller: "GalleryController",
        })
        .when("/home", {
            templateUrl: "home.html",
            controller: "MainController",
        })
        .when("/service", {
            templateUrl: "service.html",
            controller: "ServiceController",
        })
        .otherwise({redirectTo: "/nature"});


});