$(document).ready(function(){
  $("button").click(function(){
    $.ajax({
       cache: false,
       dataType: 'json',
       url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
       success: function(a){
         $(".quote").empty();
         $(".quote").append(a[0].content + "<p>-" + a[0].title + "</p>");
         }
       });
    });
});
