var app=angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'AppController',
		templateUrl:'templates/home.html'
	})
	.when('/about',{
		controller: 'AboutController',
		templateUrl:'templates/about.html'
	})
	.when('/404',{
		controller: 'NotFoundController',
		templateUrl:'templates/404.html'
	})

	.otherwise({redirectTo: '/404'})
});

app.controller('AppController',	function(){
		console.log('AppController');
});

app.controller('AboutController', function(){
		console.log('AboutController');

});

app.controller('NotFoundController',['$Scope',
	function($Scope){
		console.log('NotFoundController');

}]);

app.directive('maDirective',function(){
	return {
		restrict: 'A',
		template: '<p>My New directive</p>'
	}
});
