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
            var promise = UserService.findUserById(userId);
            promise.success(function (user){
                vm.user = user; //collecting promise and attaching user to model
            });
        }
        init();

        function deleteUser() {
            UserService.deleteUser(userId)
                .success(function (user) {
                    if (user !== null) {
                        vm.userDeleted = true; //init var

                    } else {
                        vm.errorDeleted = true;
                    }
                    $location.url("/login");
                });
        }


        function updateUser(newUser) {
           UserService.updateUser(userId, newUser)//promise
                      .success(function(user){
                          if(user !== null) {
                              vm.recentlyUpdated = true; //init var
                          } else {
                              vm.error = true;
                          }
            });
        }
    }
})();