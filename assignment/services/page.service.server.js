module.exports = function (app) {
    app.get("/api/website/:websiteId/page", findAllPagesByWebsite);
    app.post("/api/website/:websiteId/page", createPage);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);
    app.get("/api/page/:pageId", findPageById);


    let pages = [
        {"_id": "234", "developerId": "234", "name": "Post 1", "websiteId": "234", "description": "Lorem"},
        {"_id": "443", "developerId": "234", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
        {"_id": "2342", "developerId": "234", "name": "Post 3", "websiteId": "456", "description": "Lorem"},
        {"_id": "3453", "developerId": "234", "name": "Post 4", "websiteId": "456", "description": "Lorem"},
        {"_id": "4353", "developerId": "234", "name": "Post 5", "websiteId": "234", "description": "Lorem"},
        {"_id": "3455", "developerId": "234", "name": "Post 6", "websiteId": "456", "description": "Lorem"}
    ];
    //Create, read, update and delete

    function createPage(req, res) {
         let newPage = req.body.newPage;
         let websiteId = req.params.websiteId;
        let randId = Math.floor(Math.random() * 999) + 1;
        let freshPage =  {id:randId, name: newPage.name, description: newPage.description, websiteId: websiteId };
          pages.push(freshPage);
         // console.log(pages);
         res.json(freshPage);
    }

    function updatePage(req, res) {
         let pageId = req.params.pageId;
         let newPage = req.body;
         for(var p in pages){
         if( pages[p]._id == pageId ) {
         pages[p].name = newPage.name;
         pages[p].description = newPage.description;
         res.json(pages[p]);
         return;
         }
         }
    }

    function findAllPagesByWebsite(req, res) {
        let websiteId = req.params.websiteId;
        let idpage = [];
        for (let p in pages) {
            if (websiteId === pages[p].websiteId) {
                idpage.push(pages[p]);
            }
        }
        res.json(idpage);
    }

    function findPageById(req, res) {
         let pageId = req.params.pageId;
         let page = pages.find(site => {
         return ( site._id === pageId );
         });

         res.json(page);
    }

    function deletePage(req, res) {
         let pageId = req.params.pageId;
         for (p in page) {
             if (pages[p]._id == pageId) {
                 pages.splice(p, 1);
                 res.sendStatus(204);
             }
         }
    }
}
