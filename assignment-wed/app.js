//namespace on server side (server side IFFE pattern)
//ALWAYS REFRESH SERVER!
module.exports = function(app){
  app.get("/api/user", findUserbyCredentials);
  app.get("/api/user", findUserbyId);
      //when receive this message (get the package, send back)


    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

    function findUserbyId (req,res) {
        var userId = req.params.userId;
        var user = userts.find(function(u){
            return u._id == userId;
        });
        res.json.send(user);
    }

    function findUserbyCredentials (req,res){
    var queryParams = req.query;
    var username = req.query.username;
    var password = req.query.password;
        //res.send(200); ok in server code translation
    var user = users.find function(user) {
                 return user.password
             }
             res.json.send(user);
        }//do this
  }
//sends back a promise = userService to login controller not an object
//if successful it will pass data in user




}