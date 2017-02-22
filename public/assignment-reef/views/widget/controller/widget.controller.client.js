/**
 * To control widget events.
 */
(function () {

  angular
  .module("WebAppMaker")
  .controller("WidgetController", widgetController);

  function widgetController($routeParams, WidgetService) {
    var vm = this;

    function init() {
      vm.userId = $routeParams['uid'];
      vm.websiteId = $routeParams['wid'];
      vm.pageId = $routeParams['pid'];
      vm.widgetTypes = [
          "Header", "Image", "YouTube"
      ]
    }

    init();

  }
})();