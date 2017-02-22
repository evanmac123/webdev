/**
 * To control "new page" events.
 */
(function () {

  angular
  .module("WebAppMaker")
  .controller("PageNewController", pageNewController);

  function pageNewController($routeParams, $location, PageService) {
    var vm = this;

    function init() {
      vm.userId = $routeParams['uid'];
      vm.websiteId = $routeParams['wid'];

      // event handlers
      vm.createPage = createPage;
    }

    init();

    /** Create a page based on the provided parameters */
    function createPage(pageName, pageDescription) {
      var page = {
        "name": pageName,
        "description": pageDescription,
        "websiteId": ""
      };

      if (PageService.createPage(vm.websiteId, page)) {
        vm.message = "Successfully created page.";
        $location.url(
            "/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
      }
    }
  }
})();