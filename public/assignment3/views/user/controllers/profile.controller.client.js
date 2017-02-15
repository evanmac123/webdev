(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);


    function ProfileController($routeParams, UserService) {
        var vm = this;
        vm.recentlyUpdated; //declaring
        // event handlers
        vm.updateUser = updateUser;
        // vm.deleteUser = deleteUsers;

        var userId = $routeParams['uid'];

      //  var userlist = UserService.users;

      //  vm.list = userlist;

        function init() {
            var user = UserService.findUserById(userId);
            vm.user = user;
            vm.recentlyUpdated = false;
        }
        init();

        function updateUser(newUser) {
            var user = UserService.updateUser(userId, newUser);
            console.log(user);
            if(user !== null) {
                vm.recentlyUpdated = true; //init var
                console.log("gothere");
            } else {
                vm.error = "Unable to update user";
            }
        }
    }
})();