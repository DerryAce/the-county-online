angular.module("county_online", ["ionic","ionMdInput","ionic-material","ionic.rating","ionicLazyLoad","county_online.controllers", "county_online.services"])
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			if(window.StatusBar) {
				StatusBar.styleDefault();
			}


		});
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])

	.filter("trustUrl", function($sce) {
		return function(url) {
			return $sce.trustAsResourceUrl(url);
		};
	})

	.filter("strExplode", function() {
		return function($string,$delimiter) {
			if(!$string.length ) return;
			var $_delimiter = $delimiter || "|";
			return $string.split($_delimiter);
		};
	})





.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider,$httpProvider){
	// Domain Whitelist
	$sceDelegateProvider.resourceUrlWhitelist([
		"self",
		new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$'),
		new RegExp('^(http[s]?):\/\/(w{3}.)?w3schools\.com/.+$'),
	]);
	$stateProvider
	.state("county_online",{
		url: "/county_online",
			abstract: true,
			templateUrl: "templates/county_online-side_menus.html",
			controller: "side_menusCtrl",
	})

	.state("county_online.about", {
		url: "/about",
		views: {
			"county_online-side_menus" : {
						templateUrl:"templates/county_online-about.html",
						controller: "aboutCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("county_online.business_listings", {
		url: "/business_listings",
		views: {
			"county_online-side_menus" : {
						templateUrl:"templates/county_online-business_listings.html",
						controller: "business_listingsCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("county_online.cart", {
		url: "/cart",
		views: {
			"county_online-side_menus" : {
						templateUrl:"templates/county_online-cart.html",
						controller: "cartCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("county_online.home", {
		url: "/home",
		views: {
			"county_online-side_menus" : {
						templateUrl:"templates/county_online-home.html",
						controller: "homeCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("county_online.jobs", {
		url: "/jobs",
		views: {
			"county_online-side_menus" : {
						templateUrl:"templates/county_online-jobs.html",
						controller: "jobsCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("county_online.login", {
		url: "/login",
		views: {
			"county_online-side_menus" : {
						templateUrl:"templates/county_online-login.html",
						controller: "loginCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("county_online.news", {
		url: "/news",
		views: {
			"county_online-side_menus" : {
						templateUrl:"templates/county_online-news.html",
						controller: "newsCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("county_online.tenders", {
		url: "/tenders",
		views: {
			"county_online-side_menus" : {
						templateUrl:"templates/county_online-tenders.html",
						controller: "tendersCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/county_online/about");
});
