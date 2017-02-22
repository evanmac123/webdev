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


    function userService() {
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];
        var api = { //list of Crud functions
            "findUserByCredentials": findUserByCredentials,
            "findUserById": findUserById,
            "updateUser": updateUser,
            "findUserByUsername":findUserByUsername,
            "createUser": createUser,
            "deleteUser": deleteUser
        };
        return api;

        function updateUser(userId, newUser) {//comes from the model
            for(var u in users) {
                if( users[u]._id == userId ) {
                    users[u].firstName = newUser.firstName;
                    users[u].lastName = newUser.lastName;
                    return users[u];
                }
            }

            console.log('About to return null');
            return null;
        }

        function createUser(user) {//comes from the model
            users.push(user); //places at the beginning of the list
            return user;
        }


        function deleteUser(userId) {//comes from the model
            for(var u in users) {
                if( users[u]._id == userId ) {
                    users.splice(u, 1); //remove from list by taking instance
                }
            }
            return null;
        }

        function findUserByUsername (username) {
            for(var u in users) { //for every user check
                if( users[u].username == username ) {//if matches return users that match
                    return users[u];
                }
            }
            return null;
        }

        function findUserById(userId) {
            for(var u in users) { //for every user check
                if( users[u]._id == userId ) {//if matches return users that match
                    return users[u];
                }
            }
            return null;
        }

        function findUserByCredentials(username, password) {
            for(var u in users) {
                if( users[u].username == username &&
                    users[u].password == password ) {
                    return users[u];
                }
            }
            return null;
        }
    }
})();//foreach