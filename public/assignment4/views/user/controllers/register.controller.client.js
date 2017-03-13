(function () {
    angular
        .module('WebAppMaker')
        .controller('RegisterController', RegisterController);

    function RegisterController($location, UserService) {// no scope uses
        var vm = this;//this is the variable which sends data to the page and page interacts and sends back

        // event handlers
        vm.register = register;  //refers to this click other way to say scope

        function init() {
        }
        init();

        function register(newUser) {
             UserService.createUser(newUser)
                .success(function(user){
                    console.log(user);
            if(user) {
                $location.url("/user/"+user._id);
            } else {
                vm.error = "User error";
            }
        })
        }
    }
})();