module.exports = function (app) {

     // require("./services/user.service.server")(app);
    require("./user/user.schema.server")(app);
    require("./user/user.model.server")(app);

}