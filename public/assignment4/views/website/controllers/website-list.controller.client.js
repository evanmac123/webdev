(function () {
    angular
        .module('WebAppMaker')
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        let vm = this;

        vm.userId = $routeParams.uid;

        function init() {
            WebsiteService.findAllWebsitesByUser(vm.userId)
                .success(function (websites) {
                    vm.websites = websites;
                });
        }
        init();
    }
})();//foreach