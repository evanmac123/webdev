module.exports = function (app) {
    app.get("/api/page/:pageId/widget", findAllWidgetsByPageId);
    app.post("/api/page/:pageId/widget", createWidget);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);
    app.get("/api/widget/:widgetId", findWidgetById);

    let widgets = [
        {
            "_id": "123",
            "widgetType": "HEADER",
            "pageId": "321",
            "size": 2,
            "text": "GIZMODO"
        },
        {
            "_id": "234",
            "widgetType": "HEADER",
            "pageId": "2342",
            "size": 4,
            "text": "Lorem ipsum"
        },
        {
            "_id": "345",
            "widgetType": "IMAGE",
            "pageId": "321",
            "width": "100%",
            "url": "http://lorempixel.com/400/200/"
        },
        {
            "_id": "456",
            "widgetType": "HTML",
            "pageId": "2342",
            "text": "<p>Lorem ipsum</p>"
        },
        {
            "_id": "567",
            "widgetType": "HEADER",
            "pageId": "2342",
            "size": 4,
            "text": "Lorem ipsum"
        },
        {
            "_id": "678",
            "widgetType": "YOUTUBE",
            "pageId": "2342",
            "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E"
        },
        {
            "_id": "789",
            "widgetType": "HTML",
            "pageId": "2342",
            "text": "<p>Lorem ipsum</p>"
        }
    ];

    function assignId() {

        var id = Math.random() * 999;
        id = Math.floor(id);
        if (widgets.find(function (wg) {
                return wg._id === id;
            })) {
            assignId();
        } else {
            return id;
        }

    }

    function sortingWidgets(req, res){

    }

    /*
    function linkFunction(scope, element) {
      var startIndex = -1;
        var endIndex = -1;
        $('.sortable').sortable({
            axis: 'y',
            start: function (event, ui) {
                startIndex = ui.item.index();
            },
            stop: function (event, ui) {
                endIndex = ui.item.index();
                console.log([startIndex, endIndex]);
            }
        });
    }*/


    function createWidget(req, res) {
            let pageId = req.params.pageId;
           let widgetType = req.body.widgetType;
            switch (widgetType) {

                case "Header":
                    toCreate = {
                        "_id" : assignId() ,
                        "widgetType": "HEADER",
                        "pageId": pageId,
                        "size": 1,
                        "text": ""
                    };
                    break;

                case "Image":
                    toCreate = {
                        "_id" : assignId() ,
                        "widgetType": "IMAGE",
                        "pageId": pageId,
                        "width": "100%",
                        "url": "http://lorempixel.com/400/200/"
                    };
                    break;

                case "YouTube":
                    toCreate = {
                        "_id" : assignId(),
                        "widgetType": "YOUTUBE",
                        "pageId": pageId,
                        "width": "100%",
                        "url": "https://youtu.be/AM2Ivdi9c4E"
                    };
                    break;

                default:
                    throw "Unsupported widget";
            }
            widgets.push(toCreate);
            res.json(toCreate.widgetId);
    }

    function updateWidget(req, res) {
         let widgetId = req.params.widgetId;
         let newWidget = req.body;
         for(let w in widgets){
         if( widgets[w]._id == widgetId ) {
         widgets[w].name = newWidget.name;
         widgets[w].text = newWidget.text;
         widgets[w].url = newWidget.url;
         widgets[w].width = newWidget.width;
         widgets[w].size = newWidget.size;
         res.json(widgets[w]);
         return;
         }
         }
    }

    function findAllWidgetsByPageId(req, res) {
        let pageId = req.params.pageId;
        let idwidget = [];
        for (let w in widgets) {
            if (pageId === widgets[w].pageId) {
                idwidget.push(widgets[w]);
            }
        }
        res.json(idwidget);
    }

    function findWidgetById(req, res) {
        let widgetId = req.params.widgetId;
        for (let w in widgets) {
            if (widgets[w]._id === widgetId) {
                widget = widgets[w];
                res.json(widget);
            }
        }
    }

    function deleteWidget(req, res) {
         let widgetId = req.params.widgetId;
         for (let w in widgets) {
         if (widgets[w]._id == widgetId) {
         widgets.splice(widgets[w], 1);
         res.sendStatus(204);
         }
         }
    }
}
