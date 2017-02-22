module.exports = function(app)
{
    app.get("/api/test", findAllMessages);
    app.post("/api/test", createMessage);
    app.delete("/api/test/:id", deleteMessage);

    var connectionString = 'mongodb://127.0.0.1:27017/test';

    if(process.env.MLAB_USERNAME_WEBDEV) {
        var username = "evantest";//process.env.MLAB_USERNAME_WEBDEV;
        var password = "evantest"; //process.env.MLAB_PASSWORD_WEBDEV;

        connectionString = 'mongodb://'+
            username + ':' +
            password +
            '@ds147975.mlab.com:47975/mceldowney_e_web_dev';
    }

    console.log(connectionString);

    var mongoose = require("mongoose");  // npm install mongoose --save
    mongoose.connect(connectionString);

    var TestSchema = mongoose.Schema({
        message: String
    }, {collection: 'messages'});

    var TestModel = mongoose.model("TestModel", TestSchema);

    function findAllMessages(req, res) {
        TestModel
            .find() // select * from messages -- where 
            .then(
                function(tests) {
                    res.json(tests);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function createMessage(req, res) {
        TestModel
            .create(req.body)
            .then(
                function(test) {
                    res.json(test);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function deleteMessage(req, res) {
        TestModel
            .remove({_id: req.params.id})
            .then(
                function(result) {
                    res.json(result);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }
};