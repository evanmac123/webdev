/**
 * To control "new widget" events.
 */
(function () {

  angular
  .module("WebAppMaker")
  .controller("WidgetNewController", widgetController);

  function widgetController($location, $routeParams, WidgetService) {
    var vm = this;

    function init() {
      vm.userId = $routeParams['uid'];
      vm.websiteId = $routeParams['wid'];
      vm.pageId = $routeParams['pid'];
      vm.widgetTypes = [
        "Header", "Image", "YouTube"
      ];
      vm.createWidget = createWidget;
    }

    init();

    function createWidget(type) {

      var toCreate;

      switch (type) {

        case "Header":
          toCreate = {
            "_id": "",
            "widgetType": "HEADER",
            "pageId": "",
            "size": 1,
            "text": ""
          };
          break;

        case "Image":
          toCreate = {
            "_id": "",
            "widgetType": "IMAGE",
            "pageId": "",
            "width": "100%",
            "url": "http://lorempixel.com/400/200/"
          };
          break;

        case "YouTube":
          toCreate = {
            "_id": "678",
            "widgetType": "YOUTUBE",
            "pageId": "321",
            "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E"
          };
          break;

        default:
          throw "Unsupported widget";
      }

      var widgetId = WidgetService.createWidget(vm.pageId,
          toCreate);

      $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/"
          + vm.pageId + "/widget/" + widgetId);
    }
  }
})();