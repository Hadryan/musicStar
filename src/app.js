		var APP = angular.module('APP',['ngRoute']);

		APP.config(['$routeProvider',
		  function($routeProvider) {
		    $routeProvider.
		      when('/', {
		        templateUrl: 'partials/radios.html',
		        controller: 'RadiosCtrl'
		      }).	
		      when('/genero/:id', {
		        templateUrl: 'partials/genero.html',
		        controller: 'GeneroViewCtrl'
		      }).	
		      when('/artista/:id', {
		        templateUrl: 'partials/artista.html',
		        controller: 'ArtistaViewCtrl'
		      }).	
		      when('/album/:id', {
		        templateUrl: 'partials/album.html',
		        controller: 'AlbumViewCtrl'
		      }).
		      when('/radio/:id', {
		        templateUrl: 'partials/radio.html',
		        controller: 'RadioViewCtrl'
		      }).		      
		      when('/pesquisa/:texto', {
		        templateUrl: 'partials/pesquisa.html',
		        controller: 'PesquisaCtrl'
		      }).		      		      		      		            
		      otherwise({
		        redirectTo: '/'
		      });
		}]).run( function($rootScope, $location) {
		    $rootScope.$on( "$routeChangeStart", function(event, next, current) {

		    });
		    $rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
		         //window.scrollTo(0);
		    });	    
		});