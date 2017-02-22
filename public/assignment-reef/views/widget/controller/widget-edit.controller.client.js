/**
 * To control widget editing events.
 */
(function () {

  angular
  .module("WebAppMaker")
  .controller("WidgetEditController", widgetEditController);

  function widgetEditController($location, $routeParams, WidgetService) {
    var vm = this;

    function init() {
      vm.userId = $routeParams['uid'];
      vm.websiteId = $routeParams['wid'];
      vm.pageId = $routeParams['pid'];
      vm.widgetId = $routeParams['wgid'];
      vm.widget = WidgetService.findWidgetById(vm.widgetId);
      vm.updateWidget = updateWidget;
      vm.deleteWidget = deleteWidget;
    }

    init();

    function updateWidget(widget) {
      WidgetService.updateWidget(vm.widgetId, widget);
      $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/"
          + vm.pageId + "/widget/");
    }

    function deleteWidget(widget) {
      WidgetService.deleteWidget(vm.widgetId);
      $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/"
          + vm.pageId + "/widget/");
    }

  }
})();