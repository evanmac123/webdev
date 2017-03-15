module.exports = function (app) {
    app.get("/api/user", findUser);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);
    app.post("/api/user/", createUser);

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];
    console.log("from user service");
    function updateUser(req, res) {
        var userId = req.params.userId;
        var newUser = req.body.user;
         for(var u in users){if( users[u]._id == userId ) {
             users[u].firstName = newUser.firstName;
             users[u].lastName = newUser.lastName;
             res.json(users[u]);
             return;
             }
         }
    }

    function createUser(req, res) {
        var newUser = req.body.user;
        var randId = Math.floor(Math.random() * 999) + 1;
        var user =  {_id:randId , password: newUser.password, email:newUser.email,  username: newUser.username,  firstName: newUser.firstName,  lastName: newUser.lastName};
        users.push(user);
        res.json(user);
    }


    function deleteUser(req,res){
        var userId = req.params.userId;
         users = users.filter( user => {
                return ( user._id !== userId );
        });
        res.sendStatus( 204 );//sends status that update has been made but no response is needed

    }

    function findUserById(req, res) {
        var userId = req.params.userId;
        var user = users.find(function (u) {
            return u._id == userId;
        });
        res.json(user);
    }

    function findUser(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        if(username && password) {
            findUserByCredentials(req, res);
        } else if(username) {
            findUserByUsername(req, res);
        }
    }

    function findUserByUsername(req, res) {
        var user = users.find(function (u) {
            return u.username == req.query.username;
        });
       // console.log(user);
        if(user) {
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    }

    function findUserByCredentials(req, res){
        var username = req.query.username;
        var password = req.query.password;
        var user = users.find(function(user){
           return user.password == password && user.username == username;
        });
        res.json(user);
    }
}