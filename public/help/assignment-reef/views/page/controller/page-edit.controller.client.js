/**
 * To control page editing events.
 */
(function () {

  angular
  .module("WebAppMaker")
  .controller("PageEditController", pageEditController);

  function pageEditController($routeParams, PageService) {
    var vm = this;

    function init() {
      vm.userId = $routeParams['uid'];
      vm.websiteId = $routeParams['wid'];
      vm.pageId = $routeParams['pid'];
      vm.page = PageService.findPageById(vm.pageId);
    }

    init();

  }
})();