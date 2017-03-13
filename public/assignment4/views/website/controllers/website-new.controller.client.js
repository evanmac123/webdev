(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($location, $routeParams, WebsiteService) {
        let vm = this;

        // event handlers
        vm.createWebsite = createWebsite;

        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        function init() {

        }

        function createWebsite(newWebsite) {
             WebsiteService.createWebsite(vm.userId, newWebsite)
                .success(function (website) {
                    $location.url("/user/" + vm.userId + "/website");
                });
        }
        init();
    }
})();