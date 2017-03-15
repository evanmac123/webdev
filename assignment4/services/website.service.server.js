module.exports = function (app) {
    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesByUser);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);
    app.get("/api/website/:websiteId", findWebsitesById);


        let websites = [
            {"_id": "123", "name": "Facebook", update: new Date(), "developerId": "456", "description": "Lorem"},
            {"_id": "234", "name": "Tweeter", update: new Date(), "developerId": "456", "description": "Lorem"},
            {"_id": "456", "name": "Gizmodo", update: new Date(), "developerId": "234", "description": "Lorem"},
            {"_id": "567", "name": "Tic T``ac Toe", update: new Date(), "deeloperId": "123", "description": "Lorem"},
            {"_id": "678", "name": "Checkers", update: new Date(), "developerId": "234", "description": "Lorem"},
            {"_id": "789", "name": "Chess", update: new Date(), "developerId": "234", "description": "Lorem"}
        ];
        //Create, read, update and delete

        function createWebsite(req, res) {
            let newWebsite = req.body.website;
            let userId = req.params.userId;

            let randId = Math.floor(Math.random() * 999) + 1;
            const freshWebsite = {_id: randId, name: newWebsite.name, description: newWebsite.description,  developerId: userId};
            websites.push(freshWebsite);
            res.json(freshWebsite);
        }

        function updateWebsite( req, res ) {
            let websiteId = req.params.websiteId;
            let newwebsite = req.body;
            for(let w in websites){
                if( websites[w]._id == websiteId ) {
                    websites[w].name = newwebsite.name;
                    websites[w].description = newwebsite.description;
                    res.json(websites[w]);
                    return;
                }
            }
        }

        function findAllWebsitesByUser(req, res) {
            let userId = req.params.userId;
            let sites = [];
            for (let w in websites) {
                if (userId === websites[w].developerId) {
                    sites.push(websites[w]);
                }
            }
            res.json(sites);
        }

        function findWebsitesById(req, res) {
            let websiteId = req.params.websiteId;
            let website = websites.find(site => {
                return ( site._id === websiteId );
            });

            res.json(website);
        }

        function deleteWebsite(req, res) {
            let websiteId = req.params.websiteId;
            for (w in websites) {
                if (websites[w]._id == websiteId) {
                    websites.splice(w, 1);
                    res.sendStatus(204);
                }
            }
        }
    }
