/**
 * Controller for handling "new website" events.
 */
(function () {

  angular
  .module("WebAppMaker")
  .controller("WebsiteNewController", websiteNewController);

  // constructor
  function websiteNewController($routeParams, WebsiteService) {
    var vm = this;

    // initialization
    function init() {
      vm.userId = $routeParams['uid'];
      vm.websites = WebsiteService.findWebsiteByUser(vm.userId);
      vm.createWebsite = createWebsite;
      vm.clearMessage = clearMessage;
    }

    init();

    /**
     * Create a website.
     */
    function createWebsite(website) {
      if (WebsiteService.createWebsite(vm.userId, website)) {
        vm.message = "Success!";
      }
    }

    /** Remove the message from this view-model */
    function clearMessage() {
      vm.message = null;
    }
  }
})();