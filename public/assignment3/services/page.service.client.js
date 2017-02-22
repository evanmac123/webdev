(function () {
    angular
        .module("WebAppMaker")
        .service("PageService", PageService);

    function PageService() {
        var pages = [
            { "_id": "8382","developerId": "234", "name": "Post 1", "websiteId": "234", "description": "Lorem" },
            { "_id": "3245","developerId": "234",  "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "2342","developerId": "234",  "name": "Post 3", "websiteId": "456", "description": "Lorem" },
            { "_id": "3453","developerId": "234",  "name": "Post 4", "websiteId": "456", "description": "Lorem" },
            { "_id": "4353","developerId": "234",  "name": "Post 5", "websiteId": "234", "description": "Lorem" },
            { "_id": "3455","developerId": "234",  "name": "Post 6", "websiteId": "456", "description": "Lorem" }
        ];
        //TODO: complete page crud functions
        var pageapi = {
            "findAllPages" : findAllPages,
            "findPageById": findPageById,
            "createPage": createPage,
            "updatePage": updatePage,
            "deletePage": deletePage
        };
        return pageapi;
        //this.createPage = createPage;
        //this.findAllPages = findAllPages;
        //this.findPageById = findPageById;
        //this.updatePage = updatePage;
        //deletePage(pageId);

        function findPageById(pageId) {
            for (var w in pages) {
                if (pageId === pages[w]._id) {
                    return angular.copy(pages[w]);
                }
            }
            return null;
        }

        function findAllPages(userId) {
            var sites = [];
            for (var w in pages) {
                if (userId === pages[w].developerId) {
                    sites.push(pages[w]);
                }
            }
            return sites;
        }

        function createPage(page) {
            pages.push(page);
            return page;
        }

        function deletePage(pageId){
            console.log(pages);
            for(var p in pages) {
                if( pages[p]._id == pageId ) {
                    pages.splice(p, 1); //remove from list by taking instance
                }
            }
        }

        function updatePage(pageId, newPage) {//comes from the model
            console.log(newPage);
            for (var p in pages) {
                if (pages[p]._id == pageId) {
                    pages[p].name = newPage.name;
                    pages[p].description = newPage.description;
                    return pages[p];
                }
            }
        }
    }
})();