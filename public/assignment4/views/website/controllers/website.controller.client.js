(function () {
    angular
        .module('WebAppMaker')
        .controller('WebsiteListController', WebsiteListController)
        .controller("WebsiteEditController", WebsiteEditController)
        .controller("WebsiteNewController", WebsiteNewController);

    console.log(cat);
    function WebsiteListController($routeParams, WebsiteService) {
        let vm = this;

        vm.userId = $routeParams.uid;
        vm.websites = WebsiteService.findAllWebsites(vm.userId)
            .success(function (websites) {
                vm.websites = websites;
            });

        function init() {
            WebsiteService.findWebsiteById(vm.userId)
                .success(function (website) {
                    vm.website = website;
                });
        }
        init();
    }


    function WebsiteEditController($location,$routeParams, WebsiteService){
        let vm = this;

        // event handlers
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

        vm.websites = WebsiteService.findAllWebsites(userId);
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.website = WebsiteService.findWebsiteById(vm.websiteId);

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

    function WebsiteNewController($location, $routeParams, WebsiteService) {
            let vm = this;

            // event handlers
            vm.createWebsite = createWebsite;

            vm.userId = $routeParams.uid;
            vm.websiteId = $routeParams.wid;
            function init() {
                vm.website = WebsiteService.findWebsiteById(websiteId);
                WebsiteService.findWebsitesByUser( vm.userId )
                    .then( res => {
                    vm.websites = res.data;
            }, res => {
                    vm.errorRetrieving = true;
                });

            }

            function createWebsite(newWebsite) {
               const freshWebsite = {name: newWebsite.name, description: newWebsite.description, developerId: userId};
                WebsiteService.createWebsite(freshWebsite)
                    .success(function (website) {
                        $location.url("/user/" + vm.userId + "/website");
                    });
            }
        init();
        }
});
