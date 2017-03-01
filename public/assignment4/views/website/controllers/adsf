(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($location,$routeParams, WebsiteService){
        var userId = $routeParams.uid; //declaring needs from routeParams
        var websites = WebsiteService.findAllWebsites(userId);
        var websiteId = $routeParams.wid;
        var vm = this;

        // event handlers
        vm. updateWebsite = updateWebsite;
        vm. deleteWebsite = deleteWebsite;

        vm.websites = websites;
        vm.userId = userId;
        vm.websiteId = websiteId;
        vm.website = WebsiteService.findWebsiteById(websiteId);

        function init() {

            vm.recentlyUpdated = false;
            vm.error = false;
            vm.userDeleted = false;
            vm.errorDeleted = false;
        }
        init();


        function updateWebsite(newWebsite){
            var website = WebsiteService.updateWebsite(websiteId, newWebsite);
            if(website !== null) {
                vm.recentlyUpdated = true; //init var
            } else {
                vm.error = true;
            }
        }

        function deleteWebsite(){
            var websitegone = WebsiteService.deleteWebsite(websiteId);
            //confused ask for help
            if(websitegone !== null) {
                vm.websiteDeleted = true; //init var
            } else {
                vm.errorDeleted = true;
            }
            var locationback = "/user/"+userId+"/website";
            $location.url(locationback);
        }
    }



})();