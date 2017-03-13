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
        //  newPage = req.body;
        //  userId = req.params.userId;
        //  freshPage =  {name: newPage.name, description: newPage.description, developerId: userId };
        //}
        /* var newWebsite = req.body.website;
         var userId = req.params.userId;

         let randId = Math.floor(Math.random() * 999) + 1;
         const freshWebsite = {_id: randId, name: newWebsite.name, description: newWebsite.description,  developerId: userId};
         websites.push(freshWebsite);
         res.json(freshWebsite);*/
    }

    function updatePage(req, res) {
        /* let websiteId = req.params.websiteId;
         let newwebsite = req.body;
         console.log(newwebsite);
         for(var w in websites){
         if( websites[w]._id == websiteId ) {
         websites[w].name = newwebsite.name;
         websites[w].description = newwebsite.description;
         res.json(websites[w]);
         return;
         }
         }*/
    }

    function findAllPagesByWebsite(req, res) {
        let websiteId = req.params.websiteId;
        console.log(websiteId);

        let idpage = [];
        for (let p in pages) {
            if (websiteId === pages[p].websiteId) {
                idpage.push(pages[p]);
            }
        }
        res.json(idpage);
    }

    function findPageById(req, res) {
        /*  let websiteId = req.params.websiteId;
         let website = websites.find(site => {
         return ( site._id === websiteId );
         });

         res.json(website);*/
    }

    function deletePage(req, res) {
        /* let websiteId = req.params.websiteId;
         for (w in websites) {
         if (websites[w]._id == websiteId) {
         websites.splice(w, 1);
         res.sendStatus(204);
         }
         }
         }*/
    }
}
