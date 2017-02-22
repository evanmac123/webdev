(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);


    function ProfileController($location,$routeParams, UserService) {
        var vm = this;

        // event handlers
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;

        var userId = $routeParams['uid'];

        function init() {
            var user = UserService.findUserById(userId);
            vm.user = user;
            vm.recentlyUpdated = false;
            vm.error = false;
            vm.userDeleted = false;
            vm.errorDeleted = false;
        }
        init();

        function deleteUser(){
            var usergone = UserService.deleteUser(userId);
             //confused ask for help
            if(usergone !== null) {
                vm.userDeleted = true; //init var

            } else {
                vm.errorDeleted = true;
            }
            $location.url("/#/login");
        }

        function updateUser(newUser) {
            var user = UserService.updateUser(userId, newUser);
            if(user !== null) {
                vm.recentlyUpdated = true; //init var
            } else {
                vm.error = true;
            }
        }
    }
})();