(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($location,$routeParams, PageService){
        let vm = this;
        vm.userId = $routeParams.uid;
        vm.pageId = $routeParams.pid;

        // event handlers
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;


        function init() {
            vm.pages = PageService.findAllPagesByWebsite(vm.userId)
                 .success(function(pages) {
                vm.pages = pages;
            });

            vm.page = PageService.findPageById(vm.pageId)
                .success(function(page){
                    vm.page = page;
                });
        }
        init();


        function updatePage(newPage){
          PageService.updatePage(vm.pageId, newPage)
              .success(function(){
                  let locationback = "/user/"+userId+"/website/page";
                  $location.url(locationback);
              });

        }

        function deletePage(){
           PageService.deletePage(vm.pageId)
               .success(function(page){
                   let locationback = "/user/"+userId+"/website/page";
                   $location.url(locationback);
               });
        }
    }



})();