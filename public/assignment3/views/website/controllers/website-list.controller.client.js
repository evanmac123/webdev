(function () {
    angular
        .module('WebAppMaker')
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService){
        var userId = $routeParams.uid;
        var websites = WebsiteService.findAllWebsites(userId);
        var vm = this;

        vm.websites = websites;
        vm.userId = userId;


        function init() {
            var website = WebsiteService.findUserById(userId);
            vm.user = user;
            vm.recentlyUpdated = false;
            vm.error = false;
            vm.userDeleted = false;
            vm.errorDeleted = false;
        }

    }
})();//foreach