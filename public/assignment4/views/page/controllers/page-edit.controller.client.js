(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($location,$routeParams, PageService){
        var userId = $routeParams.uid; //declaring needs from routeParams
        var pages = PageService.findAllPages(userId);
        var pageId = $routeParams.pid;
        var vm = this;

        // event handlers
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        vm.recentlyUpdated; //declaring
        vm.error; //declaring
        vm.pages = pages;
        vm.userId = userId;
        vm.pageId = pageId;
        vm.page = PageService.findPageById(pageId);

        function init() {

            vm.recentlyUpdated = false;
            vm.error = false;
            vm.userDeleted = false;
            vm.errorDeleted = false;
        }
        init();


        function updatePage(newPage){
            var page = PageService.updatePage(pageId, newPage);
            if(page !== null) {
                vm.recentlyUpdated = true; //init var
            } else {
                vm.error = true;
            }
        }

        function deletePage(){
            var pagegone = PageService.deletePage(pageId);
            //confused ask for help
            if(pagegone !== null) {
                vm.pageDeleted = true; //init var

            } else {
                vm.errorDeleted = true;
            }
            var locationback = "/user/"+userId+"/website/page";
            $location.url(locationback);
        }
    }



})();