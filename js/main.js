$.get("navbar.html", function(data){
    $("#nav-placeholder").replaceWith(data);
  });