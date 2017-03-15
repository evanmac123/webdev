(function(){
   angular
       .module("WebAppMaker", [])
       .directive("widgetSorting",widgetSorting)
       .controller("sortingController",sortingController);


       function widgetSorting() {
           function linkFunction(scope, element) {
               element.sortable();
           }
           return {
               link: linkFunction
           }
       }




});