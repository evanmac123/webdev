(function() {//ng route only one view
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider, $locationProvider){
        $routeProvider
            .when('/login',{
                templateUrl: "views/user/login.view.client.html",
                controller:"LoginController",
                controllerAs: 'model'
            })
            .when('/register',{
                templateUrl: "views/user/register.view.client.html",
                controller:"RegisterController",
                controllerAs: 'model'
            })
            .when('/user/:uid',{
                templateUrl: "views/user/profile.view.client.html",
                controller:"ProfileController",
                controllerAs: 'model'
            })
            .when('/user/:uid/website',{
                templateUrl: "views/website/website-list.view.client.html",
             //   controller:"websiteController",
              //  controllerAs: 'model'
            })
            .when('/user/:uid/website/page',{
                templateUrl: "views/page/page-list.view.client.html"
            })
            .when('/user/:uid/website/page/new',{
                templateUrl: "views/page/page-new.view.client.html"
            })
            .when('/user/:uid/website/:pid',{
                templateUrl: "views/page/page-edit.view.client.html"
            })
            .when('/user/:uid/website/:pid/widget/new',{
                templateUrl: "views/widget/widget.view.client.html"
            })
            .when('/user/:uid/website/:pid/widget/new',{
                templateUrl: "views/widget/widget-chooser.view.client.html"
            })
            .when('/user/:uid/website/:pid/widget/:wgid',{
                templateUrl: "views/widget/widget-edit.view.client.html"
            })
    }

})();