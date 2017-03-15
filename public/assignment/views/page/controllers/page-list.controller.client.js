(function () {
    angular
        .module('WebAppMaker')
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService){
        let vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams['wid'];

        function init() {
            PageService.findAllPagesByWebsite(vm.websiteId)
                .success(function(pages){
                    vm.pages = pages;
                });
        }
        init();
    }
})();//foreach