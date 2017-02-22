/**
 * To control page list events.
 */
(function () {
  angular
  .module("WebAppMaker")
  .controller("PageListController", pageListController);

  function pageListController($routeParams, PageService) {
    var vm = this;

    function init() {
      vm.userId = $routeParams['uid'];
      vm.websiteId = $routeParams['wid'];
      vm.pages = PageService.findPagesByWebsiteId(vm.websiteId);
    }

    init();
  }

})();