/**
 * Angular App Module
 *
 * @author Ramakrishnan Sathyavgeeswaran.
 */

var app = angular.module("VandyPhotography",["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider
        .when("/about" ,{
            templateUrl:"about.html",
            controller:"AboutController"
        })
        .when("/contact" ,{
            templateUrl:"contact.html",
            controller:"ContactController"
        })
        .when("/gallery" ,{
            templateUrl:"gallery.html",
            controller:"GalleryController"
        })
        .when("/home",{
            templateUrl: "home.html",
            controller: "MainController"
        })
        .when("/service" ,{
            templateUrl:"service.html",
            controller:"ServiceController"
        })
        .otherwise({redirectTo:"/home"});




});