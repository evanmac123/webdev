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

        function register(user) {
            var randId = Math.floor(Math.random() * 999) + 1;
            newUser =  {_id:randId , password: user.password, email:user.email,  username: user.username,  firstName: user.firstName,  lastName: user.lastName};
            var user = UserService.createUser(newUser);
            if(user) {
                $location.url("/user/"+user._id);
            } else {
                vm.error = "User error";
            }
        }
    }
})();