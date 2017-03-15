/**
 * To control widget editing events.
 */
(function () {

  angular
  .module("WebAppMaker")
  .controller("WidgetEditController", widgetEditController);

  function widgetEditController($location, $routeParams, WidgetService) {
    let vm = this;
      vm.updateWidget = updateWidget;
      vm.deleteWidget = deleteWidget;
    function init() {
        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['pid'];
        vm.widgetId = $routeParams['wgid'];
        WidgetService.findWidgetById(vm.widgetId)
            .success(function (widget) {
                vm.widget = widget;
            });

    }
    init();

    function updateWidget(widget) {
      WidgetService.updateWidget(vm.widgetId, widget)
          .success(function(){
              $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/"
                  + vm.pageId + "/widget/")
          });
    }

    function deleteWidget() {
      WidgetService.deleteWidget(vm.widgetId)
          .success(function(){
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/"
                + vm.pageId + "/widget/")
        });
    }
  }
})();