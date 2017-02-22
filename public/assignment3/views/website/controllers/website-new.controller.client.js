(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($location,$routeParams, WebsiteService){
        var userId = $routeParams.uid; //declaring needs from routeParams
        var websites = WebsiteService.findAllWebsites(userId);
        var websiteId = $routeParams.wid;
        var vm = this;

        // event handlers
        vm.createWebsite = createWebsite;

        vm.websites = websites;
        vm.userId = userId;
        vm.websiteId = websiteId;
        vm.website = WebsiteService.findWebsiteById(websiteId);

        function init() {
        }
        init();

        function createWebsite(newWebsite) {
            freshWebsite =  {name: newWebsite.name, description: newWebsite.description, developerId: userId };
            var website = WebsiteService.createWebsite(freshWebsite);
            if(website !== null) {
                console.log("cat");
                vm.recentlyUpdated = true; //init var
            } else {
                vm.error = true;
            }
            var locationback = "/user/"+userId+"/website";
            $location.url(locationback);
        }




    }
})();