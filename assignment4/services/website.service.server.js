module.exports = function (app) {
    app.get("/api/user", findAllWebsites);
    app.get("/api/user/:userId", findWebsiteById);
    app.put("/api/user/:userId", updateWebsite);
    app.delete("/api/user/:userId", deleteWebsite);
    app.post("/api/user/", createWebsite);

    //Create, read, update and delete

    function createWebsite(website) {
        websites.push(website);
        res.json(website);
    }

    function findWebsitesbyUser(website) {
        websites.push(website);
        res.json(website);
    }

    function findWebsiteById(websiteId) {
        for (var w in websites) {
            if (websiteId === websites[w]._id) {
                res.json(websites[w]);
            }
        }
    }

    function findAllWebsites(userId) {
        var sites = [];
        for (var w in websites) {
            if (userId === websites[w].developerId) {
                sites.push(websites[w]);
            }
        }
        res.json(sites);
    }

    function updateWebsite(websiteId, newWebsite) {//comes from the model
        console.log(newWebsite);
        for (var w in websites) {
            if (websites[w]._id == websiteId) {
                websites[w].name = newWebsite.name;
                websites[w].description = newWebsite.description;
                res.json(websites[w]);
        }
        }
    }

    function deleteWebsite(websiteId){
        for(var w in websites) {
            if( websites[w]._id == websiteId ) {
                websites.splice(w, 1); //remove from list by taking instance
                res.sendStatus( 204 );//sends status that update has been made but no response is needed
            }
        }
    }
}