(function () {
    angular
        .module("WebAppMaker")
        .service("WebsiteService", WebsiteService);

    function WebsiteService($http) {
        const parentRoute = '/api/user/';
        const apiRoute = '/api/website/';


        var webapi = {
            "updateWebsite": updateWebsite,
            "createWebsite": createWebsite,
            "findAllWebsitesByUser": findAllWebsitesByUser,
            "deleteWebsite": deleteWebsite,
            "findWebsitesById": findWebsitesById

        };
        return webapi;

        function findAllWebsitesByUser(userId) {
            return $http.get(parentRoute + userId + "/website");
        }

        function findWebsitesById(websiteId) {
            return $http.get(apiRoute + websiteId);
        }

        function createWebsite( userId, website ) {
            return $http({
                method: 'POST',
                url: parentRoute + userId + "/website",
                data: { website: website, }
            });
        }

        function updateWebsite( websiteId, website ) {
            return $http.put(apiRoute + websiteId, website);
        }

        function deleteWebsite(websiteId) {
            return $http.delete(apiRoute + websiteId);
        }


    }





})();