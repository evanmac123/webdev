/**
 * Controller for handling website list events.
 */
(function () {
  angular
  .module("WebAppMaker")
  .controller("WebsiteListController", websiteListController);

  // constructor
  function websiteListController($routeParams, WebsiteService) {
    var vm = this;
    vm.userId = $routeParams['uid'];

    // initialization
    function init() {
      vm.websites = WebsiteService.findWebsiteByUser(vm.userId);
    }

    init();

    // event handlers
  }
})();