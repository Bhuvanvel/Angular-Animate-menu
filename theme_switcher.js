(function() {
	function ThemeSwitcherDirective($sce) {
		return {
			restrict: 'E',
			scope: {
				urls: '='
			},
			template: '<link rel="stylesheet" ng-href="{{url}}" ng-repeat="url in urls" />'
		};
	}

	angular.module('jdf.ngThemeSwitcher', [])
			.directive('themeSwitcher', ['$sce', ThemeSwitcherDirective]);
})();
