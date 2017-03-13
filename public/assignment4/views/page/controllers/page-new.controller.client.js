(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location,$routeParams, PageService){
        let vm = this;
        // event handlers
        vm.createPage = createPage;


        function init() {
            vm.websiteId  = $routeParams.wid;
            vm.userId = $routeParams.uid; //declaring needs from routeParams
            vm.pages = PageService.findAllPagesByWebsite(vm.websiteId);

        }
        init();

        function createPage(newPage) {
            console.log(newPage);
             PageService.createPage(vm.websiteId, newPage)
                .success(function(page){
                     $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
                });
        }




    }
})();