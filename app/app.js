'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'

  // 'ngRoute',
  //   'ngMaterial',
  //   'ngMessages',
  //   'ngProgress',
  //   'LocalStorageModule'
]).
config([
	'$locationProvider',
	 '$routeProvider',


// '$routeProvider',
//     '$locationProvider',
//     '$mdThemingProvider',
//     '$mdIconProvider',
//     'localStorageServiceProvider',


	  function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});

  // $routeProvider.when('/', {
  //           templateUrl: "views/homepage.html",
  //           controller: "HomeController"
  //       }).when('/recipes', {
  //           templateUrl: 'views/recipes.html',
  //           controller: 'RecipeController'
  //       }).when('/recipes/:id', {
  //           templateUrl: 'views/recipeDetails.html',
  //           controller: 'RecipeDetailsController'
  //       }).otherwise({
  //           redirectTo: "/"
  //       });

  //       $locationProvider.html5Mode(true);

  //       $mdThemingProvider.theme('default')
  //       .primaryPalette('deep-purple')
  //       .accentPalette('green')
  //       .warnPalette('deep-orange');

  //       localStorageServiceProvider.setPrefix('webapp');

  
}]);
