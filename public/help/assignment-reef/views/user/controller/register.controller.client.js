/**
 * Controller to handle registration evenets.
 */
(function () {
  angular
  .module("WebAppMaker")
  .controller("RegisterController", registerController);

  // Constructor
  function registerController($location, UserService) {
    var vm = this; // aliasing this controller as view-model

    function init() {

      // Event handlers
      vm.register = register;
      vm.userId = "";
    }

    init();

    /** To register a user based on the provided credentials */
    function register(user) {

      if (user.password == user.passwordVerify) {
        vm.userId = UserService.createUser(user.username, user.password, "",
            "");
      }

      if (vm.userId) {
        $location.url("/user/" + vm.userId);
        return vm.userId;

      } else {
        vm.error = "Registration failed. Try again.";
      }
    }
  }

})();