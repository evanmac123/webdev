(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", userService);

    function userService($http) {//native service $http (interact with server
        const apiRoute = '/api/user/';

        var api = {
            "findUserByCredentials": findUserByCredentials,
            "findUserById": findUserById,
            "updateUser": updateUser,
            "findUserByUsername": findUserByUsername,
            "createUser": createUser,
            "deleteUser": deleteUser
        };
        return api;


        function findUserByUsername(username) {
            return $http.get("/api/user?username="+username);
        }

        function updateUser( userId, user ) {
            return $http.put("/api/user/" + userId, user);
        }

        function createUser( user ) {
            return $http({
                method: 'POST',
                url: '/api/user/',
                data: { user: user }
            });
        }

        function deleteUser(userId) {
            return $http.delete("/api/user/"+userId);
        }

        function findUserById(userId) {
            return $http.get("/api/user/"+userId);
        }

        function findUserByCredentials(username, password) {
            return $http.get("/api/user?username="+username+"&password="+password);
        }
    }
})();