/**
 * Controller to contain login logic.
 */
(function () {
  angular
  .module("WebAppMaker")
  .controller("LoginController", loginController);

  /** Constructor for the login controller */
  function loginController($location, UserService) {
    var vm = this;

    // event handlers
    vm.login = login;

    function init() {
      // nothing here, yet
    }

    init();

    /** to log a user into their profile */
    function login(user) {
      var usr = UserService.findUserByCredentials(user.username, user.password);

      if (usr) {
        $location.url("/user/" + usr._id);
      } else {
        vm.error = "User not found";
      }
    }
  }
})();