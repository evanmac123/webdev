(function () { //namespace for creates local variables
    angular
        .module("WebAppMaker")
        .factory("UserService", userService);
        //factory called User Service registers User Service
        //services are constructor functions
        //use this to refer to objects
        //factories are functions that get called
        //can be treated as a service
        //services are one offs that can be thrown and used freely
   
    function userService($http){//$http communicate across the wire to somewhere else
       //recieve data from server
       //login data
       //maps originally to the public directive
        //not static but returns json object = must treat dynamically

        $http.get("/api/user?username=username&password=password");

        }

    

})();//foreach