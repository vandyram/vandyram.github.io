/**
 * Angular App Module
 *
 * @author Ramakrishnan Sathyavgeeswaran.
 */

var app = angular.module("VandyPhotography", ["ngRoute","ui.router","uiRouterStyles"]);

app.config(function ($stateProvider, $urlRouterProvider,$routeProvider) {
    $urlRouterProvider.otherwise('/photos/nature');
    $stateProvider

        .state('home',{
            url:'/home',
            templateUrl:'home.html',
            controller: "MainController",
            data: {
                css: ['stylesheet/index.css',
                ]
            }
        })
        .state('photos',{
            url:'/photos',
            templateUrl:'photos.html',
            data: {
                css: ['stylesheet/main.css',
                    ]
            }
        })
        .state('photos.about',{
            url:'/about',
            templateUrl:'partials/about.html',
            controller: "AboutController",

        })
        .state('photos.nature',{
            url:'/nature',
            templateUrl:'partials/nature.html',
            controller:"AboutController"
        })
        .state('photos.moment',{
            url:'/moment',
            templateUrl:'partials/moments.html',
            controller:"AboutController"
        })
        .state('photos.portrait',{
            url:'/portrait',
            templateUrl:'partials/portraits.html',
            controller:"AboutController"
        });

    // $routeProvider
    //     .when("/nature", {
    //         templateUrl: "partials/nature.html",
    //         controller: "AboutController",
    //
    //     })
    //     .when("/moment", {
    //         templateUrl: "partials/moments.html",
    //         controller: "ContactController",
    //     })
    //     .when("/portraits", {
    //         templateUrl: "partials/portraits.html",
    //         controller: "GalleryController",
    //     })
    //     .when("/home", {
    //         templateUrl: "home.html",
    //         controller: "MainController",
    //     })
    //     .otherwise({redirectTo: "/nature"});




});