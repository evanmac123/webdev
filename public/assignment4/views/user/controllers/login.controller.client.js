(function () {
    angular
        .module('WebAppMaker')
        .controller('LoginController', LoginController);

    function LoginController($location, UserService) {// no scope uses
        var vm = this;//this is the variabble which sends data to the page and page interacts and sends back

        // event handlers
        vm.login = login;

        function init() {
        }
        init();

        function login(user) { //comes back with a promise because the
            var promise = UserService.findUserByCredentials(user.username, user.password);
            promise.success(function(user){
                if(user) {
                    $location.url("/user/"+user._id);
                } else {
                    vm.error = "User not found";
                }
            })
        }
    }
})();