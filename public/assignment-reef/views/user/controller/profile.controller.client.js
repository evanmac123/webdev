/**
 * Controller for profile events and data-flow.
 */
(function () {
  angular
  .module("WebAppMaker")
  .controller("ProfileController", profileController);

  // constructor
  function profileController($routeParams, $location, UserService) {
    var vm = this; // creating a view-model
    vm.userId = $routeParams['uid']; // get user-id from route parameters

    // initialization
    function init() {
      vm.user = UserService.findUserById(vm.userId);

      // event handlers
      vm.showWebsites = showWebsites;
    }

    init();

    // functions

    /** Navigate to the websites page for the current user */
    function showWebsites(user) {
      $location.url("/user/" + vm.userId + "/website");
    }
  }
})();