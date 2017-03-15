module.exports = function(){
   // var connectionString = 'mongodb://127.0.0.1:27017/test';
    var mongoose = require("mongoose");  // npm install mongoose --save
    mongoose.connect(connectionString);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
    });
};


/*
(function() {
    angular
        .module("TestApp", [])
        .controller("TestController", TestController)
        .filter('reverse', function() {
            return function(items) {
                return items.slice().reverse();
            };
        });

    function TestController($http) {
        var vm = this;
        vm.createMessage = createMessage;
        vm.deleteMessage = deleteMessage;

        function iniat() {
            findAllMessages();
        }
        init();

        function createMessage(message) {
            vm.message = "";
            var obj = {
                message: message
            };
            $http.post("/api/test", obj)
                .then(
                    findAllMessages,
                    function(err) {
                        vm.error = err;
                    }
                );
        }

        function deleteMessage(message) {
            $http.delete("/api/test/" + message._id)
                .then(
                    findAllMessages,
                    function(err) {
                        vm.error = err;
                    }
                );
        }

        function findAllMessages() {
            $http.get("/api/test")
                .then(
                    function(response) {
                        vm.messages = response.data;
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }
    }
})();*/
