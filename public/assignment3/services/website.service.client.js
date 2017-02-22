(function () {
    angular
        .module("WebAppMaker")
        .service("WebsiteService", WebsiteService);

    function WebsiteService() {
        var websites = [
            {"_id": "123", "name": "Facebook", update: new Date(), "developerId": "456", "description": "Lorem"},
            {"_id": "234", "name": "Tweeter", update: new Date(), "developerId": "456", "description": "Lorem"},
            {"_id": "456", "name": "Gizmodo", update: new Date(), "developerId": "456", "description": "Lorem"},
            {"_id": "567", "name": "Tic Tac Toe", update: new Date(), "developerId": "123", "description": "Lorem"},
            {"_id": "678", "name": "Checkers", update: new Date(), "developerId": "123", "description": "Lorem"},
            {"_id": "789", "name": "Chess", update: new Date(), "developerId": "234", "description": "Lorem"}
        ];
        //TODO: complete website crud functions
        var webapi = {
            "findAllWebsites" : findAllWebsites,
            "findWebsiteById": findWebsiteById,
            "createWebsite": createWebsite,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite
        };
        return webapi;
        //this.createWebsite = createWebsite;
        //this.findAllWebsites = findAllWebsites;
        //this.findWebsiteById = findWebsiteById;
        //this.updateWebsite = updateWebsite;
        //deleteWebsite(websiteId);

        function findWebsiteById(websiteId) {
            for (var w in websites) {
                if (websiteId === websites[w]._id) {
                    return angular.copy(websites[w]);
                }
            }
            return null;
        }

        function findAllWebsites(userId) {
            var sites = [];
            for (var w in websites) {
                if (userId === websites[w].developerId) {
                    sites.push(websites[w]);
                }
            }
            return sites;
        }

        function createWebsite(website) {
            websites.push(website);
            return website;
        }

        function deleteWebsite(websiteId){
            console.log(websites);
            for(var w in websites) {
                if( websites[w]._id == websiteId ) {
                    websites.splice(w, 1); //remove from list by taking instance
                    return null;
                }
            }
        }

        function updateWebsite(websiteId, newWebsite) {//comes from the model
            console.log(newWebsite);
            for (var w in websites) {
                if (websites[w]._id == websiteId) {
                    websites[w].name = newWebsite.name;
                    websites[w].description = newWebsite.description;
                    return websites[w];
                }
            }
        }
    }
})();