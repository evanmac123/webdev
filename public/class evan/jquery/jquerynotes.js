/*
moving javascript to the bottom to deal with the DOM
each method returns the object again
*/
(function (){
    jQuery(init);
    function init(){
        var h1 = $("h1"); //$= jQuery
        h1.remove();
    }
})