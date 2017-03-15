/**
 * To control widget-list events.
 */
(function () {
  angular
  .module("WebAppMaker")
  .controller("WidgetListController", widgetListController)
  .controller("sortingController",sortingController);

    function sortingController (){
        function linkFunction(scope, element) {

            $('.sortable').sortable({
                axis: 'y',
                start: function (event, ui) {
                    startIndex = ui.item.index();
                },
                stop: function (event, ui) {
                    endIndex = ui.item.index();
                    console.log([startIndex, endIndex]);
                }
            });
        }
    }




    function widgetListController($sce, $routeParams, WidgetService) {
      let vm = this;

    function init() {
      vm.userId = $routeParams['uid'];
      vm.websiteId = $routeParams['wid'];
      vm.pageId = $routeParams['pid'];
      WidgetService.findWidgetsByPageId(vm.pageId)
          .success(function(widgets){
            vm.widgets = widgets;
        });
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