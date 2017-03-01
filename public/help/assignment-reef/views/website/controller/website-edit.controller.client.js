/**
 * Controller for handling website editing events.
 */
(function () {
  angular
  .module("WebAppMaker")
  .controller("WebsiteEditController", websiteEditController);

  // constructor
  function websiteEditController($location, $routeParams, WebsiteService) {
    var vm = this;

    // initialization
    function init() {
      vm.websiteId = $routeParams['wid'];
      vm.userId = $routeParams['uid'];
      vm.websiteName = "";
      vm.websiteDescription = "";
      vm.updateWebsite = updateWebsite;
      vm.deleteWebsite = deleteWebsite;
      vm.website = getWebsite(); // get the website being edited
    }

    init();

    /**
     * Update relevant fields based on the currently-active website.
     *
     * Effects:
     * - Website name is updated
     * - Website description is updated
     * */
    function getWebsite() {
      var site = WebsiteService.findWebsiteById(vm.websiteId);

      if (site) {
        vm.websiteName = angular.copy(site.name);
        vm.websiteDescription = angular.copy(site.description);
        return site;

      } else {
        throw "Cannot find the requested site with the provided site ID.";

      }
    }

    /** Update the desired website */
    function updateWebsite(website) {
      WebsiteService.updateWebsite(vm.websiteId, website);
      vm.message = "Successfully updated " + vm.websiteName;
    }

    /** Delete the desired website */
    function deleteWebsite() {
      WebsiteService.deleteWebsite(vm.websiteId);
      vm.message = "Successfully deleted " + vm.websiteName;
      $location.url("/user/" + vm.userId);
    }

  }
})();