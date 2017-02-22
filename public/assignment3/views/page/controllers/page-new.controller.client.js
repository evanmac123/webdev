(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location,$routeParams, PageService){
        var userId = $routeParams.uid; //declaring needs from routeParams
        var pages = PageService.findAllPages(userId);
        var pageId = $routeParams.wid;
        var vm = this;

        // event handlers
        vm.createPage = createPage;

        vm.pages = pages;
        vm.userId = userId;
        vm.pageId = pageId;
        vm.page = PageService.findPageById(pageId);

        function init() {
        }
        init();

        function createPage(newPage) {
            freshPage =  {name: newPage.name, description: newPage.description, developerId: userId };
            var page = PageService.createPage(freshPage);
            if(page !== null) {
                vm.recentlyUpdated = true; //init var
            } else {
                vm.error = true;
            }
            var locationback = "/user/"+userId+"/website/page";
            $location.url(locationback);
        }




    }
})();