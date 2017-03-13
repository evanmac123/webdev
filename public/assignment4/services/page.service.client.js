(function () {
    angular
        .module("WebAppMaker")
        .service("PageService", PageService);

    function PageService($http) {
        let apiRoute = "/api/page/";
        let parentRoute= "/api/website/";

        //TODO: complete page crud functions
        let pageapi = {
            "findAllPagesByWebsite" : findAllPagesByWebsite,
            "findPageById": findPageById,
            "createPage": createPage,
            "updatePage": updatePage,
            "deletePage": deletePage
        };
        return pageapi;

        function findAllPagesByWebsite(websiteId) {
            return $http.get(parentRoute + +websiteId+"/page");
        }

        function createPage(websiteId, newPage, user) {
            return $http({
                method: 'POST',
                url: parentRoute + websiteId + "/page",
                data: { newPage: newPage,
                        user:user
                }
            });
        }

        function findPageById(pageId) {
            return $http.get(apiRoute+pageId);
        }

        function deletePage(pageId){
            return $http.get(apiRoute+pageId);
        }

        function updatePage(pageId, newPage) {//comes from the model
            return $http.put(apiRoute+pageId);
        }
    }
})();