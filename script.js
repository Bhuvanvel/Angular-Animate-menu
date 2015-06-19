var app = angular.module('myApp', [
  'ui.bootstrap',
  'ngStorage',  
  'jdf.ngThemeSwitcher'
]);

(function() {

  function ThemeController($scope, $localStorage, $location) {
    
    // Hack for dropdown to close - it won't close with an empty href attribute
    // but putting # or the like in the href causes the router to fire
    // using the current location as the href won't fire the router when clicking.
    // This also seems to cause a reflow and removes the problem of the style not
    // updating until the mouse moves
    $scope.currentLocation = function() { return $location.path(); }

  	// bootswatch themes
    $scope.themes = [
    	{ name: "Amelia", url: "css/style1.css"},
    	{ name: "Cerulean", url: "css/style2.css"},
    	{ name: "Cosmo", url: "css/style3.css"},
    	{ name: "Cyborg", url: "css/style4.css"},
    	{ name: "Flatly", url: "css/style5.css"},
    	{ name: "Journal", url: "css/style6.css"},
    	{ name: "Readable", url: "css/style7.css"},
    	{ name: "Simplex", url: "css/style8.css"},
    	{ name: "Slate", url: "css/style9.css"},
    	{ name: "Spacelab", url: "css/style10.css"}
    ];
    
    // initialize localStorage with default theme
    $scope.$storage = $localStorage.$default({
      theme: $scope.themes[6]
    });
    
    $scope.setTheme = function(theme) {
      // don't do anything if it's the same theme already set
    	if (theme.name !== $scope.theme.name) {
    		// set the model so the directive updates
    		$scope.theme = theme;
    		
    		// save the new theme to $localStorage
    		$scope.$storage.theme = theme;
    	}
    };

	// initialize theme from $localStorage (if this is first load, it'll get the default)
	$scope.theme = $scope.$storage.theme;

  }
  app.controller('ThemeController', ['$scope', '$localStorage', '$location', ThemeController]);
})();
