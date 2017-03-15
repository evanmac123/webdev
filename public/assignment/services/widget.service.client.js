/**
 * An IIFE that initializes functions / services for widget objects.
 */
(function () {
  angular
  .module("WebAppMaker")
  .factory("WidgetService", widgetService);

  function widgetService($http) {
      const parentRoute = '/api/page/';
      const apiRoute = '/api/widget/';

      /**
       * An API providing an interface for all functions contained in this IIFE
       */
      let api = {
          "createWidget": createWidget,
          "findWidgetsByPageId": findWidgetsByPageId,
          "findWidgetById": findWidgetById,
          "updateWidget": updateWidget,
          "deleteWidget": deleteWidget
      };

      return api;


      /**
       * Create a new widget based on the provided parameters.
       */
      function createWidget(pageId, widgetType) {
          return $http({
              method: 'POST',
              url: parentRoute + pageId + "/widget",
              data: {widgetType: widgetType,}
          });
      }
      /**
       * Find a website based on its associated widget ID
       */
      function findWidgetsByPageId(pageId) {
          return $http.get(parentRoute + pageId + "/widget");
      }

      /**
       * Update the widget matching the provided ID.
       */
      function updateWidget(widgetId, widget) {
          return $http.put(apiRoute + widgetId, widget)

      }

      /**
       * Find the widget by their id, and replace them with the provided widget
       */
      function findWidgetById(widgetId) {
          return $http.get(apiRoute + widgetId);
      }

      /**
       * Delete the widget who matches the provided widget ID
       */
      function deleteWidget(widgetId) {
          return $http.delete(apiRoute + widgetId);
      }
  }
})();