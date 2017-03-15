(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($location,$routeParams, WebsiteService){
        let vm = this;

        // event handlers
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

         vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.website = WebsiteService.findWebsitesById(vm.websiteId);

        function updateWebsite(newWebsite) {
            WebsiteService.updateWebsite(vm.websiteId, newWebsite)
                .success(function (website) {
                    $location.url("/user/" + vm.userId + "/website")
                });
        }

        function deleteWebsite() {
            WebsiteService.deleteWebsite(vm.websiteId)
                .success(function (website) {
                    $location.url("/user/" + vm.userId + "/website");

                });
        }
    }
})();