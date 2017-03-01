/**
 * An IIFE that initializes functions / services for website objects.
 */
(function () {
  angular
  .module("WebAppMaker")
  .factory("WebsiteService", websiteService);

  function websiteService() {

    var websites = [
      {
        "_id": "123",
        "name": "Facebook",
        "developerId": "456",
        "description": "Lorem"
      },
      {
        "_id": "234",
        "name": "Tweeter",
        "developerId": "456",
        "description": "Lorem"
      },
      {
        "_id": "456",
        "name": "Gizmodo",
        "developerId": "456",
        "description": "Lorem"
      },
      {
        "_id": "567",
        "name": "Tic Tac Toe",
        "developerId": "123",
        "description": "Lorem"
      },
      {
        "_id": "678",
        "name": "Checkers",
        "developerId": "123",
        "description": "Lorem"
      },
      {
        "_id": "789",
        "name": "Chess",
        "developerId": "234",
        "description": "Lorem"
      }
    ];

    /**
     * An API providing an interface for all functions contained in this IIFE
     */
    var api = {

      "createWebsite": createWebsite,
      "findWebsiteByUser": findWebsiteByUser,
      "findWebsiteById": findWebsiteById,
      "updateWebsite": updateWebsite,
      "deleteWebsite": deleteWebsite

    };

    return api;

    /**
     * Determine if the id is already taken by a website.
     */
    function uniqueId(websiteId) {
      var sites = [];
      for (var s in sites) {

        if (sites[s]._id == websiteId) {
          return false;
        }
      }

      return true;
    }

    /**
     * Assign this user's id to the given website's "developerId", and create
     * the website.
     */
    function createWebsite(userId, website) {
      var websiteId = Math.random(); // random value between 0 and 1
      websiteId = websiteId * 999; // random rational between 0 and 999
      websiteId = Math.floor(websiteId); // some three-digit value¬

      if (uniqueId(websiteId)) {

        var toAdd = {
          "_id": websiteId,
          "name": website.name,
          "developerId": websiteId,
          "description": website.description
        };
      }

      websites.push(toAdd); // add updated page to array
      return true;
    }

    /**
     * Find website(s) associated with the relevant user, based on id
     */
    function findWebsiteByUser(userId) {
      var sites = [];
      for (var w in websites) {
        if (websites[w].developerId == userId) {
          sites.push(websites[w]);
        }
      }
      return sites;
    }

    /**
     * Find a user by her credentials
     * @returns {*}
     */
    function findWebsiteById(websiteID) {
      for (var w in websites) {
        if (websites[w]._id == websiteID) {
          return websites[w];
        }
      }
      return null;
    }

    /**
     * Find the user by their id, and replace them with the provided user
     */
    function updateWebsite(websiteId, website) {
      // update website in local websites array whose _id matches websiteId
    }

    /**
     * Delete the user who matches the provided user ID
     */
    function deleteWebsite(websiteId) {
      for (var w in websites) {
        if (websites[w]._id == websiteId) {
          websites = websites.splice(w, 1);
          return;
        }
      }
    }
  }

})();