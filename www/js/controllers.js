angular.module("county_online.controllers", [])



// TODO: Controller => indexCtrl
.controller("indexCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window){
	
	$rootScope.page_id = "index" ;
	$rootScope.last_edit = "-" ;
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

// TODO: Controller => side_menusCtrl
.controller("side_menusCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window){
	
	$rootScope.page_id = "side_menus" ;
	$rootScope.last_edit = "-" ;
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	
	var popover_template = "";
	popover_template += "<ion-popover-view class=\"fit\">";
	popover_template += "	<ion-content>";
	popover_template += "		<ion-list>";
	popover_template += "			<a class=\"item dark-ink\" ng-href=\"#/county_online/about\" ng-click=\"popover.hide()\">";
	popover_template += "			About";
	popover_template += "			</a>";
	popover_template += "			<a class=\"item dark-ink\" ng-href=\"#/county_online/login\" ng-click=\"popover.hide()\">";
	popover_template += "			Login";
	popover_template += "			</a>";
	popover_template += "		</ion-list>";
	popover_template += "	</ion-content>";
	popover_template += "</ion-popover-view>";
	
	
	$scope.popover = $ionicPopover.fromTemplate(popover_template,{
		scope: $scope
	});
	
	$scope.closePopover = function(){
		$scope.popover.hide();
	};
	
	$scope.$on("$destroy", function(){
		$scope.popover.remove();
	});

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

// TODO: Controller => aboutCtrl
.controller("aboutCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window){
	
	$rootScope.page_id = "about" ;
	$rootScope.last_edit = "menu" ;
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

// TODO: Controller => business_listingsCtrl
.controller("business_listingsCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window){
	
	$rootScope.page_id = "business_listings" ;
	$rootScope.last_edit = "page" ;
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

// TODO: Controller => cartCtrl
.controller("cartCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window){
	
	$rootScope.page_id = "cart" ;
	$rootScope.last_edit = "page" ;
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

// TODO: Controller => homeCtrl
.controller("homeCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window){
	
	$rootScope.page_id = "home" ;
	$rootScope.last_edit = "page" ;
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

// TODO: Controller => jobsCtrl
.controller("jobsCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window){
	
	$rootScope.page_id = "jobs" ;
	$rootScope.last_edit = "page" ;
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

// TODO: Controller => loginCtrl
.controller("loginCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window){
	
	$rootScope.page_id = "login" ;
	$rootScope.last_edit = "page" ;
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

// TODO: Controller => newsCtrl
.controller("newsCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window){
	
	$rootScope.page_id = "news" ;
	$rootScope.last_edit = "page" ;
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

// TODO: Controller => tendersCtrl
.controller("tendersCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window){
	
	$rootScope.page_id = "tenders" ;
	$rootScope.last_edit = "page" ;
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})
