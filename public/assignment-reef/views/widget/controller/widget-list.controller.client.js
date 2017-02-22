/**
 * To control widget-list events.
 */
(function () {

  angular
  .module("WebAppMaker")
  .controller("WidgetListController", widgetListController);

  function widgetListController($sce, $routeParams, WidgetService) {
    var vm = this;

    function init() {
      vm.userId = $routeParams['uid'];
      vm.websiteId = $routeParams['wid'];
      vm.pageId = $routeParams['pid'];
      vm.widgets = WidgetService.findWidgetsByPageId(vm.pageId);
      vm.doYouTrustUrl = doYouTrustUrl;
      vm.supported = supported;
    }

    function supported(widget) {
      return widget.widgetType != "HTML";
    }

    function doYouTrustUrl(url) {
      var baseUrl = "https://www.youtube.com/embed/";
      var urlParts = url.split('/');
      baseUrl += urlParts[urlParts.length - 1];
      return $sce.trustAsResourceUrl(baseUrl);
    }

    init();
  }
})();