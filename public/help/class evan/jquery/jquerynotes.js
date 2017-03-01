/*
moving javascript to the bottom to deal with the DOM
each method returns the object again
as long parent is sortable all the children are sortable
*/
(function (){
    jQuery(init);
    function init(){
        var h1 = $("h1"); //$= jQuery
        h1.remove();
    }
    append = child
    prepend = parent
    var theBody = $("body");
    var list = $("<ul>");
    var movies = [Titanic, Cars, Cats];
    for (m in movies){
        var li = $("<li>").append(movies[m]);
        list.append(li);
    }
    list.appendTo(theBody);
})