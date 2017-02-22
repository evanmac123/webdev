/**
 * An IIFE that initializes functions / services for page objects.
 */
(function () {
  angular
  .module("WebAppMaker")
  .factory("PageService", pageService);

  function pageService() {

    var pages = [
      {
        "_id": "321",
        "name": "Post 1",
        "websiteId": "456",
        "description": "Lorem"
      },
      {
        "_id": "432",
        "name": "Post 2",
        "websiteId": "456",
        "description": "Lorem"
      },
      {
        "_id": "543",
        "name": "Post 3",
        "websiteId": "456",
        "description": "Lorem"
      }
    ];

    /**
     * An API providing an interface for all functions contained in this IIFE
     */
    var api = {

      "createPage": createPage,
      "findPagesByWebsiteId": findPagesByWebsiteId,
      "findPageById": findPageById,
      "updatePage": updatePage,
      "deletePage": deletePage

    };

    return api;

    /**
     * Determine if the id is already taken by a page.
     */
    function uniqueId(pageId) {
      var pages = [];
      for (var p in pages) {

        if (pages[p]._id == pageId) {
          return false;
        }
      }

      return true;
    }

    /**
     * Adds the page parameter instance to the local pages array. The new
     * page's websiteId is set to the websiteId parameter
     */
    function createPage(websiteId, page) {
      var pageId = Math.random(); // random value between 0 and 1
      pageId = pageId * 999; // random rational between 0 and 999
      pageId = Math.floor(pageId);

      if (uniqueId(pageId)) {
        var toAdd = {
          "_id": pageId,
          "name": page.name,
          "websiteId": websiteId,
          "description": page.description
        }

      } else {
        createPage(websiteId, page);
      }

      pages.push(toAdd); // add updated page to array
      return true;
    }

    /**
     * Find a website based on its associated user ID
     */
    function findPagesByWebsiteId(websiteId) {
      var result = [];
      for (var p in pages) {
        if (pages[p].websiteId == websiteId) {
          result.push(pages[p]);
        }
      }
      return angular.copy(result);
    }

    /** Find a page based on its ID. */
    function findPageById(pageId) {
      for (var p in pages) {
        if (pageId == pages[p]._id) {
          return angular.copy(pages[p]);
        }
      }
      return null;
    }

    /**
     * Find the user by their id, and replace them with the provided user
     */
    function updatePage(pageId, page) {
      // update page in local pages array whose _id matches pageId
    }

    /**
     * Delete the user who matches the provided user ID
     */
    function deletePage(pageId) {
      // delte website in local pages array whose _id matches websiteID
    }
  }
})();