/**
 * An IIFE that initializes functions / services for widget objects.
 */
(function () {
  angular
  .module("WebAppMaker")
  .factory("WidgetService", widgetService);

  function widgetService() {

    var widgets = [
      {
        "_id": "123",
        "widgetType": "HEADER",
        "pageId": "321",
        "size": 2,
        "text": "GIZMODO"
      },
      {
        "_id": "234",
        "widgetType": "HEADER",
        "pageId": "321",
        "size": 4,
        "text": "Lorem ipsum"
      },
      {
        "_id": "345",
        "widgetType": "IMAGE",
        "pageId": "321",
        "width": "100%",
        "url": "http://lorempixel.com/400/200/"
      },
      {
        "_id": "456",
        "widgetType": "HTML",
        "pageId": "321",
        "text": "<p>Lorem ipsum</p>"
      },
      {
        "_id": "567",
        "widgetType": "HEADER",
        "pageId": "321",
        "size": 4,
        "text": "Lorem ipsum"
      },
      {
        "_id": "678",
        "widgetType": "YOUTUBE",
        "pageId": "321",
        "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E"
      },
      {
        "_id": "789",
        "widgetType": "HTML",
        "pageId": "321",
        "text": "<p>Lorem ipsum</p>"
      }
    ];

    /**
     * An API providing an interface for all functions contained in this IIFE
     */
    var api = {

      "createWidget": createWidget,
      "findWidgetsByPageId": findWidgetsByPageId,
      "findWidgetById": findWidgetById,
      "updateWidget": updateWidget,
      "deleteWidget": deleteWidget

    };

    return api;

    /**
     * Determine if the id is already taken by a page.
     */
    function uniqueId(widgetId) {
      for (var w in widgets) {
        if (widgets[w]._id == widgetId) {
          return false;
        }
      }
      return true;
    }

    /**
     * Create a new widget based on the provided parameters.
     */
    function createWidget(pageId, widget) {
      var widgetId = Math.random(); // random value between 0 and 1
      widgetId = widgetId * 999; // random rational between 0 and 999
      widgetId = Math.floor(widgetId);

      if (uniqueId(widgetId)) {
        widget.pageId = pageId;
        widget.widgetId = widgetId;
        widgets.push(widget);
      } else {
        createWidget(pageId, widget);
      }

      return widgetId;
    }

    /**
     * Find a website based on its associated user ID
     */
    function findWidgetsByPageId(pageId) {
      var array = [];
      for (var w in widgets) {
        if (widgets[w].pageId == pageId) {
          array.push(widgets[w]);
        }
      }
      return array;
    }

    /**
     * Update the widget matching the provided ID.
     */
    function updateWidget(widgetId) {
      var toUpdate = findWidgetById
    }

    /**
     * Find the user by their id, and replace them with the provided user
     */
    function findWidgetById(widgetId) {
      for (var w in widgets) {
        if (widgets[w]._id == widgetId) {
          return widgets[w];
        }
      }
    }

    /**
     * Delete the user who matches the provided user ID
     */
    function deleteWidget(widgetId) {
      for (var w in widgets) {
        if (widgets[w]._id == widgetId) {
          widgets.splice(w, 1);
        }
      }
    }
  }

})();