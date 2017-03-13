(function () {
    angular
        .module('WebAppMaker')
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService){
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams[':wid'];

        function init() {
            console.log($routeParams);
            vm.pages = PageService.findAllPages(vm.userId);
        }
        init();
    }
})();//foreach