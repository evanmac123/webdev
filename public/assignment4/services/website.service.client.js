(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService() {
        const parentRoute = '/api/user/';
        const apiRoute = '/api/website/';


        var webapi = {
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "createWebsite": createWebsite,
            "findWebsitebyUser": findWebsitebyUser,
            "deleteWebsite": deleteWebsite
        };
        return webapi;

        function findWebsiteByUser(userId) {
            return $http.get(parentRoute + userId + "website");
        }

        function findAllWebsites(userId) {
            return $http.get(parentRoute + userId + "website");
        }

        function createWebsite( userId, website ) {
            return $http({
                method: 'POST',
                url: parentRoute + userId + "website",
                data: { website: website }
            });
        }

        function updateWebsite( websiteId, website ) {
            return $http.put(apiRoute + websiteId, website);
        }

        function deleteWebsite(websiteId) {
            return $http.delete(apiRoute + websiteId);
        }

        function findWebsiteById(websiteId) {
            return $http.get(apiRoute + websiteId);
        }


    }





})();