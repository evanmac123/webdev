/**
 * Configuration to route Angular controllers to views.
 */
(function () {
  angular
  .module("WebAppMaker")
  .config(config);
  function config($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
          templateUrl: "views/user/template/login.view.client.html",
          controller: "LoginController",
          controllerAs: "model"
        }
    )
    .when("/login", {
      templateUrl: "views/user/template/login.view.client.html",
      controller: "LoginController",
      controllerAs: "model"
    })
    .when("/register", {
      templateUrl: "views/user/template/register.view.client.html",
      controller: "RegisterController",
      controllerAs: "model"
    })
    .when("/user/:uid", {
      templateUrl: "views/user/template/profile.view.client.html",
      controller: "ProfileController",
      controllerAs: "model"
    })
    .when("/user/:uid/website", {
      templateUrl: "views/website/template/website-list.view.client.html",
      controller: "WebsiteListController",
      controllerAs: "model"
    })
    .when("/user/:uid/website/new", {
      templateUrl: "views/website/template/website-new.view.client.html",
      controller: "WebsiteNewController",
      controllerAs: "model"
    })
    .when("/user/:uid/website/:wid", {
      templateUrl: "views/website/template/website-edit.view.client.html",
      controller: "WebsiteEditController",
      controllerAs: "model"
    })
    .when("/user/:uid/website/:wid/page", {
      templateUrl: "views/page/template/page-list.view.client.html",
      controller: "PageListController",
      controllerAs: "model"
    })
    .when("/user/:uid/website/:wid/page/new", {
      templateUrl: "views/page/template/page-new.view.client.html",
      controller: "PageNewController",
      controllerAs: "model"
    })
    .when("/user/:uid/website/:wid/page/:pid", {
      templateUrl: "views/page/template/page-edit.view.client.html",
      controller: "PageEditController",
      controllerAs: "model"
    })
    .when("/user/:uid/website/:wid/page/:pid/widget", {
      templateUrl: "views/widget/template/widget-list.view.client.html",
      controller: "WidgetListController",
      controllerAs: "model"
    })
    .when("/user/:uid/website/:wid/page/:pid/widget/new", {
      templateUrl: "views/widget/template/widget-chooser.view.client.html",
      controller: "WidgetNewController",
      controllerAs: "model"
    })
    .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", {
      templateUrl: "views/widget/template/widget-edit.view.client.html",
      controller: "WidgetEditController",
      controllerAs: "model"
    })
  }
})();