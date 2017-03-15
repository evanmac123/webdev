/**
 * To control "new widget" events.
 */
(function () {

  angular
  .module("WebAppMaker")
  .controller("WidgetNewController", widgetController);

  function widgetController($location, $routeParams, WidgetService) {
    let vm = this;
      vm.createWidget = createWidget;
    function init() {
      vm.userId = $routeParams['uid'];
      vm.websiteId = $routeParams['wid'];
      vm.pageId = $routeParams['pid'];
      vm.widgetTypes = [
        "Header", "Image", "YouTube"
      ];
    }

    init();

    function createWidget(widgetType){
        WidgetService.createWidget(vm.pageId, widgetType)
            .success(function(widgetId){
              let locationback =  "/user/" + vm.userId + "/website/" + vm.websiteId + "/page/"
                    + vm.pageId + "/widget/" + widgetId;
              $location.url(locationback);
            });

    }



  }
})();